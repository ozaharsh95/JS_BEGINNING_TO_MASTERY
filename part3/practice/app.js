import { name } from "./util/one.js";
import Person,{ lname,age,jabar } from "./util/two.js";


console.log(name+" "+lname);
console.log("my age is ",age);

var j1=new jabar('evan','tory');
j1.info();

var p1=new Person('elon','musk',20);
p1.info();