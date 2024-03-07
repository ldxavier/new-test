<template>
  <nav class="header">
    {{ header }}
  </nav>
</template>

<script setup>
  import { ref } from 'vue'

  const header = ref('HEADERE ARE HERE')

</script>


<style>
  .header {
    background-color: #447670;
    padding: 30px;
    text-align: center;
    color: rgb(0, 0, 0);
    font-size: 20px;
    font-weight: bold;
    position: fixed;
    width: 100%;
    height: 30px;
    top: 0;
    left: 0;
  }
</style>
