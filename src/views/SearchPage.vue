<template>
  <SearchSection :allFilms="allFilms" :search-by-category="this.$route.query.searchBy" :search-query="this.$route.query.query"/>
  <CardItems :allFilms="allFilms" />
  <Footer />
</template>

<script>
import SearchSection from "./../components/SearchSection";
import CardItems from "../components/CardItems.vue";
import Footer from "../components/Footer.vue";

import Films from "./../assets/data/films.json";

export default {
  name: "home-page",
  components: {
    SearchSection,
    CardItems,
    Footer,
  },
  data() {
    return {
      allFilms: Films
    };
  },
  mounted() {
    this.searchFilm(this.$route.query.query, this.$route.query.searchBy);
  },
  methods: {
    searchFilm(query, searchBy) {
      if (searchBy === 'title') {
        this.allFilms = this.allFilms.filter(
          film => film[searchBy].toLowerCase().indexOf(query.toLowerCase()) + 1 > 0
        );
      } else {
        const newFilmsList = [];
        this.allFilms.forEach(film => {
          this.allFilms = film[searchBy].forEach(genre => {
            if (genre.toLowerCase().indexOf(query.toLowerCase()) + 1 > 0) {
              if (newFilmsList.findIndex(object => object.id === film.id) === -1) {
                newFilmsList.push(film);
              }
            }
          });
        });
        this.allFilms = newFilmsList;
      }
    }
  }
};
</script>

<style scoped></style>
