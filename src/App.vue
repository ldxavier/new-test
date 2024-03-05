<template>
  <TheHeader v-show="showHeader"/><br>
  <BaseAlert
    v-if="showButton"
    :variant="success"
    :text="textS"
    @close="Clique"
    />

    <button
      class="buttonC"
      v-if="showButton == false"
      @click="showButton = true"
    >Show</button>

</template>

<script>
import TheHeader from './components/TheHeader.vue'
import { ref } from 'vue'
import BaseAlert from './components/BaseAlert.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    BaseAlert
  },
  setup() {
    const showHeader = ref(false);
    const showButton = ref(true);

    const def = ref('');
    const text = ref('This is the default alert');
    const danger = ref('danger');
    const textD = ref('This alert has not been submitted');
    const success = ref('success');
    const textS = ref('This alert was submitted successfully');

    const Clique = () => {
      showButton.value = false;
      console.log('Clique no botão de fechar');
    }


    return {
      showHeader,
      BaseAlert,
      def,
      danger,
      textD,
      textS,
      success,
      text,
      Clique,
      showButton
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

.buttonC{
  background-color: gray;
  color: white;
  border: oldlace;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;

}
.buttonC:hover {
  background-color: #3c3d3c;
  color: white;
}

.buttonC:active {
  background-color: #3c3d3c;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>
