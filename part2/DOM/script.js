//index.html

//change text
//textContent 
//innerHTML

const mainHeading=document.getElementById("main-heading");

console.log(mainHeading.textContent);

// mainHeading.textContent="THIS IS AMERICA";


console.log(mainHeading.textContent);

console.log(mainHeading.innerText);

console.log(mainHeading.innerHTML);



//change the styles of elements
/*
const mainHeading=document.querySelector('div.headline h2');
console.log(mainHeading);

mainHeading.style.backgroundColor='red';
mainHeading.style.border='2px solid #fff';
*/

//get and set attribute
/*
const link=document.querySelector('a');
console.log(link.getAttribute('href'));

const inputElement=document.querySelector('.form-todo input');

link.setAttribute("href","https://codprog.com")
console.log(inputElement.getAttribute("type"));
*/


//get multiple elements using getElements by class name

//by using querySelectorAll

/*
const navItems=document.getElementsByClassName("nav-item");//HTMLCollection

console.log(navItems);

const navItems1=document.querySelectorAll(".nav-item");//NodeList

console.log(navItems1);
*/

//loop

//HTMLCollection
/*
//simple for loop
for(let i=0;i<navItems.length;i++){
    console.log(navItems[i]);
    const navItem=navItems[i];
    navItem.style.backgroundColor="red";
    navItem.style.fontWeight="bold";
}

//for of loop
for(let i of navItems){
    i.style.border='2px solid gold';
}


//HTMLConnection --> Array

arr=Array.from(navItems);
console.log(Array.isArray(arr));
*/

//NodeList

let navItems2=document.querySelectorAll("a");

//simple for loop

/*
for(let i=0;i<navItems2.length;i++){
    console.log(navItems2[i]);
    const navItem=navItems2[i];
    navItem.style.backgroundColor="red";
    navItem.style.fontWeight="bold";
}
*/

//for of loop

/*
for(let i of navItems2){
    i.style.border='2px solid gold';
}
*/

//forEach 

/*
navItems2.forEach((x)=>{
    x.style.backgroundColor='#fff';
    x.style.color="#ccc";
    x.style.fontWeight="bold";
});
*/

//NodeList to Array

/*
arr1=Array.from(navItems2);
console.log(Array.isArray(arr1));
*/