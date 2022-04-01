<template>
<div class="weatherWidget__container">
  <h1>Open Weather</h1>
  <InputBox />
</div>
</template>

<script>
import InputBox from "@/components/weatherWidget/items/InputBox";
export default {
  name: "WeatherWidget",
  components: {InputBox},
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