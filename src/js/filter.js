import { refs } from "./refsElements";
import { rendingSelectOptions } from "./rendingSelectOptions";
import { createHtmlGalleryImgs } from "./createHtmlGalleryImgs";
import { filterObjectsInLocalStorage } from "./filterObjectsInLocalStorage";
import { setDefault } from "./setDefault";

const arrayObjectsInLocalStorage = JSON.parse(localStorage.getItem('Dogovora'));
const nameInObjectInLocalStorage = [];
const documentInObjectInLocalStorage = [];

arrayObjectsInLocalStorage.forEach( (obj) => {
  nameInObjectInLocalStorage.push(obj.name);
  documentInObjectInLocalStorage.push(obj.document);
});

const setNameInObjectInLocalStorage = new Set(nameInObjectInLocalStorage);
const setDocumentInObjectInLocalStorage = new Set(documentInObjectInLocalStorage);

refs.selectName.insertAdjacentHTML('beforeend', rendingSelectOptions(setNameInObjectInLocalStorage));
refs.selectDocument.insertAdjacentHTML('beforeend', rendingSelectOptions(setDocumentInObjectInLocalStorage));

const onItemSelect = (e) => {
  if(filterObjectsInLocalStorage(e.target.value).length === 0){
    refs.divRow.innerHTML = `Документы не найдены`;

    setDefault(refs.selectName, e.target);
    setDefault(refs.selectDocument, e.target);
    setDefault(refs.selectYear, e.target);
    setDefault(refs.selectMonth, e.target);
    return;
  };

  setDefault(refs.selectName, e.target);
  setDefault(refs.selectDocument, e.target);
  setDefault(refs.selectYear, e.target);
  setDefault(refs.selectMonth, e.target);

  refs.divRow.innerHTML = createHtmlGalleryImgs(filterObjectsInLocalStorage(e.target.value));
};

refs.select.addEventListener('change', onItemSelect);
