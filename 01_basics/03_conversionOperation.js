let score = "Indra"

//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// "33" convert in => 33
// "33abc" notconver => NaN (not a num)
// true convert in => 1
// "Indra" notconvert => NaN

let isLoggedIn = "indrajeet"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 => true; 0=> false
// "" => false
// "indrajeet" => true

let someNumber = 10
let stringNumber = String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);

//****************** Operations **********************

let value = 3
let negValue = -value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Indrajeet"
let str3 = str1 + str2
//console.log(str3);

// If string is first then the conversion is string.
console.log("1" + 2);
console.log(1 + "2");
// If number is first then the conversion is num.
console.log(1 + 2 + "2");

let gameCounter = 100
/* this is postfix, If used postfix, 
with operator after operand (for example, x++), 
the increment operator increments and returns 
the value before incrementing. */
gameCounter++ 
/* this is prefix, If used prefix, 
with operator before operand (for example, ++x), 
the increment operator increments and returns 
the value after incrementing. */
++gameCounter 
console.log(gameCounter);

// link to Study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-abstract-operations