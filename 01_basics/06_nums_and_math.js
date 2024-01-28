/************************* Num *************************/
const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
/* toFixed() use for getting precigion value.*/
// console.log(balance.toFixed(1));
/* Roundoff the value which you want.eg.(4) digit.*/
const otherNumber = 123.4532
// console.log(otherNumber.toPrecision(4)); 

const value = 1000000 // This value convert in Indian value.
// console.log(value.toLocaleString('en-IN'));

/************************* Maths *************************/

// console.log(Math);
/*abs use for negative value convert in to positive.*/
// console.log(Math.abs(-4));
/* Roundoff value.*/
// console.log(Math.round(4.7));
/* Roundoff Upper value.*/
// console.log(Math.ceil(4.7));
/* Roundoff lower value.*/
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 2, 5, 7, 9, 1));
// console.log(Math.max(4, 8, 5, 7, 2, 1));

// console.log(Math.random());
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

/* Math.random is use for random values.
it is use for min 10 to max 20 random floor values.  */
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
