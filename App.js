import AddMovie from './AddMovie.js'
import MovieList from './MovieList.js'

export default {
  components: {
    AddMovie,
    MovieList
  },
  template: `
    <div id="app">
      <AddMovie @newMovie="onNewMovie"></AddMovie>
      <br>
      <MovieList :movies="movies" />
    </div>
  `,
  data() {
    return {
      movies: []
    }
  },
  methods: {
    onNewMovie(movie) {
      this.movies.push(movie)
      localStorage.setItem('localmovies', JSON.stringify(this.movies));
    }
  },
  created() {
    if (localStorage.getItem("localmovies") !== null) {
      this.movies = JSON.parse(localStorage.getItem('localmovies')) 
    } 
  }
}
