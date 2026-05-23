//  [[prototype]]  | __proto__ | prototype

/*
| Concept         | Exists On | Purpose                                       |
| --------------- | --------- | --------------------------------------------- |
| `prototype`     | Functions | Shared methods/properties for created objects |
| `[[Prototype]]` | Objects   | Internal inheritance link                     |
| `__proto__`     | Objects   | Accessor to `[[Prototype]]`                   |

/*
GOLDEN INTERVIEW SUMMARY
1. prototype → property of functions
2. [[Prototype]] → internal property of objects
3. __proto__ → accessor to [[Prototype]]
4. Object lookup happens via prototype chaining
5. obj.__proto__ === Constructor.prototype
*/

// [1] __proto__

// Objects inherit properties from other objects through: [[Prototype]]
// __proto__ is a property of objects that points to their internal [[Prototype]].
// __proto__ is a way to access an object's internal [[Prototype]].

const obj1 = {
  key1: "value1",
  key2: "value2",
};

//obj2 thi value2 access karavi chhe  pan key2 belongs to obj1 so we have to make some connection b/w obj1 and obj2

const obj2 = Object.create(obj1);
console.log(obj2); //empty object {}

obj2.key3 = "value3";
console.log(obj2); //{key3: 'value3'}

console.log(obj2.key2); //value2

/*  javascript pela key2 ne obj2 ma sodhe na made to obj1 ma sodhe  */

/*  obj2 ma key2 na madata js obj2 na __proto__ ma search kare  */

/*  __proto__ == [[prototype]]  */

console.log(obj2.__proto__);

// Prototype Chaining
// When JavaScript cannot find a property on an object, it searches up the object's prototype chain until it finds the property or reaches null.

console.log(
  "======================= Prototype Chaining ==========================",
);

let arrExample = [1, 2, 3];
console.log(arrExample.__proto__);
console.log(Array.prototype);
console.log(arrExample.__proto__ === Array.prototype);
console.log("arrExample ---> arrExample.__proto__ -> Array.prototype");
console.log(arrExample.__proto__.__proto__ === Object.prototype);
console.log(
  "arrExample ---> arrExample.__proto__.__proto__ -> Object.prototype",
);
console.log(arrExample.__proto__.__proto__.__proto__ === null);
console.log("arrExample ---> arrExample.__proto__.__proto__.__proto__ -> null");

// [2] prototype

// javascript ma function ==> function + object

function hello() {
  console.log("hello world!");
}

hello.myProperty = "unique";

console.log(hello.myProperty);

// function provides more usefull properties
//like name property
console.log(hello.name);
// jyare apade function banavie chhe tyare function free sapce ape (like empty object {}) tene prototype kahevay

console.log(hello.prototype); // {}

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

// Why do we create objects (instances) from functions in JavaScript?
// Constructor Function

function User(name) {
  this.name = name;
}

const user1 = new User("Harsh");
// here user1 is instance of User
// constructir function improves memory structure and performance of code

// Prototypes allow JavaScript objects to share methods and properties efficiently without duplicating them for every instance, improving memory usage.

// BAD EXAMPLE — Methods Inside Constructor

function PrototypeBadExample(name) {
  this.name = name;

  this.sayHi = function () {
    console.log(`Hi, I am ${this.name} from bad example`);
  };
}

const badInstance1 = new PrototypeBadExample("Sachin");
badInstance1.sayHi();

const badInstance2 = new PrototypeBadExample("Virat");
badInstance2.sayHi();

// when we instantiated new instance using new keyword

// new PrototypeBadExample("Sachin")

// new function object is created for badInstance1

// so memory allocation will be look like this

// badInstance1 -> sayHi -> Function A
// badInstance2 -> sayHi -> Function B

// Proof that both function are different

console.log(badInstance1.sayHi === badInstance2.sayHi); // false

// using this approach
// when we create 100 instance
// we will create 100 copies of sayHi function
// this waste memory and performance

// Why is this considered bad?

// Expected Answer:

// Because every object gets its own separate copy of the method, causing unnecessary memory usage.

// GOOD EXAMPLE — Using Prototype

function GoodPrototypeExample(name) {
  this.name = name;
}

GoodPrototypeExample.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name} from good example`);
};

const goodInstance1 = new GoodPrototypeExample("Rohit");
const goodInstance2 = new GoodPrototypeExample("MSD");
goodInstance1.sayHi();
goodInstance2.sayHi();
console.log(goodInstance1.sayHi === goodInstance2.sayHi); //true -> sayHi exists only once

// memory structure
// GoodPrototypeExample.prototype -> sayHi (single shared function)
console.log(GoodPrototypeExample.prototype);
// goodInstance1.__proto__ -> GoodPrototypeExample.prototype
console.log(goodInstance1.__proto__);
// goodInstance2.__proto__ -> GoodPrototypeExample.prototype
console.log(goodInstance2.__proto__);

// INTERVIEW QUESTION
// [1] What does new keyword do internally?

// Expected Answer:
/*
1. Creates empty object
2. Links object's [[Prototype]] to constructor's prototype
3. Executes constructor with this
4. Returns object
*/

// [2] Where does .map() come from?

// Expected Answer:
// map() exists on Array.prototype, and arrays access it through prototype chaining.

// [3] Difference Between Classical Inheritance and Prototypal Inheritance
// Classical (Java/C++) -> class inherits class
// JavaScript           -> object inherits object through [[Prototype]]
