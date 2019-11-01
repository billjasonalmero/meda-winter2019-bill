class Animal {
  constructor(metabolism, expired) {
    this.metabolism = metabolism;
    this.expired = expired;
  }
}

class Fish extends Animal {
  //extend: also includes what the animal does
  constructor(tasty) {
    super("medium-blooded", "fried"); //super: to run the constructor at home; the parent constructor; that you are inheriting
    this.tasty = tasty;
  }
}

class Mammal extends Animal {
  //the constructor parameters must be in order
  constructor(type, limbs, mouth, nose, eyes, tail, hair, mammary, life, heightInches, weightLb) {
    super("warm-blooded", false); //its depick to fit true or flase than alive or dead on an animal
    this.type = type
    this.limbs = limbs;
    this.mouth = mouth;
    this.nose = nose;
    this.eyes = eyes;
    this.mammary = mammary;
    this.lifeExpectancy = life;
    this.hair = hair;
    this.heightInches = heightInches;
    this.weightLb = weightLb;
    this.tail = tail;
    this.age = 0;
    //this limb to tail does not need to be in order
    console.log(this.type + " was born");
  }

  eat() {
    console.log(this.type + " easts. food.");
  }

  sleep() {
    console.log(this.type + " sleeps");
  }

  reproduce(weightLb, heightInches) {
    console.log(this.type + "created a baby");
    let baby = new Mammal(this.type, this.limbs, this.mouth, this.nose, this.eyes, this.tail, this.hair, this.mammary, this.lifeExpectancy, heightInches, weightLb);
    return baby;
  }

  die () {
    console.log(this.type + "has lived a full life.");
  }

  //Custom method that checks if the Mammal si dead or not after living a certain amount of years
  live(years) {
    this.age = this.age + years;

    if (this.lifeExpectancy < this.age) {
      console.log(this.type + " is now dead.")
      this.expired = true;
    }else {
      console.log(this.type + " has sucessfullylived additional " + years + " years.");
    }
  } 
}




const firstMammal = new Mammal("dog", 4, 1, 1, 2, 1, true, 2, 30, 24, 4);

firstMammal.sleep();
firstMammal.eat();

let secondMammal = firstMammal.reproduce(4, 6);
console.log(secondMammal.heightInches);
console.log(firstMammal.secondMammal);
/*
//cat mammal
let cat01 = new Mammal ("cat", 3, 1, 1, 2, 1, true, 3, 5);
let cat02 = new Mammal ("cat", 3, 1, 1, 2, 1, true, 4, 5);
let cat02 = new Mammal ("cat", 3, 1, 1, 2, 1, true, 5, 5);

let litter = [cat01, cat02, cat03];

console.log(litter);

//Edaurdo's Sample
let firsCatMamal = new Mammal ("cat", 4, 1, 1, 2, 1, true, 8, 15, 10, 10);
let litter = new Array();

litter.push(firstCatMammal.reproduce(1, 2));
litter.push(firstCatMammal.reproduce(1, 2));
litter.push(firstCatMammal.reproduce(1, 3));

console.log(litter);

//Fish Class

let tilapia = new Fish(true);
console.log(tilapia.metabolism);
*/



//nov 1 friday
//week 2 Day 10