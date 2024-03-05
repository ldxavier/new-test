<template>
  <div :class="baseClass">
    {{ text }}

    <button
      @click="onClick()"
    >
      X
    </button>
  </div>
</template>

<script>
export default {
  props: ['variant', 'text'],
  computed: {
    baseClass() {
      return [
        'alert',
        this.variant ? `alert-${this.variant}` : ''

      ]
    }
  },
  methods: {
    onClick() {
      this.$emit('close');
      console.log('clicou');
    }
  }
}

</script>

<style scoped>
  .alert {
    background-color: #a2a2a2;
    color: white;
    border-radius: 6px;
    padding: 5px;
    width: 200px;
    display: flex;
    justify-content: space-between;
  }

  .alert-success {
    background-color: #6afd88;
  }

  .alert-danger {
    background-color: #ff4d4d;
  }


</style>
