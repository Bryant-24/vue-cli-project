<template>
  <div class="search-by">
    <span class="search-by__title">Search by</span>

    <button
      class="search-by__button search-by__button--first"
      :class="[ isSearchByTitle ? 'search-by__button--active' : '' ]"
      @click="toggleSearchBy"
      :disabled="isSearchByTitle"
    >
      Title
    </button>

    <button
      class="search-by__button search-by__button--second"
      :class="[ !isSearchByTitle ? 'search-by__button--active' : '' ]"
      @click="toggleSearchBy"
      :disabled="!isSearchByTitle"
    >
      Gengre
    </button>

  </div>
</template>

<script>
export default {
  name: "search-by",
  data() {
    return {
      isSearchByTitle: true
    }
  },
  methods: {
    toggleSearchBy() {
      this.isSearchByTitle = !this.isSearchByTitle
    }
  }
};
</script>

<style scoped>
.search-by {
  font-size: 16px;
  color: #fff;
}

.search-by__title {
  margin: 0 22px 0 0;
  font-weight: 100;
  text-transform: uppercase;
}

.search-by__button {
  padding: 11px 23px;
  text-transform: uppercase;
  color: #fff;
  border: none;
  background-color: #484848;
  cursor: pointer;
}

.search-by__button--first {
  border-radius: 2px 0 0 2px;
}

.search-by__button--second {
  border-radius: 0 2px 2px 0;
}

.search-by__button--active {
  background-color: #f65261;
  cursor: default;
}
</style>
