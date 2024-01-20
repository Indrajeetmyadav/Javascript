// console.log(1 > 2);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); /*false*/
console.log(null == 0); /*false*/
console.log(null >= 0); /*true*/
/* The reason is than an equality check == and
comparisons > < >= <= work differently.
Comparisons convert null to a number,
treating it as 0. That's why
(3) null >= 0 is true and
(1) null > 0 is false. */

// === Strict check

console.log("2" === 2);