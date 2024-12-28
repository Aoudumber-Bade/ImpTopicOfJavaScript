/**
 * Functions in javascript
 */

// Practice 

// function greet(name) {
//     return "Hello "+name+", Welcome to Thapa JS Course..!";
// }

// console.log(greet("Aoudumber"));


// Write a javascript function calculator that takes two number and an operator as parameter and returns the result of the operation. The function should support Addition, Substraction, Multiplication, and Division. 

// With Normal Functiion 

// function calculator(num1, num2, op) {
//     switch (op) {
//         case '+':
//             return num1+num2;
//             break;
//         case '-':
//             return num1-num2;
//             break;
//         case '*':
//             return num1*num2;     
//             break;
//         case '/':
//             return num1/num2;
//             break;
            
//         default: 
//             console.log("Invalid Operation!!!");
//             break;
//     }
// }

// // Function Invocation 
// console.log(calculator(9,9,'-'));


// With Annonymous Function 

// const result = function(num1,num2,op) {
//     switch(op) {
//         case '+':
//             return num1+num2;
//             break;
//         case '-':
//             return num1-num2;
//             break;
//         case '*':
//             return num1*num2;
//             break;
//         case '/':
//             return num1/num2;
//             break;
//         default:
//             return "Invalid Operation....!";
//             break;
//     }
// }

// console.log(result(5,3,'-'))


// With Fat Arraow Function 

// const calc = (num1,num2,op) => {
//     switch(op) {
//         case '+': 
//         return num1+num2;
//         break;
//         case '-':
//             return num1-num2;
//             break;
//         case '*':
//             return num1*num2;
//             break;
//         case '/':
//             return num1/num2;
//             break;
        
//         default:
//             return "Invalid operation.....!"
//             break;
//     }
// }

// console.log(calc(7,9,"*"))


/**
 * Question 2: Write a function to reverse a given string without using built in reverse method; 
 */

/* Normal Function */

// const revString = (str) => {
//     let reverse = "";
//     for(let char = str.length - 1; char>=0; char--){
//         reverse = reverse + str[char];
//     }
//     return reverse;
// }

// console.log(revString("Aoudumber Bade"));



