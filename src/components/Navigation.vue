<template>
  <div v-if="folder">
    <span class="menu-lists" v-for="fold in folder" :key="fold.id" >
      <Trash @click="handleRemove(fold.id)" class="icon" style="width: 15px; height: 15px" />
      <Plus @click="handleClick('Project', fold.id)" class="icon" style="width: 15px; height: 15px" />
      <a :href="fold.href">
        {{ fold.name +'('+fold.projects.length+')' }}
      </a>
      <br />
    </span>
  </div>
</template>

<script lang="ts" setup>

  import Plus from './icons/Plus.vue'
  import Trash from './icons/Trash.vue';
  import folderTypes from '../types/folder';
  import { deleteFolder } from '../composables/folder'
  import { isShow, whatCreate, idParent } from '../composables/modalState';
  import { createTerm } from '../types/creteTerm';

  const props = defineProps({
    folder: Array<folderTypes>
  })

  const emit = defineEmits(['renewLists'])

  const handleClick = (term: createTerm, idFolder: string) => {
    whatCreate.value = term
    idParent.value = idFolder
    isShow.value = true
  }

  const handleRemove = async (e: string) => {
    // console.log('delete')
    await deleteFolder(e)
    emit('renewLists')
  }

</script>

<style scoped>

.menu-lists a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 1.2rem;
  color: #818181;
  display: block;
}

.menu-lists a:hover {
  color: #f1f1f1;
}

.menu-lists {
  margin-left: 0.8rem;
  display: inline-flex;
  align-items: center;
  width: 100%;
}
</style>