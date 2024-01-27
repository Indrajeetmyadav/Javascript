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

const myFunction = function () {
    console.log("Hello world");
}

console.log(typeof myObj);
/*************************************/

// Stack (Primitive), Heap (Non-Primitive)
/* In stack memory when we declare the variable 
and assign the value and declare the another var 
assign first value then we chage second var value in that case 
we changing copy value change but original is safe.
In stack memory we have a Copy.*/
let myPagename = "indrajeetdotcom"// original

let anothername = myPagename // copy
anothername = "coffeeaurcode" // Chage with the copy.

console.log(myPagename);// indrajeetdotcom
console.log(anothername);// coffeeaurcode

/*In heap memory we have a reference.
In this we changining the original value.*/

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne 

userTwo.email = "indrajeet@google.com" // original reference changed.

console.log(userOne.email);
console.log(userTwo.email);