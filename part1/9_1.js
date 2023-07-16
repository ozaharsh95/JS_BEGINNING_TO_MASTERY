//  [[prototype]]  v/s __proto__



const obj1={
    key1:'value1',
    key2:'value2'
}

//obj2 thi value2 access karavi chhe  pan key2 belongs to obj1 so we have to make some connection b/w obj1 and obj2

const obj2=Object.create(obj1);
console.log(obj2);     //empty object {}

obj2.key3="value3";
console.log(obj2);     //{key3: 'value3'}

console.log(obj2.key2); //value2 

/*  javascript pela key2 ne obj2 ma sodhe na made to obj1 ma sodhe*/

/*  obj2 ma key2 na madata js obj2 na __proto__ma search kare */

/*  __proto__ == [[prototype]]  */


console.log(obj2.__proto__);


//prototype


// javascript ma function==>function+object

function hello(){
    console.log("hello world!");
}

hello.myProperty="unique";

console.log(hello.myProperty);

// function provides more usefull properties
//like name property
console.log(hello.name);
// jyare apade function banavie chhe tyare function free sapce ape (like empty object {}) tene prototype kahevay

console.log(hello.prototype);  // {}


//only functions provide prototype
/*
const list=["aple","bnaana"];
const obj={k1:'v1'};
function jaymataji(){
    console.log("Jay ambe");
}

if(list.prototype){
    console.log("Yes prototype is present");
}else{
    console.log("No prototype is not present");
}


if(obj.prototype){
    console.log("Yes prototype is present");
}else{
    console.log("No prototype is not present");
}


if(jaymataji.prototype){
    console.log("Yes prototype is present");
}else{
    console.log("No prototype is not present");
}

jaymataji.prototype.mandir="Ambaji";
jaymataji.prototype.bhagat="harshoza";
jaymataji.prototype.garabo=function(){
    console.log("navali navratri");
}

console.log(jaymataji.prototype);

*/