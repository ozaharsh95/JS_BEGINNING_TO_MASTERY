//new keyword

function createUser(fname,age){
    this.fname=fname;
    this.age=age;
}

createUser.prototype.about=function(){
    console.log("hello");
};
const user1=new createUser("harsh",10);


// new keyword
/*  
1. empty object this ={}
2. return this (empty object)
3. Object.create(createUser.prototype)

*/

console.log(user1);
user1.about();