<template>
<WeatherWidget/>
</template>

<script>

import WeatherWidget from "@/components/weatherWidget/WeatherWidget";
export default {
  name: 'App',
  components: {
    WeatherWidget

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
