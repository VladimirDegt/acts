import { db } from "./db";
import { refs } from "./refsElements";
import { arrayDiffByKey } from "./arrayDiffByKey";
import { createHtmlGalleryImgs } from "./createHtmlGalleryImgs";

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
