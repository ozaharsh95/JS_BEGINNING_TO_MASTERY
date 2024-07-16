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
    console.log("bubblef child from callback fxn 1");
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


//      e.stopPropagation()      v/s       e.stopImmediatePropagation()

 /*
                                        e.stopPropagation()             e.stopImmediatePropagation()
        
        1)  jyare same event na 1       badha callback execute thay     jema e.stopImmediatePropagation() use karyu hoy e call back fxn j execute thay bakina na thay
            karata vadhare callback 
            fxn hoy tyare

        2)  agad event propogate na     true                            true
            thay
            
    */

    // options
    // option-1
    // e.stopPropagation()
    // option-2
    // e.stopImmediatePropagation()
    
    // jyare same event na 1 karata vadhare callback fxn hoy tyare

    // option-2
    // jyare e.stopImmediatePropagation() use kariye tyare
    // koi ek callback fxn ma stopImmediatePropagation use kariye to bakina callback fxn execute na thay + agad event propogate na thay

    // option-1
    // e.stopPropagation()
    // ek j event na badha callback execute thay + agad event propogate thay


    hu.addEventListener("click",(e)=>{
        // option-1
        // e.stopPropagation()
        // option-2
        // e.stopImmediatePropagation()
        console.log("bubblef child from callback fxn 2");
    });

    hu.addEventListener("click",(e)=>{
        console.log("bubblef child from callback fxn 3");
    });
    