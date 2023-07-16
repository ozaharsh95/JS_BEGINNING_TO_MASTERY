/*
const allButtons=document.querySelectorAll(".my-buttons button");

console.log(allButtons);

for(let button of allButtons){
    button.addEventListener("click",function(){
        console.log(this.textContent);
    })
}
*/
//event object
//6:30:00

//koi pan element par event listner add thay to
// js engine-->> line by line execute kare code ne

// browser--> js engine + web API + extra features


//jayre browser ne khabar padi ke user e event preform kari , tyare broswer -->>  2 kam kare 1)callback function js engine ne ape + 2) callback fxn sathe je event thayi chhe teni information pan mokale

//aa information e browser ek object na form ma ape(event object)


//code1

// const firstButton=document.querySelector("#one");

// firstButton.addEventListener("click",function(event){
//     console.log(event);
// });


//code2

/*
const allButtons=document.querySelectorAll(".my-buttons button");

for(let btn of allButtons){
    btn.addEventListener("click",(e)=>{
        console.log(e.Target);
    });
}
*/

//behind the scene of events

//code1
/*
console.log("script start...");

const allButtons=document.querySelectorAll(".my-buttons button");

allButtons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        let num=0;
        for(let i=0;i<=1000000000;i++){
            num+=i;
        }
        console.log(e.currentTarget.textContent,num);
    });
});

let outervar=0;
for(let i=0;i<=100000000;i++){
    outervar+=i;
}

console.log("value of outer variable ",outervar);

console.log("script end...");
*/

//code2
//when you pressed on button -> change its color : gray and bgcolor : yellow
/*
const allbtns=document.querySelectorAll(".my-buttons button");


for(let btn of allbtns){
    btn.addEventListener("click",(e)=>{
        e.target.style.backgroundColor="yellow";
        e.target.style.color="gray";
    });
}
*/

//code3
/*
const mainButton=document.querySelector("button");
const body=document.body;
const currentColor=document.querySelector(".current-color");

function randomColorGenerater(){
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);

    return `rgb(${red},${green},${blue})`
}

mainButton.addEventListener("click",function(){
    const randomColor=randomColorGenerater();
    console.log(randomColor);
    currentColor.textContent=randomColor;
    body.style.backgroundColor=randomColor;
});
*/