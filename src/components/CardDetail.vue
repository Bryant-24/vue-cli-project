<template>
  <div class="card-detail">
    <div class="card-detail__logo"><Logo /></div>
    <router-link class="card-detail__search-link" to="/">
      <img
        class="card-detail__search-icon"
        src="./../assets/icons/search-icon.svg"
        alt="Search"
      />
    </router-link>
    <div class="card-detail__wrapper">
      <img
        class="card-detail__pic"
        :src="require(`./../assets/img/${film.poster}.jpg`)"
        alt="Duna"
      />
      <div class="card-detail__info">
        <h1 class="card-detail__title">
          {{ film.title }}
          <span class="card-detail__rating card-detail__rating--green">{{
            film.rating
          }}</span>
        </h1>
        <div class="card-detail__sub-title">
          <template v-for="genre in film.genre"> {{ genre }}&nbsp; </template>
        </div>
        <div class="card-detail__year-duration">
          {{ film.year }}
          <span class="card-detail__year-duration-desc">year</span>
          {{ film.duration }}
          <span class="card-detail__year-duration-desc">min</span>
        </div>
        <p class="card-detail__desc">
          {{ film.desc }}
        </p>
      </div>
    </div>
    <div class="card-detail__same-genre">
      Films by
      <template v-for="genre in film.genre">{{ genre }}&nbsp;</template>
      genre
    </div>
  </div>
</template>

<script>
import Logo from "../components/Logo.vue";

export default {
  name: "card-detail",
  components: {
    Logo,
  },
  props: ["films", "film"],
};
</script>

<style scoped>
.card-detail {
  position: relative;
  min-height: 400px;
  padding: 102px 0 0;
  background-image: url(./../assets/img/posters.png);
  color: #fff;
  background-size: cover;
}

.card-detail__logo {
  position: absolute;
  top: 17px;
  left: 59px;
}

.card-detail__search-link {
  position: absolute;
  top: 20px;
  right: 30px;
  width: 30px;
}

.card-detail__search-icon {
  display: inline-block;
  width: 100%;
  filter: invert(63%) sepia(48%) saturate(7475%) hue-rotate(325deg) brightness(99%) contrast(95%);
}

.card-detail__wrapper {
  display: flex;
  padding: 0 65px 50px;
}

.card-detail__pic {
  width: 300px;
  margin: 0 50px 0 0;
}

.card-detail__title {
  margin: 25px 0 37px;
  font-size: 40px;
  font-weight: 100;
  text-transform: uppercase;
  color: #fff;
}

.card-detail__rating {
  display: inline-block;
  width: 35px;
  margin: 0 0 0 25px;
  padding: 15px;
  font-size: 30px;
  text-align: center;
  letter-spacing: -1px;
  border: 1px solid #fff;
  border-radius: 50%;
}

.card-detail__rating {
  color: #a1e66f;
}

.card-detail__sub-title {
  margin: 0 0 30px;
  font-size: 18px;
}

.card-detail__year-duration {
  font-size: 26px;
  color: #f65261;
}

.card-detail__year-duration-desc {
  margin: 0 25px 0 0;
  font-size: 14px;
  color: #fff;
}

.card-detail__desc {
  font-size: 20px;
}

.card-detail__same-genre {
  padding: 25px 120px;
  font-weight: 700;
  background-color: #555;
}
</style>
