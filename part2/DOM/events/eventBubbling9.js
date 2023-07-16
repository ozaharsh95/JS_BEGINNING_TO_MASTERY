const dada=document.querySelector(".grandparent");
const papa=document.querySelector(".parent");
const hu=document.querySelector(".child");

/*
hu.addEventListener("click",()=>{
    console.log("you clicked on child");
});

papa.addEventListener("click",()=>{
    console.log("you clicked on parent");
});

dada.addEventListener("click",()=>{
    console.log("you clicked on grandparent");
});

document.body.addEventListener("click",()=>{
    console.log("you clicked on body");
});
*/

//event bubbling (event propagation)

//child ne parent ma same event hoy 
// child ni event click thata parent ni pan thay 


//capturing events



hu.addEventListener("click",()=>{
    console.log("captured !!! child");
},true);

papa.addEventListener("click",()=>{
    console.log("captured !!! parent");
},true);

dada.addEventListener("click",()=>{
    console.log("captured !!! grandparent");
},true);

document.body.addEventListener("click",()=>{
    console.log("captured !!! body");
},true);


//not capturing events


hu.addEventListener("click",()=>{
    console.log("bubblef child");
});

papa.addEventListener("click",()=>{
    console.log("bubblef parent");
});

dada.addEventListener("click",()=>{
    console.log("bubblef grandparent");
});

document.body.addEventListener("click",()=>{
    console.log("bubblef body");
});


//u curve capturing ---> bubbling--->


//event delegation


// dada.addEventListener("click",(e)=>{
//     // console.log("clicked on something");
//     console.log(e.target);
// });