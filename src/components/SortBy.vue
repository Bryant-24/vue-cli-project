<template>
  <div class="sort-by">
    <span class="sort-by__title">Sort by</span>
    <button
      class="sort-by__button sort-by__button--first"
      :class="[ isSortByRelease ? 'sort-by__button--active' : '' ]"
      @click="toggleSorthBy('year')"
      :disabled="isSortByRelease"
    >
      Released date
    </button>
    <button
      class="sort-by__button sort-by__button--second"
      :class="[ !isSortByRelease ? 'sort-by__button--active' : '' ]"
      @click="toggleSorthBy('rating')"
      :disabled="!isSortByRelease"
    >
      Rating
    </button>
  </div>
</template>

<script>
export default {
  name: "sort-by",
  data() {
    return {
      isSortByRelease: true
    }
  },
  methods: {
    toggleSorthBy(field) {
      this.isSortByRelease = !this.isSortByRelease;
      this.$emit('sortBy', field);
    }
  }
};
</script>

<style scoped>
.sort-by {
  padding: 20px 130px;
  font-size: 16px;
  text-align: right;
  color: #fff;
  background-color: #555;
}

.sort-by__title {
  margin: 0 22px 0 0;
  font-weight: 100;
  text-transform: uppercase;
}

.sort-by__button {
  padding: 11px 23px;
  text-transform: uppercase;
  color: #fff;
  border: none;
  background-color: #484848;
  cursor: pointer;
}

.sort-by__button--first {
  border-radius: 2px 0 0 2px;
}

.sort-by__button--second {
  border-radius: 0 2px 2px 0;
}

.sort-by__button--active {
  background-color: #f65261;
  cursor: default;
}
</style>
