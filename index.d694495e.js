let e=0;const t=[{id:`${e+=1}`,name:"Укргазбанк",document:"№47",year:2023,month:"квітень"},{id:`${e+=1}`,name:"Полтавабанк",document:"№22",year:2023,month:"травень"}],n={form:document.querySelector("form"),divRow:document.querySelector(".container-row"),input:document.querySelector('[name="number"]'),check:document.querySelector('[name="check"]'),button:document.querySelector(".btn-refresh"),select:document.querySelector(".container-select"),selectName:document.querySelector("#name"),selectDocument:document.querySelector("#document"),selectYear:document.querySelector("#year"),selectMonth:document.querySelector("#month"),weather:document.querySelector(".wrapper_weather")};function o(e,...t){return[].concat(...t.map(((n,o)=>{const a=t.slice(0);a.splice(o,1);const r=[...new Set([].concat(...a))];return n.filter((t=>!r.some((n=>t[e]===n[e]))))})))}const a=e=>e.map((({id:e,name:t,document:n,year:o,month:a})=>`<div class="container-item-row">\n            <label for="${e}">${e}) ${t} ${n} ${o} ${a}</label>\n            <input type="checkbox" \n            id="${e}" \n            name="${t}" \n            data-document="${n}" \n            data-year=${o} \n            data-month="${a}"\n            >\n          </div>`)).join("");(()=>{if(localStorage.getItem("Dogovora")&&0!==JSON.parse(localStorage.getItem("Dogovora")).length){const e=JSON.parse(localStorage.getItem("Dogovora")),r=o("id",t,e);n.divRow.insertAdjacentHTML("afterbegin",a(r))}else n.divRow.insertAdjacentHTML("afterbegin",a(t))})();n.form.addEventListener("input",(e=>{const t=e.target,n={id:t.id,name:t.name,document:t.dataset.document,year:t.dataset.year,month:t.dataset.month};if(t.checked)if(localStorage.getItem("Dogovora")){const e=JSON.parse(localStorage.getItem("Dogovora"));e.some((e=>e.id===t.id))||e.push(n),localStorage.setItem("Dogovora",JSON.stringify(e))}else{const e=[];e.push(n),localStorage.setItem("Dogovora",JSON.stringify(e))}else{const e=JSON.parse(localStorage.getItem("Dogovora")).filter((e=>e.id!==t.id));localStorage.setItem("Dogovora",JSON.stringify(e))}})),n.button.addEventListener("click",(()=>location.reload())),fetch("https://api.openweathermap.org/data/2.5/weather?q=Kharkiv&lang=ru&units=metric&appid=a323d6674456ccaaf9a7dc4a714c315f").then((e=>{if(e.ok)return e.json();throw Error(e.statusText)})).then((function(e){const t=e.name,o=Math.round(e.main.temp),a=Math.round(e.main.feels_like),r=e.weather[0].description,c=e.weather[0].icon,i=`\n    <div class="container_weather">\n      <div class="weather_header">\n        <div class="weather_main">\n          <div class="weather_city">${t}</div>\n          <div class="weather_status">${r}</div>\n        </div>\n        <div class="weather_icon">\n          <img src="http://openweathermap.org/img/w/${c}.png" alt="${r}">\n        </div>\n      </div>\n      <div class="container_temp">\n        <div class="weather_temp">Температура: ${o} &degС</div>\n        <div class="weather_feels_like">Чувствуется на: ${a} &degС</div>\n      </div>\n    </div>\n  `;n.weather.innerHTML=i})).catch(console.log),n.weather.innerHTML='\n<img src="../images/loading.gif" alt="Loading...">\n';
//# sourceMappingURL=index.d694495e.js.map