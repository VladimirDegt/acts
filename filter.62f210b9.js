const e={form:document.querySelector("form"),divRow:document.querySelector(".container-row"),input:document.querySelector('[name="number"]'),check:document.querySelector('[name="check"]'),button:document.querySelector(".btn-refresh"),select:document.querySelector(".container-select"),selectName:document.querySelector("#name"),selectDocument:document.querySelector("#document"),selectYear:document.querySelector("#year"),selectMonth:document.querySelector("#month"),weather:document.querySelector(".wrapper_weather")},t=e=>{const t=[];return e.forEach((e=>{t.push(`<option value="${e}">${e}</option>`)})),t.join("")},n=e=>{const t=localStorage.getItem("Dogovora");return JSON.parse(t).filter((({name:t,document:n,year:r,month:o})=>t===e||n===e||r===e||o===e))},r=(e,t)=>{e!==t&&(e.value="clear")},o=JSON.parse(localStorage.getItem("Dogovora")),c=[],a=[];o.forEach((e=>{c.push(e.name),a.push(e.document)}));const u=new Set(c),l=new Set(a);e.selectName.insertAdjacentHTML("beforeend",t(u)),e.selectDocument.insertAdjacentHTML("beforeend",t(l));e.select.addEventListener("change",(t=>{if(0===n(t.target.value).length)return e.divRow.innerHTML="Документы не найдены",r(e.selectName,t.target),r(e.selectDocument,t.target),r(e.selectYear,t.target),void r(e.selectMonth,t.target);r(e.selectName,t.target),r(e.selectDocument,t.target),r(e.selectYear,t.target),r(e.selectMonth,t.target),e.divRow.innerHTML=n(t.target.value).map((({id:e,name:t,document:n,year:r,month:o})=>`<div class="container-item-row">\n            <label for="${e}">${e}) ${t} ${n} ${r} ${o}</label>\n            <input type="checkbox" \n            id="${e}" \n            name="${t}" \n            data-document="${n}" \n            data-year=${r} \n            data-month="${o}"\n            >\n          </div>`)).join("")}));
//# sourceMappingURL=filter.62f210b9.js.map
