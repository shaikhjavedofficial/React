const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue <= currentValue;
console.log(array1.reduce(reducer));

console.log(array1.sort((a, b) => a - b));
