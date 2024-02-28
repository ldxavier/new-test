<template>
  <header class="header">
    {{ name }}
  </header>
</template>

<script>
  export default{
    data(){
      return{
        name: 'Here is the header component'
      }
    }
  }
</script>

<style>
  .header{
    background-color: rgb(250, 100, 0);
    padding: 40px;
    color: #fff;

  }
</style>
