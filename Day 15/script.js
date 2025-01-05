

/**
 * 
 * Date And Time Objects
 */

// console.log(new Date().toLocaleDateString());



setInterval(()=> {
    const dateObj = new Date();
    document.querySelector(".hour").textContent = dateObj.getHours();
    document.querySelector(".min").textContent = dateObj.getMinutes();
    document.querySelector(".sec").textContent = dateObj.getSeconds();
}, 1000)

// const date3 = new Date(2025, 1, 15, 10);
// console.log(date3);

// const date4 = new Date(2025, 1, 15, 10, 44);
// console.log(date4);

// const date5 = new Date(2025, 1, 15, 10,247).getTime();
// console.log(date5);

// const date2 = new Date(2025, 1, 15, 10);
// console.log(date2);


/***
 * TIme Based Events in JS
 */


// function repeatFunction() {
//     console.log("Hello");
// }

// const intervalID = setInterval(repeatFunction, 5000);

// clearInterval(intervalID)



// function repeatFunction() {
//     console.log("The function repeats every 1000 milliseconds");
// }

// const intervalID = setInterval(repeatFunction, 1000);

// setTimeout(() => {
//     clearInterval(intervalID)
// }, 5000)




