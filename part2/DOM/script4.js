//innerHTML

// const todoList=document.querySelector(".todo-list");

// todoList.innerHTML+="<li>New Todo </li>";


//when should not use
// jyare navi items add kariye avi rite to innerHTML use na thay kem ke agad vala elements ne pan fari add kare chhe (old+=new)

//when should use
//jyare update karavanu hoy kasu (navu navu add na karavanu hoy tyrae)



//navu element add karava mate

// document.createElement()

// const newTodoItem=document.createElement("li");

//way1
/*
const newTodoItemText=document.createTextNode("Teach students");
newTodoItem.append(newTodoItemText);
*/
//way2
/*
newTodoItem.textContent="Japad ki machine";
todoList.append(newTodoItem);
*/

//remove element

/*
const todo1=document.querySelector(".todo-list li");

todo1.remove();
*/

//prepand

/*
const b=document.createElement("li");
b.textContent="prepend vala li";
todoList.prepend(b);
console.log(b);
*/

//koi element ni before ke after add element karava mate
/*
const beforeItem=document.createElement("li");
beforeItem.textContent="before valo li";
let todoList=document.querySelector(".todo-list");
todoList.before(beforeItem);


const afterItem=document.createElement("li");
afterItem.textContent="after valo li";
todoList=document.querySelector(".todo-list");
todoList.after(afterItem);


*/

//element.insertAdjacentHTML(where,html)

/* 
    beforebegin
    afterbegin
    beforeend
    afterend
*/
/*
const todoList=document.querySelector(".todo-list");

todoList.insertAdjacentHTML("beforeend","<li>beforeend vado li</li>")


todoList.insertAdjacentHTML("afterend","<li>AFTER END vado li</li>")

todoList.insertAdjacentHTML("beforebegin","<li>beforebegin vado li</li>")


todoList.insertAdjacentHTML("afterbegin","<li>afterbegin END vado li</li>")
*/


//clone nodes
/*
const ul=document.querySelector(".todo-list");
const li=document.createElement("li");
li.textContent="new todo clone";
const li2=li.cloneNode(true);
ul.prepend(li2);
ul.prepend(li);
*/


//to support poor internet explorer
/*
    appendChild
    insertBefore
    replaceChild
    removeChild
*/

/* nahi maja avati ama rehne do phir :) */