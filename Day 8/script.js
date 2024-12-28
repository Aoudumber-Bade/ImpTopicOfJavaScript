/**
 //! Extracting String Characters
 */

// * There are three methods for extracting characters 

// ? The charAt() Method
//? The charCodeAt() Method
//? The at(position) Method

//? 1. charAt() Method -> Returns the character at the specified index in a string.

// let text = "Hello Aoudumber, Welcome to my new Portfolio";

// console.log(text.charAt(-6));


//? 2. charCodeAt() Method -> Returns the Unicode of the character at the specified index in a string.

// let text = "Hello Aoudumber, Welcome to my new Portfolio";
// console.log(text.charCodeAt(9));

//? 3. at(position) Method -> Returns the character at the specified index in a string.

// let text = "Hello Aoudumber, Welcome to my new Portfolio";
// console.log(text.at(-6));

/**
//! * Replacing String Content
 */

//? 1. replace() Method -> Replaces a specified value with another value in a string.

// let text = "Hello Aoudumber, Welcome to my new Portfolio";
// let newText = text.replace("Aoudumber", "Aditya");

// console.log(newText);

//? 2. replaceAll() Method -> Replaces all occurrences of a specified value with another value in a string.

// let text = "Hello Aoudumber, Welcome to my new Portfolio";
// let newText = text.replaceAll("Aoudumber", "Aditya");
// console.log(newText);    

//? Case-Insemsitive Replacement: To perform a case-insensitive replacement, we can use a regular expression with the i flag.

// let originalText = "Hello Aoudumber, Welcome to my new Portfolio Aoudumber";

// let replacedText = originalText.replace(/Aoudumber/g,"Aditya");

// console.log(replacedText);


/**
 //! *  Other Useful Method
 */

 // ? 1. toUpperCase() Method -> Converts a string to uppercase.

//  let text = "Hello Aoudumber, Welcome to my new Portfolio";
//  let newText = text.toUpperCase();
//  console.log(newText);

 
// ? 2. toLowerCase() Method -> Converts a string to lowercase.

// let text = "Hello Aoudumber, Welcome to my new Portfolio";
// let newText = text.toLowerCase();
// console.log(newText);

//? 3. trim() Method -> Removes whitespace from both ends of a string.

// let text = "   Hello Aoudumber, Welcome to my new Portfolio   ";
// let newText = text.trim();
// console.log(newText);
// console.log(newText.length);

//? 4. trimStart() Method -> Removes whitespace from the start of a string.

// let text = "   Hello Aoudumber, Welcome to my new Portfolio   ";
// let newText = text.trimStart();
// console.log(newText);
// console.log(newText.length);

//? 5. trimEnd() Method -> Removes whitespace from the end of a string.

// let text = "   Hello Aoudumber, Welcome to my new Portfolio   ";
// let newText = text.trimEnd();
// console.log(newText);
// console.log(newText.length);

//? 6. split() Method -> Splits a string into an array of substrings.

// let text = "Hello Aoudumber, Welcome to my new Portfolio";
// let newText = text.split(" ");
// console.log(newText;
// console.log(newText.reverse());

//? 7. join() Method -> Joins all elements of an array into a string.

// let text = ["Hello", "Aoudumber", "Welcome", "to", "my", "new", "Portfolio"];

// console.log("Before Joining: ",text);


// let newText = text.join(" ");
// console.log("After Joining : "+newText);

//? 8. includes() Method -> Checks if a string contains a specified value.



/**
 //! * Interview Questions - String 
 */

 //? 1. Write a function that prints the letters 'a' through 'z' in the console. You should use a loop to iterate through the letters and print each one on a new line.

// console.log("----------------------------------")
// console.log("All A - Z Letters")
// console.log("----------------------------------")

// const printLetters = ( ) => {
//     let a = 'a'.charCodeAt(0);
// let z = 'z'.charCodeAt(0);

// for (let i = a; i<=z; i++) {
//     console.log(String.fromCharCode(i));
// }
// }

// printLetters();


//? 2. Write a function to count the number of vowels in the string.

// console.log("----------------------------------")
// console.log("Number of vowels in the string")
// console.log("----------------------------------")

// let str = "Hello Aoudumber, Welcome to my new Portfolio";

// const checkVowels = (str) => {
//     const vowels = ['a','e','i','o','u'];

//     let count = 0;

//     for(let char of str) {
//         if(vowels.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }

// let numberOfVowels = checkVowels(str);

// console.log("Number of vowels in the string: ",numberOfVowels);


//? 3. Write a fuction isPangram that takes string as input and return true if the string is a pangram (contains all the letters of the alphabet) and false otherwise. The function should be case insensitive and ignore spaces.

const isPangram = (str) => {
    let inputArr = str.toLowerCase().split("");

    const values = inputArr.filter((curElem) => curElem.charCodeAt() >= "a".charCodeAt() && curElem.charCodeAt() <= "z".charCodeAt())
    
    let uniqueValues = [...new Set(values)];
    return uniqueValues.length === 26 ? "It is a pangram" : "It is not a pangram";
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));