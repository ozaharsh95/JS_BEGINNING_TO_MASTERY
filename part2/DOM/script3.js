const var1=document.querySelector(".section-todo");

//to list all classess

console.log(var1.classList);

//to add class

var1.classList.add("bg-dark");

//to remove class

var1.classList.remove("container");

//to check class present or not?

console.log(var1.classList.contains("container"));

//toggle
//class na hoy to add kare or hoy to remove kare

var1.classList.toggle("bg-dark");
var1.classList.toggle("bg-dark");