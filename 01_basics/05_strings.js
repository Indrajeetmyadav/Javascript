// String declaration.
const name = "indrajeet"
const gameName = new String('indrajeety') // Its a key value pair storing.
const repoCount = 25

console.log(name + repoCount + " Value");

// String interpolation. Useing this make placeholders and inject direclty variables.
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

console.log(gameName[0]); // Accessing key values.
console.log(gameName[5]); // Accessing key values.
console.log(gameName.__proto__);// Getting object {}
console.log(gameName.length);

// Original value not changing beacause this is store in Stack memory. 
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));// In the () pass the indexnum.
console.log(gameName.indexOf('a'));// In the () pass the caracter.

// Using this concat another string.
console.log(gameName.concat('adav'));

const newString = gameName.substring(0, 4)
console.log(newString);

// Using slice we pass the negative number also and print reverse string.
const otherName = gameName.slice(-9, 4)
console.log(otherName);

// Use for remove spaces.
const newStringOne = "    indrajeet    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://indrajeet.com/indrajeet%20yadav"
console.log(url);
// replacing the value.
console.log(url.replace('%20', '-'));

// includes use for checking the values includes or not.
console.log(url.includes('indrajeet'));
console.log(url.includes('www'));
