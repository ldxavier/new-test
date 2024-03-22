<template>
  <header class="header">
    {{ props.name }}
  </header>
</template>

<script setup>
  import { defineProps } from 'vue';

const props = defineProps({
  name: {
    type: String,
    default: 'Vue 3'
  }
});

</script>

<style>
  .header{
    background-color: rgb(250, 100, 0);
    padding: 40px;
    color: #fff;

  }
</style>
