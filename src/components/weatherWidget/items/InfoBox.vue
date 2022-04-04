<template>
  <div class="infoBox__container">
    <div>
      <h2 class="infoBox__title">{{ weatherData.name }}</h2>
      <span
          class="infoBox__description">Dzisiaj {{
          weatherData.weather[0].description
        }} <br/>Słońce wzejdzie o {{
          convertTime(weatherData.sys.sunrise)
        }}, a zajdzie o {{ convertTime(weatherData.sys.sunset) }}.</span>
    </div>
    <div class="infoBox__boxes">
      <div class="infoBox__box">
        <h3>Temperatura</h3>
        <span class="box__item">Obecnie: {{ weatherData.main.temp }}°C</span>
        <span class="box__item">Odczuwalna: {{ weatherData.main.feels_like }}°C</span>
        <span class="box__item">Maksymalna: {{ weatherData.main.temp_max }}°C</span>
        <span class="box__item">Minimalna: {{ weatherData.main.temp_min }}°C</span>
      </div>
      <div class="infoBox__box">
        <h3>Wiatr</h3>
        <span class="box__item">Prędkość: {{ weatherData.wind.speed }} m/s</span>
        <span class="box__item">Kierunek: {{ windDirection(weatherData.wind.deg) }}</span>
      </div>
      <div class="infoBox__box">
        <h3>Ciśnienie</h3>
        <span class="box__item">{{ weatherData.main.pressure }} hPa</span>
      </div>
      <div class="infoBox__box">
        <h3>Wilgotność</h3>
        <span class="box__item">{{ weatherData.main.humidity }} %</span>
      </div>
      <div class="infoBox__box">
        <h3>Widoczność</h3>
        <span class="box__item">{{ stateVisibility(weatherData.visibility) }}</span>
      </div>
      <div class="infoBox__box">
        <h3>Zachmurzenie</h3>
        <span class="box__item">{{ weatherData.clouds.all }} %</span>
      </div>
    </div>
    <span class="infoBox__note">Wygenerowano: {{ currentTime() }}</span>
  </div>
</template>

<script>
export default {
  name: "InfoBox",
  props: ['weatherData'],
  methods: {
    convertTime(timeToConvert) {
      const timeZone = this.weatherData.timezone / 60 / 60;
      const tempDate = new Date(timeToConvert * 1000);
      const localTimeZone = tempDate.getTimezoneOffset() / 60;
      let tempHours = tempDate.getHours() + localTimeZone + timeZone;
      if (tempHours >= 24) {
        tempHours -= 24;
      } else if (tempHours <= 0) {
        tempHours += 24;
      }
      return `${tempHours}:${tempDate.getMinutes()}:${tempDate.getSeconds()}`;
    },
    windDirection(deg) {
      let directionWind = '';
      if (deg >= 280 && deg < 350) {
        directionWind = 'północno zachodni';
      } else if (deg >= 260 && deg < 280) {
        directionWind = 'zachodni';
      } else if (deg >= 190 && deg < 260) {
        directionWind = 'południowo zachodni';
      } else if (deg >= 170 && deg < 190) {
        directionWind = 'południowy';
      } else if (deg >= 100 && deg < 170) {
        directionWind = 'południowo wschodni';
      } else if (deg >= 80 && deg < 100) {
        directionWind = 'wschodni';
      } else if (deg >= 10 && deg < 80) {
        directionWind = 'północno wschodni';
      } else {
        directionWind = 'północny';
      }
      return directionWind;
    },
    stateVisibility(vis) {
      let visScore = '';
      if (vis > 8000) {
        visScore = 'bardzo dobra';
      } else if (vis > 6000) {
        visScore = 'dobra';
      } else if (vis > 4000) {
        visScore = 'średnia';
      } else if (vis > 2000) {
        visScore = 'zła';
      } else {
        visScore = 'bardzo zła';
      }
      return visScore;
    },
    currentTime() {
      const today = new Date();
      return `${today.toLocaleDateString()} ${today.toLocaleTimeString()}`;
    },
  },
}
</script>

<style scoped>
.infoBox__container {
  margin: 1rem 0;
  border: 1px solid black;
  border-radius: 3rem;
  padding: 1rem 0.5rem;
  background: floralwhite;
  display: flex;
  flex-direction: column;
  max-width: 650px;
  box-sizing: border-box;
  animation-name: zoom;
  animation-duration: 0.6s;
}

.infoBox__title {
  display: inline-block;
  margin: 0;
  margin-right: 1rem;
}

.infoBox__description {
  letter-spacing: 1px;
  color: #525151;
}

.infoBox__boxes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0.5rem 0;
  background: whitesmoke;
  border: 1px solid white;
  border-radius: 1rem;
  box-sizing: border-box;

}

.infoBox__box {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  width: 200px;
  box-sizing: border-box;
  text-align: center;
  font-size: 0.9rem;
}

.box__item {
  margin: 0.1rem 0.3rem;
}

h3 {
  margin: 0;
}

.infoBox__note {
  align-self: end;
  font-size: 0.7rem;
  margin-right: 3%;
}

@keyframes zoom {
  from {
    transform: scale(0.1)
  }
  to {
    transform: scale(1)
  }
}
</style>