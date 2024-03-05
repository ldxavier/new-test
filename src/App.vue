<template>
  <TheHeader v-show="showHeader"/><br>
  <BaseAlert
    v-if="showBase"
    :variant="def"
    :text="defT"
    @close="onClose"
    />

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
      danger: 'danger',
      textD: 'Formulário com erro, não enviado',
      success: 'success',
      textS: 'Formulário enviado com sucesso',
      def: '',
      defT: 'Preencha o formulário',
      showBase: true

    }
  },
  methods: {
    onClose(){
      this.showBase = false;
      console.log('clicou');
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
