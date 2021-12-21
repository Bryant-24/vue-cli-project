<template>
  <footer class="footer">
    <Logo />
  </footer>
</template>

<script>
import Logo from "./Logo.vue";

export default {
  name: "home",
  components: {
    Logo,
  },
};
</script>

<style scoped>
.footer {
  padding: 20px 0;
  text-align: center;
  background-color: #555;
}
</style>
