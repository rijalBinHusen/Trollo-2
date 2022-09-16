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