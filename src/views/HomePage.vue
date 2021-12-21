<template>
  <SearchSection :allFilms="allFilms" @sortBy="sortBy" />
  <CardItems :allFilms="allFilms" />
  <Footer />
</template>

<script>
import SearchSection from "./../components/SearchSection";
import CardItems from "../components/CardItems";
import Footer from "../components/Footer";

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
  methods: {
    sortBy(sortedFilms) {
      this.allFilms = sortedFilms;
    }
  }
};
</script>

<style scoped></style>
