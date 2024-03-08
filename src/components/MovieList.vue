<template>
  <div>
    <h1>Movies List</h1>
    <ul
      v-for="movie in MovieList"
      :key="movie.id"
    >

      <li>
        <button
          @click="favoriteMovies(movie)"
        >
          Add to favorites
        </button>
        {{ movie.gener }}: {{ movie.title }} - {{ movie.year }}

      </li>
    </ul>

    <div>
      <h1>Favorite Movies</h1>
      <ul
        v-for="(fav, index) in favMovies"
        :key="index"
      >
        <li>
            {{ fav.gener }}: {{ fav.title }} - {{ fav.year }}
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

const MovieList = ref([
  {title: 'The Shawshank Redemption', year: 1994, gener: 'drama'},
  {title: 'The Godfather', year: 1972, gener: 'sci-fi'},
  {title: 'The Godfather: Part II', year: 1974, gener: 'comedy'},
  {title: 'The Dark Knight', year: 2008, gener: 'action'},
  {title: 'The Science of Sleep', year: 2006, gener: 'drama'},

]);

const favMovies = ref([])


const favoriteMovies = (movie) => {
  if (favMovies.value.includes(movie)) {
    return alert('This movie is already in your favorites');
  }

  console.log('favoriteMovies', movie);
  favMovies.value.push(movie);

}

const removeFav = (movie) => {

  favMovies.value.splice(movie, 1);
}

</script>

<style scoped>
li{
  list-style-type: none
}

</style>
