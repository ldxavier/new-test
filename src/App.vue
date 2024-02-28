<template>
  <div v-show="showFirstDiv">
    <TheHeader/><br>
    Name: {{ name }}<br/>
    Last Name: {{ lastName }}
    <br/><br/>

  <div v-if="levelAcess == 'cliente'"> Cliente </div>
  <div v-else-if="levelAcess == 'admin'"> Admin </div>
  <div v-else> Staff </div>

  </div> <br/>

  <img alt="Vue logo" src="./assets/logo.png">

</template>

<script>
import TheHeader from './components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheHeader
  },
  data(){
    return{
      showFirstDiv: true,
      name: 'Lucas',
      lastName: 'Xavier',
      levelAcess: 'admin'

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
