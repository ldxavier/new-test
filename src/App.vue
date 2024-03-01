<template>
  <TheHeader v-show="showHeader"/><br>

  <h2>Open List</h2>
  <div
    v-for="lis in uncompleted"
    :key="lis.id"
    class="div1"
  >

    {{lis.title}}

  </div>
  <br/>

  <h2>Completed List</h2>
  <div
    v-for="lis in completed"
    :key="lis.id"
    class="div1"
  >

    {{lis.title}}
  </div>

  <h2>Full List</h2>
  <div
    v-for="list in list"
    :key="list.id"
    class="div1"
  >
  <input
    v-model="list.completed"
    type="checkbox"
  >
  {{list.title}}

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
      list: [
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
        },
        {
          "userId": 1,
          "id": 6,
          "title": "qui ullam ratione quibusdam voluptatem quia omnis",
          "completed": false
        },
        {
          "userId": 1,
          "id": 7,
          "title": "illo expedita consequatur quia in",
          "completed": false
        },
        {
          "userId": 1,
          "id": 8,
          "title": "quo adipisci enim quam ut ab",
          "completed": true
        },
      ]
    }
  },
  computed: {
    uncompleted(){
      return this.list.filter(lis => !lis.completed);
    },

    completed(){
      return this.list.filter(lis => lis.completed);
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
  color: #ffffff;
  margin-top: 100px;
}

.div1{
  margin-top: 15px;
  padding: 10px;
  border: 1px solid #000;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  background-color: #4d4b4b;
  color: #fff;
  font-size: 20px;
  border-radius: 13px;

}
</style>
