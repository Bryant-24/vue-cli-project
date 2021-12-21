<template>
  <div class="card-item">
    <router-link class="card-item__link" :to="`/film/${film.id}`">
      <img
        class="card-item__pic"
        :src="require(`./../assets/img/${film.poster}.jpg`)"
        alt=""
      />
    </router-link>
    <div class="card-item__info">
      <div class="card-item__left">
        <div class="card-item__title">{{ film.title }}</div>
        <div class="card-item__gengre">
          <template v-for="genre in film.genre">{{ genre }}&nbsp;</template>
        </div>
      </div>
      <div class="card-item__right">
        <div class="card-item__year">{{ film.year }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-item",
  props: ["film"],
};
</script>

<style scoped>
.card-item {
  display: inline-block;
  width: 322px;
  margin: 0 75px 60px 0;
  text-align: initial;
  color: #a8a8a8;
}

.card-item:nth-child(3n) {
  margin: 0 0 24px;
}

.card-item__link {
  display: block;
  width: 100%;
  height: 455px;
}

.card-item__pic {
  width: 100%;
  height: 100%;
}

.card-item__info {
  display: flex;
  justify-content: space-between;
}

.card-item__title {
  margin: 20px 0 8px;
  font-size: 20px;
  font-weight: 700;
}

.card-item__gengre {
  color: #8f8f8f;
}

.card-item__year {
  border: 1px solid #8f8f8f;
  padding: 3px 15px;
  margin: 20px 0 0 0;
  border-radius: 2px;
}
</style>
