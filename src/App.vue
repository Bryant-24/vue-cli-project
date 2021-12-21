<template>
  <div class="content">
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');

body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  background: #232323;
}

h2 {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

.content {
  width: 1200px;
  margin: 0 auto;
}
</style>
