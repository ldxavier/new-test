<template>
  <TheHeader v-show="showHeader"/><br>

  <div class="div1">
    <div>
      <label><strong>Name: </strong></label>
      <input
        class="inputs"
        @keyup.enter="alerta"
        v-model="name"
        type="text"
        placeholder="Enter your name">

      <button class="buttons" @click="alerta">
        Alert
      </button>
      <br/>
      <br/>
    </div>

    <div>
      <label><strong>What is your favorite language?</strong> </label><br/>
      <select class="selects" v-model="languages">
        <option value="" disabled>Select</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
        <option value="C#">C#</option>
        <option value="C++">C++</option>
        <option value="Ruby">Ruby</option>
        <option value="Go">Go</option>
        <option value="Kotlin">Kotlin</option>
        <option value="Swift">Swift</option>
        <option value="PHP">PHP</option>
      </select> <br/>
      <div v-if="languages">
        Nice! You're a {{ languages }} developer
      </div> <br/>
    </div>

    <div>
      <label><strong>What languages do you know?</strong></label> <br/>
      <input type="checkbox" value="JavaScript" v-model="checkLang"> JavaScript
      <input type="checkbox" value="Python" v-model="checkLang"> Python
      <input type="checkbox" value="Java" v-model="checkLang"> Java
      <input type="checkbox" value="C#" v-model="checkLang"> C#
      <input type="checkbox" value="C++" v-model="checkLang"> C++ <br/>
      <input type="checkbox" value="Ruby" v-model="checkLang"> Ruby
      <input type="checkbox" value="Go" v-model="checkLang"> Go
      <input type="checkbox" value="Kotlin" v-model="checkLang"> Kotlin
      <input type="checkbox" value="Swift" v-model="checkLang"> Swift
      <input type="checkbox" value="PHP" v-model="checkLang"> PHP
      <br/>

      <div v-if="checkLang.length != 0">
        {{ checkLang }}
        <button class="buttons" @click="clear">
          Clear
        </button>
      </div>
    </div>

  </div>

</template>

<script>
import { ref } from "vue";
import TheHeader from './components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheHeader
  },
  setup(){
    // reactive
    const showHeader = ref(true);
    const name = ref('');
    const languages = ref('');
    const checkLang = ref([]);

    //methods
    const alerta = () => {
      alert('Hello, ' + name.value);
      name.value = '';
    };
    const clear = () => {
      checkLang.value = [];
    };

    return {
      showHeader,
      name,
      alerta,
      languages,
      checkLang,
      clear,
    };
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

.div1{
  margin-top:50px;
  background-color: rgb(71, 64, 80);
  width: 50%;
  height: auto;
  margin-left: 25%;
  border-radius: 30px;
  padding: 20px;
  color: #fff;
  font-size: 18px;
}

.inputs{
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 3px;
  border-end-start-radius: 10px;
  border-start-start-radius: 10px;
  border: none;
  width: 280px;
  color: #000;
}

.buttons{
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 0px;
  padding: 3px;
  border-start-end-radius: 10px;
  border-end-end-radius: 10px;
  border: none;
  width: 60px;
  background-color: #282727;
}

.selects{
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 3px;
  border-radius: 10px;
  border: none;
  width: 150px;
  color: #000;
}

input[type="checkbox"]{
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 3px;
  border-radius: 10px;
  border: none;
  width: 10px;
}

</style>
