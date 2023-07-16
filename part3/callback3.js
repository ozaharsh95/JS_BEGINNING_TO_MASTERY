//sync programmimng ma callback function

function f1(callback){
    console.log("function 1");
    callback();
}

//way1

// function f2(){
//     console.log("function 2");
// }

// f1(f2);

//way2

// f1(function(){
//     console.log("function 2 ander");
// });

//way3

// f1(()=>{
//     console.log("inside arrow function 2");
// })

//code2

function getTwonumbersAndAdd(n1,n2,callback){
    if(typeof n1==="number" && typeof n2=== "number"){
        console.log(n1,n2);
        callback(n1,n2);
    }else{
        console.log("unseccesfull");
    }
}


/*
way1
function addTwoNumbers(a1,a2){
    console.log(a1+a2);
}
getTwonumbersAndAdd(4,5,addTwoNumbers);
*/


//way2
/*
getTwonumbersAndAdd(5,5,(a,b)=>{
    console.log(a+b);
});
*/


//code3
//apade 2 callback use kariye chie 
//onSuccess
//onFailure


function getTwonumbersAndMultiply(n1,n2,onSuccess,onFailure){
    if(typeof n1==="number" && typeof n2=== "number"){
        
        onSuccess(n1,n2);

    }else{

        onFailure();
    }
}

getTwonumbersAndMultiply(2,5,(a,b)=>{
    console.log(a*b);
},()=>{
    console.log("wrong data type");
});