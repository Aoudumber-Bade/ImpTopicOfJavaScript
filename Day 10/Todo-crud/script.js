let elem = document.getElementById("inputfield");
let btn = document.querySelector(".btn")
let listOfTodos = document.querySelector(".todo_list");
// console.log(listOfTodos);


const addTodo = () => {
    // console.log(elem.value);

    let pElem = document.createElement("p");
    pElem.innerText = elem.value;
    listOfTodos.appendChild(pElem);
    
}

btn.addEventListener("click", () => {
    addTodo();
});

listOfTodos.addEventListener("click", (event) => {
    console.log(event.target);
    let CurElement = event.target;
    CurElement.remove();

})


