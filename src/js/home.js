import { db } from "./db";
import { refs } from "./refsElements";
import { arrayDiffByKey } from "./arrayDiffByKey";
import { createHtmlGalleryImgs } from "./createHtmlGalleryImgs";
import { fetchWeather } from "./fetch-weather";

const onButtonClick = () => location.reload();

const insertFromLocalStorageHtmlObject = () =>{
  if(!localStorage.getItem("Dogovora") || JSON.parse(localStorage.getItem("Dogovora")).length === 0) {
    refs.divRow.insertAdjacentHTML("afterbegin", createHtmlGalleryImgs(db));
  } else {
    const arrayFromLocalStorage = JSON.parse(localStorage.getItem("Dogovora"));
    const different = arrayDiffByKey('id', db, arrayFromLocalStorage);  
    refs.divRow.insertAdjacentHTML("afterbegin", createHtmlGalleryImgs(different));
  }
};
insertFromLocalStorageHtmlObject();

const onFormInput = (e) => {
  const target = e.target;
  const obj = {
    id: target.id,
    name: target.name,
    document: target.dataset.document,
    year: target.dataset.year,
    month: target.dataset.month,
  };

  if(target.checked){
    if(localStorage.getItem("Dogovora")) {
      const arr = JSON.parse(localStorage.getItem("Dogovora"));
      const findID = arr.some( (obj) => obj.id === target.id);  
      if(!findID) {
        arr.push(obj);
      }
      localStorage.setItem("Dogovora", JSON.stringify(arr));
    } else {
      const arrayObjDogovors = [];
      arrayObjDogovors.push(obj);
      localStorage.setItem("Dogovora", JSON.stringify(arrayObjDogovors));
    }
  } else {
    const arr = JSON.parse(localStorage.getItem("Dogovora"));
    const newArr = arr.filter((obj) => obj.id !== target.id);
    localStorage.setItem("Dogovora", JSON.stringify(newArr));
  }

};

refs.form.addEventListener('input', onFormInput);
refs.button.addEventListener('click', onButtonClick);

fetchWeather().then(getWeather).catch(console.log);

refs.weather.innerHTML = `
<img src="../images/loading.gif" alt="Loading...">
`;

function getWeather(dataWeather) {

  const city = dataWeather.name;
  const temp = Math.round(dataWeather.main.temp);
  const feelsLike = Math.round(dataWeather.main.feels_like);
  const weatherStatus = dataWeather.weather[0].description;
  const weatherIcon = dataWeather.weather[0].icon;

  const template = `
    <div class="container_weather">
      <div class="weather_header">
        <div class="weather_main">
          <div class="weather_city">${city}</div>
          <div class="weather_status">${weatherStatus}</div>
        </div>
        <div class="weather_icon">
          <img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherStatus}">
        </div>
      </div>
      <div class="container_temp">
        <div class="weather_temp">Температура: ${temp} &degС</div>
        <div class="weather_feels_like">Чувствуется на: ${feelsLike} &degС</div>
      </div>
    </div>
  `;

  refs.weather.innerHTML = template;
}


