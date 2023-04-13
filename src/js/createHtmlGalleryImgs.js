export const createHtmlGalleryImgs = (array) => {
  return array.map( ({id, name, document, year, month}) => {
    return `<div class="container-item-row">
            <label for="${id}">${id}) ${name} ${document} ${year} ${month}</label>
            <input type="checkbox" 
            id="${id}" 
            name="${name}" 
            data-document="${document}" 
            data-year=${year} 
            data-month="${month}"
            >
          </div>`
  }).join('');
};