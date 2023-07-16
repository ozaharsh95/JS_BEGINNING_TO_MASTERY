
//static list
/*
const todoList=document.querySelectorAll(".todo-list li");
console.log(todoList);
const newLi=document.createElement("li");
newLi.textContent="navu li";
ul.append(newLi);
console.log(todoList);
*/

//live list
const ul=document.querySelector(".todo-list");
const lilists=ul.getElementsByTagName("li");
console.log(lilists);

const newLi=document.createElement("li");
newLi.textContent="navu li";
ul.append(newLi);

console.log(lilists);