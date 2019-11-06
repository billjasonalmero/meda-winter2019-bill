const Vehicle = require("./vehicle.js");

const Truck = class Truck extends Vehicle {
  constructor(make, model, year, color, owner, topSpeed, license, mileage, tankSize){
    super(make,model,year, color, owner, engineType, topSpeed,license, mileage, tankSize );
    this.license;
    this.engineType;
    this.transportType;
    this.capacity;
    this.MPG;
  }

  transport(tons) {
    if(this.capacity < tons) {
      console.log("No, the " + this.model + "cant carry" + tons + "tons");
    }else{
      console.log("Yes, the " + this.model + "can carry" + tons + "tons");
    }
  }
  return this.capacity; >= true;


}


module.exports = Trucks;

//HOMEWORK