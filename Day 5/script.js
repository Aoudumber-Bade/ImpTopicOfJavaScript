


// Day 5 

// Sort and Compare method use in an Array 

// const numbers  = [2,4,5,1,6,3,7,8,9];
// console.log(numbers);

// Now the question how can i sort this number in ascending order.
// For that i can use sort() method. 

// so let's try 

// const sortedNumbers = numbers.sort();

// console.log("After Sorting\n"+sortedNumbers);

// in this situation the sort method worked perfectly. but sometimes this method not sort the intergers values properly.
// - This methods is use to sort the String values

// To sort number you can Try Sort and Compare in an array

/*

1. TO Use this, basically you have to write a callback function in sort method.
2. In the callback funtion you have to pass two parameters.
3. If you want to perform ascending operation. then simply compare the like this..
    - if(a > b) { return 1; }
    - if(b > a) { return -1; }

3. If you want to perform descending operation. then simply compare the like this..
    - if(a > b) { return -1; }
    - if(b > a) { return 1; }

*/

// console.log("Using Sorting Compare method");

// console.log("Ascending Order");

// const sortedNumber = numbers.sort((a,b) => {
//     if(a>b) {
//         return 1;
//     }
//     if(b>a) {
//         return -1;
//     }
// })
// console.log(sortedNumber);


// console.log("Descending order");

// const sortedNumber2 = numbers.sort((a,b) => {
//     if(a>b) {
//         return -1;
//     }
//     if(b>a) {
//         return 1;
//     }
// })
// console.log(sortedNumber2);


/**
 * Very Important methods of Array
 */

/*

- Map(), Filter(), Reduce()

These are the most important methods of array.

1. Map(): The map method return a new array after performing operation on an array. Without modifiying the new array.
- It does not execute for empty elements.

*/

// EXAMPLE - Square each number and create a new array

// const numbers = [1,2,3,4,5];

// const squareNumbers = numbers.map((curElem) => {
//     return curElem * curElem;
// })

// console.log(squareNumbers);


/**
 * Interview Questions
 */

// 1. Write a function that takes an array of string and return a new array where each string is capitalized.

// const fruits = ["Applye","Banana","mangos","Santra"];

// const capitalizedWords = fruits.map((fruits) => {
//     return fruits.toUpperCase();
// })

// console.log(capitalizedWords);


// 2. Write a function that takes an array of numbers and returns a new array where each number is squared, but only if  it's even number.

// const numbers = [1,2,3,4,5,6,7,8,9];

// const squaredNumbers = numbers.map((curElem) => {
//     if(curElem % 2 === 0) {
//         return curElem * curElem;
//     }   
//     // return null;
// }).filter((curElem)=>{
//     return curElem != undefined;
// })

// console.log(squaredNumbers);


// -=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-

// 2. Reduce Method : The Reduce method in javascript is used to accumulator or to reduce an array to a single value.  It iterates over the element of an array and applies a callback function to each element, updating an acumulator value with the result. The reduce method takes a callback function as its first argument and an optional  initial value for the accumulator as the second argument.

// Syntax 
// arr.reduce(callback(accumulator, currentValue, index, array), initialValue)

/* arr.reduce(callback(accumulator, currentValue, index, array) => {
    // return accumulator
    },initialValue)); 
*/


