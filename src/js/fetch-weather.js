const API_WEATHER_KEY = 'a323d6674456ccaaf9a7dc4a714c315f';
import { refs } from "./refsElements";

export function fetchWeather () {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kharkiv&lang=ru&units=metric&appid=${API_WEATHER_KEY}`).then((response)=> {
    if(response.ok) {
      return response.json()
    } else {
      throw Error(response.statusText)
    }
    })
}