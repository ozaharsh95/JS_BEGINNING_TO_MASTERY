//basic concept

/*
const maraPromise=Promise.resolve(5);

Promise.resolve(5).then(value=>{console.log(value);});


//then() hamesha promise return karata hai


function myPromise(){
    return new Promise((resolve,reject)=>{
        resolve("foo");
    })
}


myPromise().then(
    (value)=>{
        console.log(value);
        value+='bar';
        //return promise thay chhe
        return value;
    }).then((value)=>{
        console.log(value);
        value+=" is good";
        return value;
    }).then((value)=>{
        console.log(value);
    });
*/

//code2 of pyaramid 


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





function changeText(element,text,color,time){

    return new Promise((resolve,reject)=>{ 
        setTimeout(()=>{
            if(element){
                element.textContent=text;
                element.style.color=color;
                resolve();
            }else{
                reject();
            }
        },time);
    });

}

//changetext promise return kare (suppose promise a)

// then pan promise return kare (suppose promise b)

// fxn()--> return 'a' -> 'a' returned by then as 'b' to next then

changeText(heading1,"one","red",1000)
.then(()=>{
    return changeText(heading2,"two","blue",2000)
}).then(()=>{
    return changeText(heading3,"three","green",2000)
}).then(()=>{
    return changeText(heading4,"four","pink",2000)
}).then(()=>{
    return changeText(heading5,"five","gold",2000)
}).then(()=>{
    return changeText(heading6,"six","darkgreen",2000)
}).then(()=>{
    return changeText(heading7,"seven","brown",2000)
}).then(()=>{
    return changeText(heading8,"eight","green",2000)
})



changeText(heading1,"one","red",1000)
.then(()=>changeText(heading2,"two","blue",2000))
.then(()=> changeText(heading3,"three","green",2000))
.then(()=>changeText(heading4,"four","pink",2000))
.then(()=>changeText(heading5,"five","gold",2000))
.then(()=>changeText(heading6,"six","darkgreen",2000))
.then(()=>changeText(heading7,"seven","brown",2000))
.then(()=>changeText(heading8,"eight","green",2000))

