const e={form:document.querySelector("form"),divRow:document.querySelector(".container-row"),input:document.querySelector('[name="number"]'),check:document.querySelector('[name="check"]'),button:document.querySelector(".btn-refresh"),select:document.querySelector(".container-select"),selectName:document.querySelector("#name"),selectDocument:document.querySelector("#document"),selectYear:document.querySelector("#year"),selectMonth:document.querySelector("#month")},t=e=>{const t=[];return e.forEach((e=>{t.push(`<option value="${e}">${e}</option>`)})),t.join("")},n=e=>{const t=localStorage.getItem("Dogovora");return JSON.parse(t).filter((({name:t,document:n,year:o,month:r})=>t===e||n===e||o===e||r===e))},o=(e,t)=>{e!==t&&(e.value="clear")},r=JSON.parse(localStorage.getItem("Dogovora")),c=[],a=[];r.forEach((e=>{c.push(e.name),a.push(e.document)}));const u=new Set(c),l=new Set(a);e.selectName.insertAdjacentHTML("beforeend",t(u)),e.selectDocument.insertAdjacentHTML("beforeend",t(l));e.select.addEventListener("change",(t=>{0!==n(t.target.value).length?(o(e.selectName,t.target),o(e.selectDocument,t.target),o(e.selectYear,t.target),o(e.selectMonth,t.target),e.divRow.innerHTML=n(t.target.value).map((({id:e,name:t,document:n,year:o,month:r})=>`<div class="container-item-row">\n            <label for="${e}">${e}) ${t} ${n} ${o} ${r}</label>\n            <input type="checkbox" \n            id="${e}" \n            name="${t}" \n            data-document="${n}" \n            data-year=${o} \n            data-month="${r}"\n            >\n          </div>`)).join("")):e.divRow.innerHTML="Документов не найдено"}));
//# sourceMappingURL=filter.2682c4d5.js.map
