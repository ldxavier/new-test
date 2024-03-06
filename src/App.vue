<template>
  <HeaderNav/>
  <ListTask/>

</template>

<script setup>
  import HeaderNav from './components/HeaderNav.vue'
  import ListTask from './components/ListTask.vue'

export default {
  name: 'App',
  components: {
    TheHeader
  },
  data(){
    return{
      showHeader: true,

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
}

.task {
  margin-top: 100px
}
</style>
