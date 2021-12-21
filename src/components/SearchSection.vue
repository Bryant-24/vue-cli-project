<template>
  <section class="search-section">

    <div class="search-section__wrap">
      <div class="search-section__logo"><Logo /></div>
      <h2 class="search-section__title">Find your movie</h2>

      <div class="search-section__control">
        <div class="search-section__control-blur"></div>
        <input class="search-section__input" placeholder="Search" v-model="searchInput" />
        <button class="search-section__button" @click="search">Search</button>
      </div>

      <Toggle
        @toggle="searchBy"
        :title="'Search by'"
        :option-one-name="'Title'"
        :option-one-value="'title'"
        :option-two-name="'Gengre'"
        :option-two-value="'genre'"
        :option-active="searchByField"
      />
    </div>

    <div class="search-section__sort">
      <Toggle
        @toggle="sortBy"
        :title="'Sort by'"
        :option-one-name="'Released date'"
        :option-one-value="'year'"
        :option-two-name="'Rating'"
        :option-two-value="'rating'"
      />
    </div>

  </section>
</template>

<script>
import Logo from "./Logo";
import Toggle from "./share/Toggle";

export default {
  name: "search-section",
  components: {
    Logo,
    Toggle,
  },
  data() {
    return {
      films: this.allFilms,
      searchInput: this.searchQuery,
      searchByField: this.searchByCategory ? this.searchByCategory : 'title'
    }
  },
  props: ['allFilms', 'searchQuery', 'searchByCategory'],
  methods: {
    sortBy(field) {
      this.films = this.films.sort(
        (a, b) => (a[field] < b[field]) ? 1 : ((b[field] < a[field]) ? -1 : 0)
      );
      this.$emit("sortBy", this.films);
    },
    searchBy(option) {
      this.searchByField = option;
    },
    search() {
      this.$router.push({
        path:'/search',
        query: {
          query: this.searchInput, 
          searchBy: this.searchByField
        }
      });
    },
  }
};
</script>

<style scoped>
.search-section__wrap {
  position: relative;
  padding: 102px 118px 152px;
  background-image: url(./../assets/img/posters.png);
  background-size: cover;
}

.search-section__logo {
  position: absolute;
  top: 17px;
  left: 59px;
}

.search-section__title {
  margin: 0 0 37px;
  font-size: 40px;
  font-weight: 100;
  text-transform: uppercase;
  color: #fff;
}

.search-section__control {
  margin: 0 0 13px;
}

.search-section__control-blur {
  position: absolute;
  display: inline-block;
  width: 712px;
  height: 57px;
  background-color: #fff;
  border-radius: 5px;
  opacity: 0.2;
}

.search-section__input {
  position: relative;
  width: 672px;
  margin: 0 19px 0 0;
  padding: 17px 18px;
  font-weight: 100;
  font-size: 20px;
  background: none;
  border: none;
  color: #fff;
  outline: none;
}

.search-section__button {
  padding: 17px 74px 16px;
  font-size: 20px;
  text-transform: uppercase;
  background-color: #f65261;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.search-section__sort {
  padding: 20px 130px;
  font-size: 16px;
  text-align: right;
  color: #fff;
  background-color: #555;
}
</style>
