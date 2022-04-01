<template>
  <div class="inputBox__container">
    <h2 class="inputBox__title">Podaj lokalizację</h2>
    <div class="inputBox_boxes">
      <div class="box__input">
        <input type="text" v-bind:class="(!userSearchError)?'box__input':'box__input input__error'"
               v-model="inputValue" placeholder="Podaj lokalizację"
               v-on:keyup.enter="handleUserSearchValue(inputValue)"/>
        <span v-if="userSearchError" class="error__message">Nie znaleziono</span>
      </div>
      <button class="box__btn" @click="handleUserSearchValue(inputValue)">Wyszukaj</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputBox",
  data() {
    return {
      inputValue: '',
    };
  },
  props: ['userSearchValue', 'userSearchError', 'gettingData'],
  methods: {
    handleUserSearchValue(searchValue) {
      this.$emit('handle-UserSearchValue', searchValue);
    },
  },
};
</script>

<style scoped>

</style>