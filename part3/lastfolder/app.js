import { fname as f} from "./utiles/fname.js";
import { age } from "./utiles/age.js";
import  Person,{Person2,Person3}  from "./utiles/person.js";
//export default karie to {} lagavava na pade

console.log(f,age);

const p1=new Person("harsh","oza",21);

const p2=new Person2("harsh","oza",21);

p1.info();
p2.info();

// console.log(p1);