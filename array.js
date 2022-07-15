'use strict';
// Array
// declaration
// push, pop, unshift, shift, 
const arr1 = new Array();
const arr2 = ['jun', 'seohyun'];

console.log(arr2);
console.log(arr2[1]);

/*

arr2.push('🐰','🤍');
console.log(arr2);

arr2.pop();
console.log(arr2);

arr2.unshift('cs');
console.log(arr2);

arr2.shift();
console.log(arr2);

arr2.splice(1, 1);
console.log(arr2);

*/
const arr3 = ['aa','bb'];
const new_arr = arr2.concat(arr3);
console.log(new_arr);

for(let i = 0; i<arr2.length; i++) {
    console.log(arr2[i]);
}

console.log('#############################');

for(let value of arr2) {
    console.log(value);
}

console.log('#############################');

arr2.forEach(function (arr2, index) {
    console.log(arr2, index);
}) 
    
console.log('#############################');

arr2.forEach((arr) => console.log(arr));

console.clear();

console.log(arr2.indexOf('jun'));
console.log(arr2.indexOf('seohyun'));

console.clear();
console.log(arr2);

console.log(arr2.includes('jun'));