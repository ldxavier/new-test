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
    background-color: #87f8eb;
    padding: 30px;
    text-align: center;
    color: white;
    position: fixed;
    width: 100%;
    height: 30px;
    top: 0;
    left: 0;
  }
</style>
