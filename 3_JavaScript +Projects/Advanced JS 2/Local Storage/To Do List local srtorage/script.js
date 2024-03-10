const todo_container=document.querySelector(".todo-list-container");
const inputValue=document.getElementById("inputValue");
let localTodoArray=[];
document.querySelector(".btn").addEventListener('click',(e)=>{
    e.preventDefault();
    localTodoArray.push(inputValue.value);
    console.log(localTodoArray);

    
    const divElem=document.createElement("div");
    divElem.classList.add("todo_list");
    divElem.innerHTML=`<li>${inputValue.value}</li> <button class="deletebtn">Delete</button>`;
    todo_container.append(divElem);

})