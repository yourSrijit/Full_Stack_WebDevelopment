// Selecting the container for the todo list and the input field
const todo_container = document.querySelector(".todo-list-container");
const inputValue = document.getElementById("inputValue");

// Function to get the todo list from local storage
const getTodoListFromLocal = () => {
    return JSON.parse(localStorage.getItem("todo"));
}

// Function to add the todo list to local storage
const addTodoToLocalStorage = (localTodoArray) => {
    return localStorage.setItem("todo", JSON.stringify(localTodoArray));
}

// Initializing the localTodoArray with the todo list from local storage or an empty array if it doesn't exist
let localTodoArray = getTodoListFromLocal() || [];

// Function to dynamically add todo list elements
let addTodoDynamicElement = (cur) => {
    const divElem = document.createElement("div");
    divElem.classList.add("todo_list");
    divElem.innerHTML = `<li>${cur}</li> <button class="deletebtn">Delete</button>`;
    todo_container.append(divElem);
}

// Event listener for the button click to add todo items
document.querySelector(".btn").addEventListener('click', (e) => {
    e.preventDefault();
    if (inputValue.value !== '' && !localTodoArray.includes(inputValue.value.trim())) {
        localTodoArray.push(inputValue.value);
        localTodoArray = [...new Set(localTodoArray)]; // Remove duplicates
        localStorage.setItem("todo", JSON.stringify(localTodoArray));
        addTodoDynamicElement(inputValue.value.trim());

        inputValue.value = ""; // Clear the input field
    }
});

// Function to display the todo list
let showTodoList = () => {
    localTodoArray.forEach((cur) => {
        addTodoDynamicElement(cur);
    })
}
showTodoList();

// Function to remove todo items
const removeTodoElem = (e) => {
    const todoRemove = e.target;
    let todoListContent = todoRemove.previousElementSibling.innerText;
    
    let parentElem = todoRemove.parentElement;
    localTodoArray = localTodoArray.filter((cur) => {
        return cur !== todoListContent.toLowerCase();
    })
    addTodoToLocalStorage(localTodoArray);
    parentElem.remove();
}

// Event listener for todo list container to handle delete button clicks
todo_container.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains("deletebtn")) {
        removeTodoElem(e);
    }
})
