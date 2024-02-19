<template>
  <Cep />
</template>

<script>
import Cep from './main/Cep.vue';

export default {
  name: 'App',
  components: {
    Cep
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
