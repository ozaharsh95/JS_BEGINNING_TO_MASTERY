const heading1=document.querySelector(".heading1");
const heading2=document.querySelector(".heading2");
const heading3=document.querySelector(".heading3");
const heading4=document.querySelector(".heading4");
const heading5=document.querySelector(".heading5");
const heading6=document.querySelector(".heading6");
const heading7=document.querySelector(".heading7");
const heading8=document.querySelector(".heading8");
const heading9=document.querySelector(".heading9");
const heading10=document.querySelector(".heading10");

setTimeout(()=>{
    heading1.textContent = "Harsh 1"
    heading1.style.color = "red"
    setTimeout(()=>{
        heading2.textContent = "Harsh 2"
        heading2.style.color = "red"
        setTimeout(()=>{
            heading3.textContent = "Harsh 3"
            heading3.style.color = "red"
            setTimeout(()=>{
                heading4.textContent = "Harsh 4"
                heading4.style.color = "red"
                setTimeout(()=>{
                    heading5.textContent = "Harsh 5"
                    heading5.style.color = "red"
                
                },2000)
            },1000)
        },3000)
    },2000)
},1000)