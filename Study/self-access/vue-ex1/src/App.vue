<template>
  <base-container title="Vuex"></base-container>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/request">Request</router-link> |
    <router-link to="/databinding">Data Binding</router-link> |
    <router-link to="/databindinghtml">Data Binding Html</router-link> |
    <router-link to="/methodex1">Method Ex1</router-link> |
    <router-link to="/hw1">Hw 1</router-link> |
  </nav>
  <router-view />
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
export default {
  components: {
    BaseContainer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
