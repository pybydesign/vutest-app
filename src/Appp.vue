<template>
  <div id="app">
    <NavBar />  <!-- Используем компонент NavBar для навигации -->
    <router-view></router-view> <!-- Здесь отображаются все страницы -->
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
}
</style>
