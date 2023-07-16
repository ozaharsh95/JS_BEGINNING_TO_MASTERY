//call,apply and bind


function jordar(favMovie,favhero){
    console.log(this.firstName+"  "+favMovie+" "+favhero);
}


const user1={
    firstName:'Harsh',
    age:9,
    about:function(){
        console.log(this.firstName+" "+this.age);
    },
    oza:function(hobby,school){
        console.log(this.firstName+" "+this.age+" "+hobby+" "+school);
    }
} 

const user2={
    firstName:"jayeshbhai",
    age:10
}

user1.about();
user1.about.call(user1);
user1.about.call(user2);

user1.oza.call(user1,"cricket","RC")
user1.oza.call(user2,"hockie","CM")


jordar.call(user1,"RRR","JrNTR");
jordar.call(user2,"bahubali","prabhas");


//apply
jordar.apply(user1,["end game","ironman"])
jordar.apply(user2,["infinite war","captain"])


//bind
//return function

const func=jordar.bind(user1,"RRR","JrNTR");
func(); 