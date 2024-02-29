<template>
  <header class="header">
      <dl class="dlClass">
        <dd>
          <img class="imgg" alt="Vue logo" src="../assets/logo.png">
        </dd>
        <dd class="ttt">
          {{ name }}
        </dd>
      </dl>
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
    background-color: rgb(93, 83, 112);
    padding: 10px;
    color: #fff;
  }

  .imgg{
    width: 60px;
    height: 60px;
    padding: 3px;
    border: 4px double #000000;
    border-radius: 50%;
    box-shadow: 0 0 7px #999696;

  }

  .dlClass{
    display: flex;
    justify-content: stretch;
    align-items: center;

  }

  .ttt{
    font-size: 25px;
    font-weight: bold;
  }
</style>
