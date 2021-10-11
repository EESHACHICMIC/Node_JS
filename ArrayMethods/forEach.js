const arr = [10, 36, 25, 36, 45, 10];
const arr1 = [12, 25, 45, 15, 30];

let com = arr.filter(value => arr1.includes(value));
console.log(com);

let sum = arr.reduce(function (acc, curr, arr)
{
    acc = acc + curr;
    return acc;
}, 0)
console.log(sum);

// console.log(arr.indexOf(36,-6));

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// const animals1 = animals.slice(2, 4);
// console.log(animals1);
// animals1[1]="hen";
// console.log(animals);
// console.log(animals1);
// console.log(animals.slice());

let above25 = function (items) {
    return items>=25
}

let op = arr.some(above25);
console.log(op);

console.log(arr.join("*").toString());