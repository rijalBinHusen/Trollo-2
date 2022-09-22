<template>
<!-- The Modal -->
<div v-if="isShow" id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close-modal-icon" @click="handleClick">&times;</span>
    <input type="text" v-model="name" @keyup.enter="handleSubmit">
  </div>

</div>

</template>

<script lang="ts" setup>
import { ref } from 'vue';


  const props = defineProps({ isShow: Boolean })
  const emit = defineEmits(['closeModal'])
  const name = ref('')

  const handleClick = () => {
    emit('closeModal')
  }

  const handleSubmit = () => {
    console.log('enter was fired')

  }

</script>

<style scoped>
    
    /* The Modal (background) */
    .modal {
      display: block; /* Hidden by default */
      position: fixed; /* Stay in place */
      z-index: 1; /* Sit on top */
      padding-top: 100px; /* Location of the box */
      left: 0;
      top: 0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      overflow: auto; /* Enable scroll if needed */
      background-color: rgb(0,0,0); /* Fallback color */
      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }
    
    /* Modal Content */
    .modal-content {
      background-color: #111;
      margin: auto;
      padding: 20px;
      border: 1px solid #888;
      width: 80%;
    }
    
    /* The Close Button */
    .close-modal-icon {
      color: #aaaaaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }
    
    .close-modal-icon:hover,
    .close-modal-icon:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }
    </style>