//1 sec pachhi heading ne hello world mathi heading 1 karavanu

//async programming

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


console.log(heading1+" "+heading2);

//way1
//1sec na delay sathe heading1 red thase
/*
setTimeout(()=>{
    heading1.textContent="heading 1";
    heading1.style.color="red";
},1000);


//red heading thaya na 2 sec bad etale total 3sec bad heading2 yellow thayi jay
setTimeout(()=>{
    heading2.textContent="heading 2";
    heading2.style.color="yellow";
},3000);
*/

//way2
//callback hell

/*
setTimeout(()=>{
    heading1.textContent="heading 1";
    heading1.style.color="red";
    setTimeout(()=>{
        heading2.textContent="heading 2";
        heading2.style.color="yellow";
        setTimeout(()=>{
            heading3.textContent="heading 3";
            heading3.style.color="cyan";
            setTimeout(()=>{
                heading4.textContent="heading 4";
                heading4.style.color="brown";
                setTimeout(()=>{
                    heading5.textContent="heading 5";
                    heading5.style.color="green";
                    setTimeout(()=>{
                        heading6.textContent="heading 6";
                        heading6.style.color="pink";
                        setTimeout(()=>{
                            heading7.textContent="heading 7";
                            heading7.style.color="blue";
                        },1000);
                    },3000);
                },2000);
            },1000);
        },2000);
    },2000);
},1000);
*/



function changeText(element,text,color,time,onSuccessCallback,onFailureCallback){
    setTimeout(()=>{
        if(element){
            element.textContent=text;
            element.style.color=color;
            if(onSuccessCallback){
                onSuccessCallback();
            }
        }else{
            console.log("element doesn't exists");
            if(onFailureCallback){
                onFailureCallback();
            }
        }
    },time);
}

//pyramid of doom

/*
changeText(heading1,"one","red",2000,()=>{
    changeText(heading2,"two","yellow",1000,()=>{
        changeText(heading3,"three","cyan",2000,()=>{
            changeText(heading4,"four","green",1000,()=>{
                changeText(heading5,"five","pink",3000,()=>{
                    changeText(heading6,"six","gold",2000,()=>{
                        changeText(heading7,"seven","blue",1000,()=>{
                            changeText(heading8,"eight","rgb(200,0,23)",2000,()=>{
                                changeText(heading9,"nine","yellow",2000,()=>{
                                    changeText(heading10,"ten","darkblue",2000,()=>{
            
                                    },()=>{console.log("element doesn't exixst");});
                                },()=>{console.log("element doesn't exixst");});
                            },()=>{console.log("element doesn't exixst");});
                        },()=>{console.log("element doesn't exixst");});
                    },()=>{console.log("element doesn't exixst");});
                },()=>{console.log("element doesn't exixst");});
            },()=>{console.log("element doesn't exixst");});
        },()=>{console.log("element doesn't exixst");});
    },()=>{console.log("element doesn't exixst");});
},()=>{console.log("element doesn't exixst");});

*/