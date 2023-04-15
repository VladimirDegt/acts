export const rendingSelectOptions = (setNameInObjectInLocalStorage) => {
  const resultArrayRow = [];
  setNameInObjectInLocalStorage.forEach( (element) => {
    resultArrayRow.push(`<option value="${element}">${element}</option>`);
  });

  return resultArrayRow.join('');
};

