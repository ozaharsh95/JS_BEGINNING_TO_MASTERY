//click events
//3 ways to add event

//1) html ma direct

/*
<button class="btn btn-headline" onclick="console.log('you click me')">Learn More</button>
*/

//2)

/*
const btn=document.querySelector(".btn-headline");
btn.onclick=function(){
    console.log("you clicked me.. js file!");
}
*/

//3) addEventListner

const btn=document.querySelector(".btn-headline");



// btn.addEventListener("click",()=>{
//     console.log("Arrow function ");
//     console.log(this);
/* arrow function ma this ni value window hoy chhe*/
// });


btn.addEventListener("click",function(){
    console.log("dhinak dhin dha..");
    console.log(this);
    /* function() ma this ni value je te element pote hoy chhe
    */
})