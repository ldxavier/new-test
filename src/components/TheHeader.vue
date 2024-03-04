<template>
  <header class="header">
    <img class="imgg" alt="Vue logo" src="../assets/logo.png">

    <div class="txt">{{ name }}</div>
  </header>
</template>

<script>
import { ref } from "vue";
  export default{
    name: 'TheHeader',
    setup(){
      const name = ref('Here is the Header Component');

      return {
        name,
      }
    }
  }
</script>

<style>
  .header{
    background-color: rgb(208, 92, 15);
    padding: 10px;
    color: #fff;
    left: 0;
    position: fixed;
    width: 100%;
    top: 0;

  }

  .imgg{
    width: 60px;
    height: 60px;
    padding: 7px;
    border: 4px #000000;
    border-radius: 50%;
    box-shadow: 0 0 7px #000000;
  }

  .txt{
    font-size: 20px;
    font-weight: bold;
  }

</style>
