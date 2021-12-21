<template>
  <router-link class="logo" to="/" title="Netflix Roulette - Home page">
    <span class="logo--bold">Netflix</span>Roulette
  </router-link>
</template>

<script>
export default {
  name: "logo",
};
</script>

<style scoped>
.logo {
  font-size: 24px;
  text-transform: lowercase;
  text-decoration: none;
  color: #f65261;
}

.logo--bold {
  font-weight: 700;
}
</style>
