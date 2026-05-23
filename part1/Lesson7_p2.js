//new keyword

function createUser(fname, age) {
  this.fname = fname;
  this.age = age;
}

createUser.prototype.about = function () {
  console.log("hello");
};
const user1 = new createUser("harsh", 10);

// here
// user1 instance (objects)'s prototype [user1.__proto__] points to constructor fxn's prototype method [createUser.prototype]
console.log(user1.__proto__ === createUser.prototype);

// new keyword
/*  
1. empty object this ={}
2. return this (empty object)
3. Object.create(createUser.prototype)

*/

console.log(user1);
user1.about();
