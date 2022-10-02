<template>
    <div>
        <div class="sidenav">
            <div href="#" class="title">  Trollo-2  </div>
            <div class="menu">
                <div href="#newFolder" class="new-folder">
                    <p>
                      New folder <Plus @click="handleClick('Folder')" class="icon new-folder" style="width: 25px; height: 25px" />
                    </p>
                </div>
                <Navigation @renewLists="renewLists" :folder="listsFolder" />
            </div>
        </div>
        <Modal :isShow="isShow" @closeModal="isShow = false" @renewLists="renewLists" />
        <div class="main">
            <h2>Sidebar</h2>
            <p>This sidebar is of full height (100%) and always shown.</p>
            <p>Scroll down the page to see the result.</p>
            <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
            <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
            <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
            <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
  import { onBeforeMount, ref } from 'vue';
  import Plus from '../components/icons/Plus.vue'
  import Modal from '../components/Modal.vue'
  import Navigation from '../components/Navigation.vue';
  import { getSummary } from '../composables/idGenerator'
  import { getAllFolder, lists } from '../composables/folder'
  import folderTypes from '../types/folder';
  import { isShow, whatCreate } from '../composables/modalState';
  import { createTerm } from '../types/creteTerm';

  const listsFolder = ref<folderTypes[]>([])

  const handleClick = (term: createTerm) => {
    whatCreate.value = term
    isShow.value = true
  }

  const renewLists = () => {
    listsFolder.value = lists
  }

  onBeforeMount(async () => {
    getSummary()
    await getAllFolder()
    renewLists()
  })
</script>

<style>
.sidenav {
    height: 100%;
    width: 200px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    padding-top: 20px;
    text-align: left;
}

.title {
    z-index: 1;
    top: 0;
    left: 0;
    padding-top: 20px;
    text-align: center;
    font-size: x-large;
    font-weight: bolder;
    font-family: 'Courier New', Courier, monospace
}

.menu {
    margin-top: 30px;
}

.main {
  margin-left: 160px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
  text-align: left;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

.new-folder {
  font-size: 1.3rem;
  margin-left: 10px;
}

.icon {
  cursor: pointer;
}

.icon:hover {
  -ms-transform: rotate(-15deg); /* IE 9 */
    -webkit-transform: rotate(-15deg); /* Chrome, Safari, Opera */
    transform: rotate(-15deg);
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%);
}

</style>