import axios from "axios";
import {apiIdKey} from "@/components/weatherWidget/helpers/idKey";

export function loadDataGeolocation() {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.userLocation.coords.latitude}&lon=${this.userLocation.coords.longitude}&lang=pl&appid=${apiIdKey}&units=metric`).then(response => {
        this.weatherData = response.data;
        this.gettingData = false;
    }).catch(error => {
        console.log(error);
        this.gettingData = false;
    });
}