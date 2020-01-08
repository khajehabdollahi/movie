import Movie from './Movie.js'

export default {
  template: `
    <div class="add-movie">
      <form>
        <h1>Add Movie</h1>
        <hr>
        <div class="title">
          <label for="title">Title</label>
          <input id="title" v-model="title" type="text">
        </div>
        <br>
        <label for="image">Image url</label>
        <input id="image" v-model="image" type="text">
        <br>
        <label for="rating">Rating</label>
        1
        <input id="rating" class="slider" type="range" v-model="rating" min="1" max="5">
        5
        <span class="current-rating">{{rating}}</span>
        <br>
        <div class="genre">
          <label for="genre">Genre</label>
          <select id="genre" v-model="genre">
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
            <option value="Comedy">Comedy</option>
          </select>
        </div>
        
        <br>
        <label for="description">Description</label>
        <textarea id="description" v-model="desc"></textarea>
        <br>
        <button @click.prevent="clearForm">Clear</button>
        <button @click.prevent="addMovie">Add</button>
      </form>
    </div>
    `,
  data() {
    return {
      title: '',
      image: '',
      rating: 3,
      genre: 'Drama',
      desc: ''
    }
  },
  methods: {
    addMovie(evt) {
      evt.preventDefault()
      if (this.title == '') {
        alert('Filmtitel krävs!')
      }else{
        let movie = new Movie(
          this.title,
          this.image,
          this.rating,
          this.genre,
          this.desc 
        )
        console.log(movie);
        this.$emit('newMovie', movie)
        this.clearForm()
      }
    },
    clearForm() {
      this.title = ''
      this.image = ''
      this.movie = ''
      this.rating = 3
      this.genre = 'Drama'
      this.desc = ''
    }
  }
}