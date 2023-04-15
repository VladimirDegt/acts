export const filterObjectsInLocalStorage = (value) => {
  const arrayObjectsLocalStorage = localStorage.getItem('Dogovora');
  const filterArrayLocalStorage = JSON.parse(arrayObjectsLocalStorage).filter( ({name, document, year, month}) => 
  name === value || document === value || year === value || month === value
  );

  return filterArrayLocalStorage;
}