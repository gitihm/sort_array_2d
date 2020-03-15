const sortCols = (a, b, attrs) =>
  Object.keys(attrs).reduce(
    (diff, k) => (diff == 0 ? attrs[k](a[k], b[k]) : diff),
    0
  );

const array = [
  [1, 3, 67],
  [1, 4, 45],
  [2, 4, 98],
  [5, 99, 23],
  [2, 4, 98]
];
let count = array[0].length;
console.log(count);

const fuc_in_sort = (a, b) => a - b;

var new_cases = {};
for (let i = 0; i < count; i++) {
  new_cases[`${i}`] = fuc_in_sort;
}

console.log(new_cases);
let a = array.sort((a, b) => sortCols(a, b, new_cases));
console.log(a);

