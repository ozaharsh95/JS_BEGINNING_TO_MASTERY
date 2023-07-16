export var lname='oza';

let age=20;
export{age};

export class jabar{
    constructor(a,b) {
        this.a=a;
        this.b=b;
        
    }
    info(){
        console.log(this.a+" "+this.b);
    }
}

export default class Person{
    constructor(fname,lname,age){
        this.fname=fname;
        this.lname=lname;
        this.age=age;
    }

    info(){
        console.log(this.fname,this.lname,this.age);
    }
}