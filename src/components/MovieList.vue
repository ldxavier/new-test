<template>
  <div class="general">

    <div>
      <h1 style="margin-left: -35%;">Movies List</h1>
      <ul class="movieList"
        v-for="movie in MovieList"
        :key="movie.id"
      >
        <li>
          <h2>Title</h2>
          {{ movie.title }}<br/>
          {{ movie.body }}<br/>
          <button
            @click="favoriteMovies(movie)"
          >
            Add to favorites
          </button>

        </li>
      </ul>
    </div>

    <div class="favList">
      <h1 style="margin-left: -500px;">Favorite Movies</h1>
      <ul
        class="favMovies"
        v-for="(fav, index) in favMovies"
        :key="index"
      >
        <li>
          <h3>Title</h3><br/>
          {{ fav.title }}<br/>
          {{ fav.body }}<br/>

              <button @click="removeFav(index)">
              X
            </button>
        </li>
      </ul>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const MovieList = ref([

]);

const favMovies = ref([])


const favoriteMovies = (movie) => {
  if (favMovies.value.includes(movie)) {
    return alert('This movie is already in your favorites');
  }

  console.log('favoriteMovies', movie);
  favMovies.value.push(movie);

}

const fetchMovies = () => {
       axios
         .get("https://jsonplaceholder.typicode.com/posts")
         .then((res) => {
           MovieList.value = res.data;
         })
         .catch((error) => {
           console.log(error);
         });
     }
fetchMovies();

const removeFav = (movie) => {

  favMovies.value.splice(movie, 1);
}
</script>

<style scoped>
.general {
  display: flex;
  justify-content: space-bettween;
}


 li {
  list-style-type: none;
}

.movieList {
  border: 1px solid #000;
  border-radius: 13px;
  background-color: #4d4b4b;
  color: white;
  width: 40%;
  padding: 10px;
  margin-left: 10%;
}

.favMovies {
  border: 1px solid #000;
  border-radius: 13px;
  background-color: #fbd12c;
  color: white;
  width: 400px;
  padding: 10px;
  margin-left: -20%;
}

button {
  border-radius: 10px;
  margin-top: 10px;
  padding: 3px;
}
</style>
