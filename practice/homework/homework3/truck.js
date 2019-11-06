const Vehicle = require("./vehicle.js");

const Truck = class Truck extends Vehicle {
  constructor(make, model, year, color, owner, topSpeed, license, mileage, tankSize){
    super(make,model,year, color, owner, engineType, topSpeed,license, mileage, tankSize );
    this.license= license;
    this.engineType = engineType;
    this.transportType = transport;
    this.capacity = capacity;
    this.MPG = mpg;
  }

  transport(tons) {
    if(this.capacity < tons) {
      console.log(this.make + this.model + "cant carry" + tons + "tons");
    }else{
      console.log(this.make + this.model + "can carry" + tons + "tons");
    }
    return this.capacity >= true;
  }


}


module.exports = Truck;

//HOMEWORK
