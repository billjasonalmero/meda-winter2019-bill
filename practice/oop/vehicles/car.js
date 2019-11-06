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
    
    if (this.currentFuel >= 0) {

      if (this.currentFuel * this.MPG >= miles) {
        this.currentFuel = this.currentFuel - (miles / this.MPG);
        console.log("The " + this.make + " " + this.model + " has " + this.currentFuel.toFixed(1) + " gallons of the " + this.engineType + " left.");
      }else {
        console.log("This " + this.make + " " + this.model + "doesn't have enough fuel to travel that far.")
        refuel(1)
      }

    }else {
      console.log("The " + this.make + " " + this.model + " has no gas.")
    }
  }
  /*
  refuel(refill) {
    if (refill < 0 ) {
      console.log("Your fuel tank is emptys");
    }else if(refill < this.tankSize){
      console.log("you have some fuel but make sure you refuel your car");
    }else {
      console.log("Your " + this.model + " has full tank");
    }
  }
  */

  refuel (gallons) {
    if (gallons <= 0) {
      console.log("You need to provide fuel (positive number).");
      return 1;
    }else {
      if (gallons >= this.tankSize) {
        console.log("You provided too much fuel, cannot fit into tank.")
      }else {
        if(this.tankSize - this.currentFuel < gallons) {
          console.log("There is not  enough space in the fuel tank to add that many gallons.")
        }else {
          this.currentFuel = this.currentFuel + gallons;
          console.log(this.model + " was sucessfully refueled with " + gallons + " gallons of gas.");
        }
      }
    }



  }
}

module.exports = Car;








//nov5, 2019
//week 3 day 11