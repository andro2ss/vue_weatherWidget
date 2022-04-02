<template>
  <div class="weatherWidget__container">
    <h1>Open Weather</h1>
    <InputBox :userSearchValue="userSearchValue" :userSearchError="userSearchError" :gettingData="gettingData"
              @handle-UserSearchValue="handleUserSearchValue"/>
  </div>
</template>

<script>
import InputBox from "@/components/weatherWidget/items/InputBox";
import {loadDataCity} from "@/components/weatherWidget/helpers/loadDataCity";

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