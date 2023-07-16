const body=document.body;


const id=setInterval(()=>{
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    const rgb=`rgb(${red},${green},${blue})`;
    body.style.backgroundColor=rgb;
},1000);


const btn=document.querySelector("button");

btn.addEventListener("click",()=>{
    clearInterval(id);
    btn.textContent=body.style.backgroundColor;
})