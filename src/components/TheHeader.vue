<template>
  <header class="header">
    <img alt="Vue logo" src="../assets/logo.png">
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

<style scoped>
  .header{
    background-color: rgb(221, 114, 43);
    color: #fff;
    display: flex;
    justify-content: center;

  }

  img{
    width: 80px;
    height: 80px;
  }
</style>
