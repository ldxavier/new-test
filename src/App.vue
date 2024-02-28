<template>

  <TheHeader v-show="showHeader"/><br>

  <img alt="Vue logo" src="./assets/logo.png">

  <div>
    <div
      v-for="(list, index) in listTodos"
      :key="list.id"
      class="list"
      >
      <img
        v-if="list.srcImg"
        :src="list.srcImg"
        alt="altImg"
        class="img"
        >

      {{ index + 1 }}. {{list.title}}

    </div>
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
      listTodos:[
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false,
          "srcImg": "https://fakeimg.pl/100x100"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false,
          "srcImg": "https://fakeimg.pl/100x100"
        },
        {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false,
          "srcImg": "https://fakeimg.pl/100x100"
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
          "completed": false,
          "srcImg": "https://fakeimg.pl/100x100"
        },
        {
          "userId": 1,
          "id": 7,
          "title": "illo expedita consequatur quia in",
          "completed": false
        }
      ],


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

.list {
  background-color: #42b983;
  color: white;
  padding: 20px;
  width: 50%;
  margin: 10px auto;
  border-radius: 30px;
}

.img{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
}

</style>
