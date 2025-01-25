<template>
  <div>
    <h1>Главная страница</h1>
    <p>Добро пожаловать на наш сайт!</p>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
h1 {
  color: blue;
}

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
