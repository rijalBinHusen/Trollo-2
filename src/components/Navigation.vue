<template>
  <div v-if="folder">
    <span class="menu-lists" v-for="fold in folder" :key="fold.id" >
      <Plus @click="handleClick('board')" class="icon" style="width: 15px; height: 15px" />
      <a :href="fold.href">
        {{ fold.name }}
      </a>
    </span>
  </div>
</template>

<script lang="ts" setup>

  import Plus from './icons/Plus.vue'
  import folderTypes from '../types/folder';

  const props = defineProps({
    folder: Array<folderTypes>
  })

  const folder = props.folder

  const handleClick = (e: string) => {
    console.log('asdf')
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
}
</style>