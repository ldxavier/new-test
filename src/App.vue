<template>
  <TheHeader v-show="showHeader"/><br>

  <div class="divGeral">
    <div class="container">
      <h2>Completed List</h2>
      <div
        v-for="lis in completed"
        :key="lis.id"
      >
        {{lis.title}}
      </div>
      <h4 style="margin-top: 40%;" v-if="completed.length == 0">Empty list</h4>
    </div>

    <div class="container">
      <h2>Incomplete List</h2>
      <div
        v-for="lis in unCompleted"
        :key="lis.id"
      >
        {{lis.title}}

      </div>
      <h4 style="margin-top: 40%;" v-if="unCompleted.length == 0">Empty list</h4>
    </div>

    <div class="container">
      <h2>Full Tasks</h2>
      <div
        v-for="lis in list"
        :key="lis.id"
        >
        <input type="checkbox" v-model="lis.completed">
        {{lis.title}}

      </div>
      <button
      @click="clear"
      >
        Clear
      </button>
    </div>

  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import { computed, ref } from "vue";

export default {
  name: 'App',
  components: {
    TheHeader
  },
  setup() {
    const showHeader = ref(true);
    const list = ref([
      {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      },
      {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
      }
    ]);


    //computed
    const unCompleted = computed(() => {
      return list.value.filter((lis) => lis.completed == false);
    });

    const completed = computed(() => {
      return list.value.filter((lis) => lis.completed == true);
    });

    //methods
    const clear = () => {
      list.value.forEach((lis) => {
        lis.completed = false;
      })
    }

    return {
      showHeader,
      list,
      unCompleted,
      completed,
      clear,

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

.divGeral{
  display: flex;
  justify-content: space-around;
  margin-top: 60px;
}

.container{
  border: 1px solid #000;
  padding: 10px;
  width: 30%;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px #000;
}
</style>
