<template>
<div class="weatherWidget__container">
  <h1>Open Weather</h1>
</div>
</template>

<script>
export default {
  name: "WeatherWidget",
  data() {
    return {
      weatherData: null,
      userLocation: null,
      userSearchValue: '',
      userSearchError: false,
      userNewSearch: true,
      gettingData: false,
    }
  }
}
</script>

<style scoped>

</style>