let vehicle = class Vehicle {
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

  getVIN () {
    return VIN;
  }
}

module.exports = vehicle;


//nov5, 2019
//week 3 day 11