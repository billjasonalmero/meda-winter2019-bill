let Vehicle = class Vehicle {
  constructor(make, model, year, color, owner, engineType, topSpeed, maxSpeed) {
    //list of what all vehicles have
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.owner = owner;
    this.engineType = engineType;
    this.topSpeed = topSpeed;
    this.maxSpeed = maxSpeed;

    console.log("New Vehicle has created");
  }

  speak() {
    console.log("This is a vehicle object");
  }
}

module.exports = Vehicle;


function myFunction (arg1) {
  console.log(arg1,);
}

myFunction("1", "Really Important Data");

//nov5, 2019
//week 3 day 11