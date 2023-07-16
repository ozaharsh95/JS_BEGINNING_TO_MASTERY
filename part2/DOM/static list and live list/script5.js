//static list v/s live list


//querySelectorAll -->> static list
/*
const listItems=document.querySelectorAll(".todo-list li");

console.log(listItems);

const sixthli=document.createElement("li");

sixthli.textContent="item 6";

const ul=document.querySelector(".todo-list");

ul.append(sixthli);

console.log(listItems);
*/


//getElementBy.....  -->> live list
/*
const ul=document.querySelector(".todo-list");
const liveList=ul.getElementsByTagName("li");
console.log(liveList);


const sixthli=document.createElement("li");

sixthli.textContent="item 6";

ul.append(sixthli);

console.log(liveList);
*/



//how to get dimensions of element

const sectionoTodo=document.querySelector(".section-todo");

console.log(sectionoTodo.getBoundingClientRect());