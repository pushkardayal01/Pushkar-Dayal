let a = [1, 2, 3, 4, 5];

function isEven(x) {
  return x % 2 == 0;
}

let filteredArr = a.filter(isEven);
let mapfilter=a.map(isEven);

console.log(a);
console.log(filteredArr);
console.log(mapfilter);