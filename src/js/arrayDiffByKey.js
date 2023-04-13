// Difference between Arrays of Objects
export function arrayDiffByKey(key, ...arrays) {
  return [].concat(...arrays.map( (arr, i) => {
      const others = arrays.slice(0);
      others.splice(i, 1);
      const unique = [...new Set([].concat(...others))];
      return arr.filter( x =>
          !unique.some(y => x[key] === y[key])
      );
  }));
};

