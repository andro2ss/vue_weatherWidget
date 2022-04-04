import {apiIdKey} from "@/components/weatherWidget/helpers/idKey";
import axios from "axios";

export function loadDataCity(searchValue) {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&lang=pl&appid=${apiIdKey}&units=metric`).then((response) => {
        this.weatherData = response.data;
        this.userSearchError = false;
        this.gettingData = false;
        this.userSearchValue = '';
        this.newSearch = false;
        this.gettingData = false;
    }).catch((error) => {
        this.userSearchError = true;
        this.userSearchValue = '';
        this.gettingData = false;
        console.log(error);
    });
}

