class Animal {
    constructor(metabolism, expired) {
        this.metabolism = metabolism;
        this.expired = expired;
    }
}

class Fish extends Animal{
    constructor(tasty) {
        super("medium-blooded", "fried");
        this.tasty = tasty;
    }
}

class Mammal extends Animal {
    constructor(type, limbs, mouth, nose, eyes, tail, hair, mammary, life, heightInches, weightLb) {
        super("warm-blooded", false);
        this.type = type;
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

        console.log(this.type + " was born.");
    }
    //GETTER get the value of something
    //SETTER set the value of something
    get type() {
        let mutated = this.type + "BearPig";
        return mutated;
    }

    set type (stringType) {
        this.type = stringType; 
    }

    
    eat() {
        console.log(this.type + " eats food.");
    }
    
    sleep() {
        console.log(this.type + " sleeps.");
    }
    
    reproduce(weightLb, heightInches) {
        console.log(this.type + " created a baby");
        let baby = new Mammal(this.type, this.limbs, this.mouth, this.nose, this.eyes, this.tail, this.hair, this.mammary, this.lifeExpectancy, heightInches, weightLb);
        
        return baby;
    }
    
    die() {
        console.log(this.type + " has lived a full life.");
    }
}
console.log("homework 2: " + Mammal.type);


