


//!  String in JavaScript


//?  What we will Cover

// 1.String & It's Properties
// 2. Escape Character
// 3. String Search Methods
// 4. Extracting String Parts
// 5. Extracting String Characters
// 6. Replacing String Content
// 7. Other Useful Methods


//! 1. String Properties 

// const str = "Aoudumber Bade";
// console.log(str[0].toUpperCase());


//! 2. Escape Character 

//* printing double quotes in double quotes 
// console.log("\n****My name is \"Aoudumber Bade\", and i am a Web Developer.")

//* printing sinle quotes in single quotes 
// console.log('\n***My name is \'Aoudumber Bade\', and i am a Web Developer.')

//* Printing Backslsh
// console.log("\n**My name is \\Aoudumber Bade\\, and i am a Web Developer")


//! 3. Search Methods

// * 1. indexOf()

// const fullName = "Aoudumber Shivaji Bade";
// console.log(fullName.indexOf("Bade"))

// console.log(fullName.indexOf("bade")) //! it returns -1. because it's case senitive.

// * How to convert a string to array 

// const name = "Aoudumber";
// const nameArray = Array.from(name);
// console.log("\n***After Converting string into Array")
// console.log(nameArray);

// console.log("\n****Iterating nameArray Using the Map Method");

// nameArray.map((curElem) => {
//     console.log(curElem);
// })

// console.log("\n****Printing all letters except 'd' using filter() method");

// const filteredArray = nameArray.filter((curElem)=>{
//     return curElem!="d";
// })

// console.log(filteredArray);


// * 2. lastIndex()

// const str1 = "Hello Aoudumber! Welcome to Our Website."
// console.log(str1.indexOf("Aoudumber", 2)) // ! It search forward. It start searching from 2 to the Last index of the string
// console.log(str1.lastIndexOf("Aoudumber", 32)) // ! It search from backward. It start searching from 32 to 0.



// * 3. Search() : The search() method searches a string for a string (or a regular expression) and returns the position of the match.
// * -> Returns the index number where the first match is found.
// * -> Returns -1 if no match is found

// const str2 = "Hello Aoudumber! Welcome to Our Website."
// let result = str2.search(/AoudumBer/i) // * We can use regular expression with search method. 
// console.log(result)


// * 4. match() : Returns an array of the matched values or null if no match is found

// console.log("Use of match() Method")

// const str = "Hey Aoudumber, Welcome to my New Portfolio. Aoudumber Tell me how is my portfolio";

// console.log(str)

// let result1 = str.match(/Aoudumerber/) //! It return null.
// let result2 = str.match(/Aoudumber/gi) //! It Returns All matches
// let result3 = str.match("Aoudumber") //! it Return 
// console.log(`Result 1: ${result1} \nResult 2: ${result2} \nResult 3: ${result3} `);


// * 5. matchAll() : Returns an iterator of all matches, providing detailed information about each mathc. Returns an empty iterator if not match is found. 

// let text = "Hello JavaScript, Welcome to our new Course of JavaScript";
// let matchResult = text.matchAll("JavaScript");
//*todo here the js converts the normal text into regular expression text.match(/JavaScript/g); also adds the g flag at the end.

// console.log(...matchResult);

// for(let item of matchResult) {
//     console.log(item[0]);
// }




