//class keyword

class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    eat(){
        return `${this.name} is eating`;
    }
}

const cat=new Animal("tom",20);
console.log(cat.eat());

//inheritence

class dog extends Animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed=speed;
    }

    run(){
        return `${this.name} is bhage at ${this.speed}`;
    }

    eat(){
        return `modified eat method`;
    }
}

const kuku=new dog("Tommy",5,45);
console.log(kuku);
console.log(kuku.eat()+"\n"+kuku.run());



//getter setter

class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}


const p1=new person("harsh",5);
console.log(p1);


//avade la easy chhe