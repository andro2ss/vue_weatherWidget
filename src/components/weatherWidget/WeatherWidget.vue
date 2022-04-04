<template>
  <div class="weatherWidget__container">
    <h1 class="weatherWidget__title">Open Weather</h1>
    <InputBox v-if="userNewSearch" :userSearchValue="userSearchValue" :userSearchError="userSearchError"
              :gettingData="gettingData"
              :userLocation="userLocation"
              @handle-UserSearchValue="handleUserSearchValue"/>
    <InfoBox v-if="weatherData && !userSearchError && !userNewSearch" :weatherData="weatherData"/>
    <button v-if="!userNewSearch"
            class="weatherWidget__btn"
            @click="userNewSearch=true">Nowe wyszukanie
    </button>
  </div>
</template>

<script>
import InputBox from "@/components/weatherWidget/items/InputBox";
import {loadDataCity} from "@/components/weatherWidget/helpers/loadDataCity";
import {loadDataGeolocation} from "@/components/weatherWidget/helpers/loadDataGeolocation";
import InfoBox from "@/components/weatherWidget/items/InfoBox";

export default {
  name: "WeatherWidget",
  components: {InfoBox, InputBox},
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
  watch: {
    weatherData() {
      this.userNewSearch = false;
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.weatherWidget__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 650px;
  border: 2px solid black;
  border-radius: 3rem;
  background: whitesmoke;
  padding: 1rem;
}

.weatherWidget__title {
  font-family: 'Pacifico', cursive;
  font-size: 3rem;
  margin: 1rem 0;
  text-align: center;
}

.weatherWidget__btn{
  width: 80%;
  font-size: 1rem;
  background: white;
  padding: 0.5rem;
  border-radius: 2rem;

}
.weatherWidget__btn:hover{
  background: floralwhite;
}
</style>