<template>
  <div class="weatherWidget__container">
    <h1>Open Weather</h1>
    <InputBox :userSearchValue="userSearchValue" :userSearchError="userSearchError" :gettingData="gettingData"
              :userLocation="userLocation"
              @handle-UserSearchValue="handleUserSearchValue"/>
  </div>
</template>

<script>
import InputBox from "@/components/weatherWidget/items/InputBox";
import {loadDataCity} from "@/components/weatherWidget/helpers/loadDataCity";
import {loadDataGeolocation} from "@/components/weatherWidget/helpers/loadDataGeolocation";

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
  },
  created() {
    if (('geolocation' in navigator)) {
      navigator.geolocation.getCurrentPosition((position => {
        this.userLocation = position;
        this.gettingData = true;
        loadDataGeolocation.call(this);
      }), (err) => {
        console.log(err.message);
        this.gettingData = false;
      });
    } else {
      console.log('Geolocation is not available');
    }
  },
  methods: {
    handleUserSearchValue(searchValue) {
      this.userSearchValue = searchValue;
      if (!this.gettingData) {
        this.gettingData = true;
        loadDataCity.call(this, searchValue);
      }
    },
  },
}
</script>

<style scoped>

</style>