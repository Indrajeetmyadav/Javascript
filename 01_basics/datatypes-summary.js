// # Primitive : 7
/*String, Number, Boolean, 
null, undefined, Symbol, BigInt*/

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 12345678910111213141n

//Reference (non-primitive)
/* Array, Objects, Functions*/

const heros = ["shaktiman", "doga", "naagraj"];
let myObj = {
    name: "indrajeet",
    age: 28,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myObj);