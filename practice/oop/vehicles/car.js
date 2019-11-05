const Vehicle = require("./vehicle.js");

const Car = class Car extends Vehicle {
  constructor(owner, make, model, year, color, license, mileage, mpg, tankSize, engineType, topSpeed) {
    super(make,model,year, color, owner, engineType, topSpeed); //only make,model,year can "vehicle.js" can be added
    this.license = license;
    this.mileage = mileage;
    this.tankSize = tankSize;
    this.currentFuel = this.tankSize;
    this.MPG = mpg;
  }

  //travel is a method
  travel (miles) {
    this.currentFuel = this.currentFuel  - (miles / this.MPG);
    console.log("The " + this.make + " " + this.model + " has " + this.currentFuel.toFixed(1) + " gallons of the " + this.engineType + " left.");
  }
}

module.exports = Car;








//nov5, 2019
//week 3 day 11