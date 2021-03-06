// 1. Use strict   
// added in ES 5
// use this for Vanila Javascript
'use strict';



// 2. Variable
// let (added in ES 6)
let globalName = 'global name';
{
    let name = 'jun';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
//console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottm to top)
// has no block scope
{
    age = 4;
    var age;
}
console.log(age);



// 3. Constant - 포인터가 잠겨있음, 값을 변경 불가
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;



// 4. Variable types
// primitive, single item: numver, string, boolean, null, symbol
// object, box container
// function, first - class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log('value: ${count}, type: ${typeof count}');
console.log('value: ${size}, type: ${typeof size}');

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0; // infinity
const negetiveInfinity = -1 / 0; // -infinity
const nAn = 'not a number' / 2; // NaN
console.log(infinity);
console.log(negetiveInfinity);
console.log(nAn);

// bigInt (fairy new, don't use it yet) 새로운 타입, 크롬, 파이어폭스에서만 지원
const bigInt = 1234567890123456789012345678901234567890; // over (-2**53 ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan; // 스트링 연산가능
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique indetifiers for objeects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 == gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`);

// object, real-life objeect, data structure
const jun = {name: 'jun', age: 26};
jun.age = 20;

// 5. Dynamic typing: dynamically typed language
// 선언할 때 타입을 정하지 않는다, 런타임에서 타입이 정해진다.
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);