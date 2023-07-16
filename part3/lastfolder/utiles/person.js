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

//named export
export  class Person2{
    constructor(fname,lname,age){
        this.fname=fname;
        this.lname=lname;
        this.age=age;
    }

    info(){
        console.log(this.fname,this.lname,this.age);
    }
}


export  class Person3{
    constructor(fname,lname,age){
        this.fname=fname;
        this.lname=lname;
        this.age=age;
    }

    info(){
        console.log(this.fname,this.lname,this.age);
    }
}