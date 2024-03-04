<template>
  <div :class="baseClass">
    {{ text }}

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
  }

  .alert-success {
    background-color: #6afd88;
  }

  .alert-danger {
    background-color: #ff4d4d;
  }

</style>
