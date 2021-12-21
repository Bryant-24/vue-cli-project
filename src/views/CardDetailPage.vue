<template>
  <CardDetail :film="film" />
  <CardItems :allFilms="filmsSameGenre" />
  <Footer />
</template>

<script>
import CardDetail from "../components/CardDetail.vue";
import CardItems from "../components/CardItems.vue";
import Footer from "../components/Footer.vue";

import films from "./../assets/data/films.json";

export default {
  name: "card-detail-page",
  components: {
    CardDetail,
    CardItems,
    Footer,
  },
  data() {
    return {
      film: films[0],
      films,
      filmsSameGenre: []
    };
  },
  mounted() {
    this.films.forEach((film) => {
      if (film.id == this.$route.params.id) {
        this.film = film;
      }
    });

    this.films[this.$route.params.id].genre.forEach(genre => {
      this.films.forEach(film => {
        if (
          film.genre.indexOf(genre) > -1 && 
          film.id != this.$route.params.id && 
          this.filmsSameGenre.indexOf(film) == -1
        ) {
          this.filmsSameGenre.push(film);
        }
      });
    });
  }
};
</script>

<style scoped></style>
