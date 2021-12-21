<template>
  <div class="card-items">
    <template v-for="film in allFilms" :key="film.id">
      <CardItem :film="film" />
    </template>
  </div>
</template>

<script>
import CardItem from "./CardItem.vue";

export default {
  name: "card-items",
  components: {
    CardItem,
  },
  props: ['allFilms']
};
</script>

<style scoped>
.card-items {
  margin: 45px 40px 0;
}
</style>
