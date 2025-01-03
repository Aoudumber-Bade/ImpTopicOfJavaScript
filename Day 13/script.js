

const btn1 = document.getElementById("myBtn1");
const btn2 = document.getElementById("myBtn2");
const colorCode = document.getElementById("color_code")
const copyDiv = document.querySelector(".copy_code")
const copyBtn = document.querySelector(".copyBtn")
const mBody = document.getElementsByTagName("Body");


const hexValues = () => {
    let myHexa = "1234567890abcdef";
    // let hex = myHexa.split("");

    let color = "";

    for(let i = 0; i<6; i++) {
        color += myHexa[Math.floor(Math.random()*16)];
    }
    return `#${color}`;
}

let rgb1 ="#444";
let rgb2 = "#444"
btn1.addEventListener("click",  () =>{
    rgb1 = hexValues();
    console.log(rgb1);
    document.body.style.background = `linear-gradient(to right, ${rgb1}, ${rgb2})`
    colorCode.textContent = `background: linear-gradient(to right, ${rgb1}, ${rgb2})`;
    btn1.innerText = rgb1;
    btn1.style.background = rgb1;
    copyDiv.style.background = `linear-gradient(to right, ${rgb1}, ${rgb2})`
    
});
btn2.addEventListener("click", () =>{
    rgb2 = hexValues();
    console.log(rgb2);
    document.body.style.background = `linear-gradient(to right, ${rgb1}, ${rgb2})`
    colorCode.textContent = `background: linear-gradient(to right, ${rgb1}, ${rgb2})`;
    btn2.innerText = rgb2;
    btn2.style.background = rgb2;
    copyDiv.style.background = `linear-gradient(to right, ${rgb1}, ${rgb2})`
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(colorCode.textContent);
    alert("copied");
})





