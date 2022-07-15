'use strict'
/*
// 1. object to json
// stringify

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['seohyun', 'junkyu']);
console.log(json);

const rabbit = {
    name: 'seony',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!!`);
    }
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`ley: ${key}, value: ${value}`);
    return value;
});
console.log(json);



// 2. json to object
// parse(json)

console.clear();
// console.log(json);
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
*/

let json = JSON.stringify(true);
console.log(json);

const seony = {
    name: 'SeoHyun',
    age: 21,
    date: new Date(),
    jump: () => {
        console.log(`${name} can jump!!`);
    }
};

json = JSON.stringify(seony);
console.log(json);
json = JSON.stringify(seony, ('name', 'age'));
console.log(json);

let obj = JSON.parse(json);
console.log(obj);

