//synchronus v/s async

//sync
//badhu line by line thay kam kaj ene sync programmimg kevay

//code example of sync prog

/*

console.log("start");

for(let i=1;i<10000;i++){ 

}

console.log("end");

*/


//JS->>>> single threaded language+sync programmimg lang chhe

// js ma async feature web browser ape chhe

//setTimeout
/*
console.log("script start");

//way1
// function hello(){
//     console.log("hello heloo........");
// }
// setTimeout(hello,2000);

setTimeout(()=>{
    console.log("comethru..//");
},3000)
console.log("script end");
*/

//code2
/*
console.log("script start");

setTimeout(()=>{
    console.log("inside the settimeout");
},0);

for(let i=0;i<100;i++){
    console.log("...");
}

console.log("script end");
*/


//code3

/*
console.log("script start");

//setTimeout id return kare
const id=setTimeout(()=>{
    console.log("inside the settimeout");
},1000);

for(let i=0;i<100;i++){
    console.log("...",i);
}

console.log("setimeout ni id",id);
console.log("clearing time out");
clearTimeout(id);//setTimeout valu fxn na thay

console.log("script end");
*/



//setInterval


// console.log("script start");

// setInterval(()=>{
//     // console.log(Math.random());
//     let total=0;
//     for(let i=0;i<10000000000;i++){
//         total+=i;
//     }
//     console.log(total);
//     console.log(Math.random());
// },500);



// console.log("script end");