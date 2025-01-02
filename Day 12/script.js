

const input = document.getElementById("inputBox");
const iVal = document.getElementById("iVal");
const iName = document.getElementById("iName");
const iType = document.getElementById("iType");
const eType = document.getElementById("eType");


input.addEventListener("input", (event) => {
    iVal.textContent = event.target.value;
    iName.textContent= event.target.name;
    // iType.textContent = event.target.inputType;
    eType.textContent = event.type;
    console.log(event.target.inputType);
    ;
});

// const iVal = document.getElementById("iVal"); 
const key = document.getElementById("key");
const CharCode = document.getElementById("charCode");
const keyCodee = document.getElementById("keyCode");


input.addEventListener("keydown", (event) => {
    key.textContent = event.key;
    CharCode.textContent= event.key.charCodeAt(0);
    keyCodee.textContent = event.keyCode;
    eType.textContent = event.type;

    // // console.log(event.target.inputType);
    console.log(event)
});