<template>
  <TheHeader v-show="showHeader"/><br>

  <div class="divv">
    <div>
      <label>Name: </label>
      <input
        class="inputs"
        v-model="name"
        type="text"
        placeholder="Type your name"
        @keyup.enter="clicar"
        >

        <button @click="clicar">
        Alert
      </button>
      <br>
    </div>

    <div>
      <label>What is your mother language?</label>
      <select
        style="height: 30px;"
        class="inputs"
        v-model="lang">
          <option value="" disabled>Select</option>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          <option value="Portuguese">Portuguese</option>
        </select> <br/>

        <span v-if="lang">Your mother language is: {{ lang }}<br/></span><br>
    </div>

    <div>
      <label>What languages do you speak?</label><br/>
        <input type="checkbox" v-model="check" value="PT">
        PT
        <input type="checkbox" v-model="check" value="PL">
        PL
        <input type="checkbox" v-model="check" value="DE">
        DE
        <input type="checkbox" v-model="check" value="ES">
        ES <br/>
        <input type="checkbox" v-model="check" value="EN">
        EN
        <input type="checkbox" v-model="check" value="IT">
        IT
        <input type="checkbox" v-model="check" value="RU">
        RU
        <input type="checkbox" v-model="check" value="FR">
        FR <br>

        <div v-if="check.length != 0">
          {{ check }}
          <button @click="clear">Clear</button>
        </div>
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
      lang: '',
      check: []
    }
  },
  methods: {
    clicar(){
      alert('Hello, ' + this.name);
      this.name = ''
    },
    clear(){
      this.check = []
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
.divv{
  background-color: rgb(93, 83, 112);
  width: 60%;;
  margin: auto;
  padding: 8px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-top: 120px;
  border-radius: 50px;
}
.inputs{
  width: 40%;
  height: 15px;
  margin: 2px;
  margin-block-end: 5px;
  border-radius: 10px;
  padding: 4px;
  font-size: 15px;
  background-color: #ffffff;
}

</style>
