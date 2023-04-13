import { db } from "./db";
import { arrayDiffByKey } from "./arrayDiffByKey";
import { createHtmlGalleryImgs } from "./createHtmlGalleryImgs";

const refs = {
  form: document.querySelector('form'),
  divRow: document.querySelector('.container-row'),
  input: document.querySelector('[name="number"]'),
  check: document.querySelector('[name="check"]'),
  button: document.querySelector('button'),
};

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

  if(target.checked){
    if(localStorage.getItem("Dogovora")) {
      const arr = JSON.parse(localStorage.getItem("Dogovora"));
      const obj = {
        id: target.id,
        name: target.name,
        document: target.dataset.document,
        year: target.dataset.year,
        month: target.dataset.month,
      };
      const findID = arr.some( (obj) => obj.id === target.id);  
      if(!findID) {
        arr.push(obj);
      }
      localStorage.setItem("Dogovora", JSON.stringify(arr));
    } else {
      const arrayObjDogovors = [];
      const obj = {
        id: target.id,
        name: target.name,
        document: target.dataset.document,
        year: target.dataset.year,
        month: target.dataset.month,
      };
      arrayObjDogovors.push(obj);
      localStorage.setItem("Dogovora", JSON.stringify(arrayObjDogovors));
    }
  } else {
    const arr = JSON.parse(localStorage.getItem("Dogovora"));
    const newArr = arr.filter((obj) => obj.id !== target.id);
    localStorage.setItem("Dogovora", JSON.stringify(newArr));
  }

};

const onButtonClick = () => location.reload();

refs.form.addEventListener('input', onFormInput);
refs.button.addEventListener('click', onButtonClick);
