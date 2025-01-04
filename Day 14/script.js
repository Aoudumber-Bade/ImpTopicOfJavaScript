
// import { stringify } from './node_modules/postcss/lib/postcss.d';

const todoLists = document.querySelector(".todo_list")
const inputVal = document.getElementById("inpValue");
const addBtn = document.querySelector(".addBtn");
const todo = document.querySelector(".todo_list");


const getTodoList = () => {
    return JSON.parse(localStorage.getItem("youtubeTodoList"));
}


addBtn.addEventListener("click", (e) => {
    addTodoList(e)
});

const addTodoListLocalStorage = (localTodoList) => {
    return localStorage.setItem("youtubeTodoList", JSON.stringify(localTodoList));
}

localTodoList = getTodoList() || [];

const addTodoDynamic = (curElem) => {
    const divElm = document.createElement("div");

    divElm.classList.add("todo");

    divElm.innerHTML = `
     <li>${curElem}</li>
                <button type="button" class="btn delBtn">Delete</button>
    `;

    todoLists.appendChild(divElm);
} 


const addTodoList = (e) => {
    e.preventDefault();

    const todoListValue = inputVal.value.trim();

    inputVal.value = "";

    if(todoListValue !== "" && !localTodoList.includes(todoListValue)){
        localTodoList.push(todoListValue);
    localTodoList = [...new Set(localTodoList)];
    // console.log(localTodoList)
    localStorage.setItem("youtubeTodoList", JSON.stringify(localTodoList));

    addTodoDynamic(todoListValue);
    }
   
}

const showTodoList = () => {
    localTodoList.forEach((curElem) => {
        addTodoDynamic(curElem);
    })
    
}

showTodoList();

const removeTodoList = (e) => {
 const todoToRemove = e.target;   
 let todoListContent = todoToRemove.previousElementSibling.innerText;
 let parentElem = todoToRemove.parentElement;
 console.log(todoListContent);

 localTodoList = localTodoList.filter((curTodo) => {
    return curTodo !== todoListContent;
 })

 addTodoListLocalStorage(localTodoList);
 parentElem.remove();

 console.log(localTodoList);
 
}



todo.addEventListener("click", (e) => {
    e.preventDefault();
    if(e.target.classList.contains("delBtn")) {

        removeTodoList(e);
    }
})




