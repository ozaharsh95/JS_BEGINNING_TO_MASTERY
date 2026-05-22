//call,apply and bind

// call, apply, and bind are methods used to explicitly set the value of this in JavaScript functions. call and apply invoke the function immediately, while bind returns a new bound function for later execution.

function jordar(favMovie, favhero) {
  console.log(this.firstName + "  " + favMovie + " " + favhero);
}

const user1 = {
  firstName: "Harsh",
  age: 9,
  about: function () {
    console.log(this.firstName + " " + this.age);
  },
  oza: function (hobby, school) {
    console.log(this.firstName + " " + this.age + " " + hobby + " " + school);
  },
};

const user2 = {
  firstName: "jayeshbhai",
  age: 10,
};

user1.about();
user1.about.call(user1);
user1.about.call(user2);

user1.oza.call(user1, "cricket", "RC");
user1.oza.call(user2, "hockie", "CM");

jordar.call(user1, "RRR", "JrNTR");
jordar.call(user2, "bahubali", "prabhas");

//apply
jordar.apply(user1, ["end game", "ironman"]);
jordar.apply(user2, ["infinite war", "captain"]);

//bind
//return function

const func = jordar.bind(user1, "RRR", "JrNTR");
func();

// dummy example of above lesson
/**
 * // call,apply,bind
      function jordar(favMovie, favHero) {
        console.log(this.favMovie + " " + this.favHero);
      }

      const user1 = {
        fName: "Harsh",
        age: 23,
        aboutMethod: function () {
          console.log(this.fName + " " + this.age);
        },
        movieMethod: function (arg1, arg2) {
          console.log(
            `Hi ${this.fName} - ${this.age} -> arguments are -> ${arg1} ${arg2}`,
          );
        },
      };

      const user2 = {
        fName: "Bhavesh",
        age: 25,
      };

      user1.aboutMethod();
      user1.aboutMethod.call(user1);
      user1.aboutMethod.call(user2);
      user1.movieMethod.call(user1, "da1u1", "da2u1");
      user1.movieMethod.call(user2, "da1u2", "da2u2");
      user1.movieMethod.apply(user1, ["da1u1-apply", "da2u1-apply"]);
      user1.movieMethod.apply(user2, ["da2u2-apply", "da2u2-apply"]);
      const f1 = user1.movieMethod.bind(user1, "da1u1-bind", "da2u2-bind");
      f1();
      const f2 = user1.movieMethod.bind(user2, "da1u2-bind", "da2u2-bind");
      f2();
 */
