<template>
  <div :class="baseClass">
    {{ text }}
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: [
    'variant',
    'text'
  ],
  setup(props){

    const baseClass = computed(() => {
      return [
        'alert',
        props.variant ? `alert-${props.variant}` : ''
      ];
    });
    return {
      baseClass
    }
  }
}
</script>

<style scoped>
.alert {
  padding: 20px;
  background-color: #7a7a7a;
  color: white;
  border-radius: 15px;
  width: 50%;
}

.alert-success {
  background-color: #4CAF50;
}

.alert-danger {
  background-color: #f44336;
}

</style>
