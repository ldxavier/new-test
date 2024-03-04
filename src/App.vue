<template>
  <TheHeader v-show="showHeader"/><br>
  <BaseAlert :variant="variant" :text="text"/>

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
    const variant = ref('danger');
    const text = ref('Failed alert');


    return {
      showHeader,
      BaseAlert,
      variant,
      text
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
