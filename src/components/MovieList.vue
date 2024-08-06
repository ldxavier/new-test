<template>
  <div class="general">
    <div class="movie-section">
      <h1>Movies List</h1>
      <ul class="movieList">
        <li v-for="movie in MovieList" :key="movie.id">
          <h2>Title</h2>
          {{ movie.title }}<br/>
          {{ movie.body }}<br/>
          <button @click="favoriteMovies(movie)">
            Add to favorites
          </button>
        </li>
      </ul>
    </div>

    <div class="fav-section" v-if="favMovies.length > 0">
      <h1>Favorite Movies</h1>
      <ul class="favMovies">
        <li v-for="(fav, index) in favMovies" :key="index">
          <h3>Title</h3><br/>
          {{ fav.title }}<br/>
          {{ fav.body }}<br/>
          <button @click="removeFav(index)">X</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const MovieList = ref([]);
const favMovies = ref([])

const favoriteMovies = (movie) => {
  if (favMovies.value.includes(movie)) {
    return alert('This movie is already in your favorites');
  }
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

const removeFav = (index) => {
  favMovies.value.splice(index, 1);
}
</script>

<style scoped>
.general {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.movie-section, .fav-section {
  width: 45%;
}

.movie-section {
  margin-right: 5%;
}

.movieList, .favMovies {
  border: 1px solid #000;
  border-radius: 13px;
  padding: 10px;
  margin-top: 20px;
}

.movieList {
  background-color: #4d4b4b;
  color: white;
}

.favMovies {
  background-color: #fbd12c;
  color: white;
}

h1 {
  text-align: center;
}

li {
  list-style: none;
  margin-bottom: 10px;
  padding: 10px; /* Adicionado padding entre os cards */
}

button {
  border-radius: 10px;
  margin-top: 10px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
