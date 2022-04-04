<template>
  <div class="inputBox__container">
    <h2 class="inputBox__title">Podaj lokalizację</h2>
    <div class="inputBox__boxes">
      <div class="inputBox__box" v-if="!gettingData">
        <input type="text" v-bind:class="(!userSearchError)?'box__input':'box__input input__error'"
               v-model="inputValue" placeholder="Podaj lokalizację"
               v-on:keyup.enter="handleUserSearchValue(inputValue)"/>
        <span v-if="userSearchError" class="error__message">Nie znaleziono</span>
      </div>
      <div class="inputBox__box--searching" v-if="gettingData">
        <h3>Szukam</h3>
        <h4 v-if="inputValue === ''">Szer.: {{ userLocation.coords.latitude }} <br/>Dł.:
          {{ userLocation.coords.longitude }}</h4>
        <h4 v-else>{{ userSearchValue.toUpperCase() }}</h4>
      </div>
      <button class="box__btn" @click="handleUserSearchValue(inputValue)" v-if="!gettingData">Wyszukaj</button>
      <SpinnerLoader v-if="gettingData"/>
    </div>
  </div>
</template>

<script>
import SpinnerLoader from "@/components/weatherWidget/common/spinnerLoader/SpinnerLoader";

export default {
  name: "InputBox",
  components: {SpinnerLoader},
  data() {
    return {
      inputValue: '',
    };
  },
  props: ['userSearchValue', 'userSearchError', 'gettingData', 'userLocation'],
  methods: {
    handleUserSearchValue(searchValue) {
      if (searchValue !== '') {
        this.$emit('handle-UserSearchValue', searchValue);
      }
    },
  },
};
</script>

<style scoped>
.inputBox__container {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: black solid 1px;
  row-gap: 1rem;
  border-radius: 3rem;
  background: floralwhite;
  margin-bottom: 3rem;
  box-sizing: border-box;
  max-width: 400px;
  width: 100%;
}

.inputBox__title {
  margin: 0;
}

.inputBox__boxes {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 1rem;
}

.box__input {
  width: 100%;
  height: 100%;
  border: none;
  border-bottom: black solid 1px;
  font-size: 1.2rem;
  max-width: 300px;
  background: inherit;
}

.input__error {
  border-bottom: red 2px solid;
}

.error__message {
  display: block;
  color: red;
  font-size: 1rem;
  font-weight: 700;
}

.box__btn {
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 2rem;
  width: 120px;
  background: white;
}

.box__btn:hover {
  background: whitesmoke;
}

.inputBox__box--searching {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 60%;
  overflow-wrap: break-word;
}

.inputBox__box--searching h3 {
  font-size: 1.5rem;
  margin: 0;
}

.inputBox__box--searching h4 {
  font-size: 1.2rem;
  margin: 0;
  margin-top: 0.5rem;
}


@media (max-width: 350px) {
  .inputBox__container {
    padding: 1rem;
  }

  .inputBox__boxes {
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 1rem;
  }

  .box__btn {
    width: 80%;
  }
}
</style>