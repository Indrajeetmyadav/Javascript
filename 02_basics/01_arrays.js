/* Arrays */

const myArray = [0, 1, 2, 3, 4, 5]
const myHeros = ["thor", "spiderman", "captainAmerica"]
const myArray2 = new Array(1, 2, 3, 4)
// console.log(myArray[1]);

/* Array Methods*/

// myArray.push(6) // Use to Add value in Array.
// myArray.push(7) // Use to Add value in Array.
// myArray.pop() // Use to remove lastest element remove.

// myArray.unshift(7) // Use to add element in start.
// myArray.shift() // Use to remove first element.

/* include() use for check value include or not.*/
// console.log(myArray.includes(7));
// console.log(myArray.includes(1));
// console.log(myArray.indexOf(1));

/* It is use for cnvert values in String. */
const newArray = myArray.join()
// console.log(myArray); // type of object.
// console.log(newArray); // type of String.

/* slice, splice */

console.log("A ", myArray);
const myn1 = myArray.slice(1, 3)

console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1, 3)
console.log("C ", myArray);// Original Array manipulation.
console.log(myn2);


