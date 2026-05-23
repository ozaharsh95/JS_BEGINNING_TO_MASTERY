const todoList = document.querySelector(".todo-list");

// new element creation

const newToDoItem = document.createElement("li");
console.log(newToDoItem);
newToDoItem.textContent = "append - todo 1";
todoList.append(newToDoItem);

const newTodoItem1 = document.createElement("li");
newTodoItem1.textContent = "prepand - todo 2";
todoList.prepend(newTodoItem1);

const newTodoItem2 = document.createElement("li");
newTodoItem2.textContent = "before - todo 3";
todoList.before(newTodoItem2);

const newTodoItem3 = document.createElement("li");
newTodoItem3.textContent = "after = todo 4";
todoList.after(newTodoItem3);
