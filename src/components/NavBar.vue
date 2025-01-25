<template>
  <nav>
    <ul>
      <li><router-link to="/">Главная</router-link></li>
      <li><router-link to="/about">О нас</router-link></li>
      <li><router-link to="/contact">Контакты</router-link></li>
      <li><router-link to="/service">Сервис</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
};
</script>

<style scoped>
nav ul {
  list-style-type: none;
  padding: 0;
}

nav li {
  margin: 10px 0;
}

a {
  text-decoration: none;
  color: blue;
}

a:hover {
  text-decoration: underline;
}
</style>
