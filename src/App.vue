<template>
  <TheHeader v-show="showHeader"/><br>
  <BaseAlert :variant="variant" :text="text"/>

</template>

<script>
import TheHeader from './components/TheHeader.vue'
import BaseAlert from './components/BaseAlert.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    BaseAlert
  },
  data(){
    return{
      showHeader: false,
      variant: 'danger',
      text: 'Formulário com erro, não enviado'

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
