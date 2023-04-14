import { db } from "./db";
import { refs } from "./refsElements";

const arrayObjectsInLocalStorage = JSON.parse(localStorage.getItem('Dogovora'));
console.log(arrayObjectsInLocalStorage);
const nameInObjectInLocalStorage = [];
const documentInObjectInLocalStorage = [];

arrayObjectsInLocalStorage.forEach( (obj) => {
  nameInObjectInLocalStorage.push(obj.name);
  documentInObjectInLocalStorage.push(obj.document);
});

const setNameInObjectInLocalStorage = new Set(nameInObjectInLocalStorage);
const setDocumentInObjectInLocalStorage = new Set(documentInObjectInLocalStorage);

console.log(refs.selectName)
console.log(refs.selectDocument)

const onItemSelect = (e) => {
  const arraySelect = [];
  arrayObjectsInLocalStorage.forEach(obj => {
    switch(e.target.value){
      case obj.name:
        arraySelect.push(obj);
        break;
      case obj.document:
        arraySelect.push(obj);
        break;
      case obj.year:
        arraySelect.push(obj);
        break;
      case obj.month:
        arraySelect.push(obj);
        break;
      default:
    }
  });

  console.log(arraySelect)
};

refs.select.addEventListener('change', onItemSelect);


