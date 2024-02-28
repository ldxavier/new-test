<template>
  <TheHeader v-show="showHeader"/><br>

  <div>
    <label>Name: </label>
    <input
      v-model="name"
      type="text" placeholder="Digite seu nome"> <br/>
      {{ name }} <br/>
  </div>
  <div>
    <label>Languages: </label>
    <select v-model="lang">
      <option disabled value="">Select</option>
      <option value="PT">Portuguese</option>
      <option value="EN">English</option>
      <option value="ES">Spanish</option>
    </select><br/>

    <div v-if="lang ">
      Selected {{ lang }}
    </div>
  </div>

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
      showHeader: true,
      name: '',
      lang: ''

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
</style>
