export default {
    props: ['movie'],
    template: `
      <div @click="removeMovie" class="movie-card">
        <h3 class="card-title" >{{ movie.title.toUpperCase() }}</h3>
        <h3 class="card-rating" >Rating: {{ movie.rating }}/5</h3>
          <br>
        <img class="card-image" :src="movie.image" alt="image"/>
        <h3 class="card-genre" >Genre: {{ movie.genre }}</h3>
        <p>Description: {{ movie.desc }}</p>
      </div>`,
    methods: {
      removeMovie() {
        this.$emit('removeMovie', this.movie)
      }
    }
}