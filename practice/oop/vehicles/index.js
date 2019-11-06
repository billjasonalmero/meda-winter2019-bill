//const Vehicle = require("./vehicle.js");

const fs = require("fs");
const _ = require("lodash");
const Car = require("./car.js");
//const Helicopter = require("./helicopter.js");
//let honda = new Car("Bill", "Honda","Civic", 2000, "white","8FKT891",  125000, 35, 11,"gas", 150);

console.log(_.random(10,100)  );


function createCar(make) {

  let randomCar = new Car (
    "User",
    make,
    "Company",
    _.random(1930,2020),
    "transparent",
    _.random(1111111,9999999),
    _.random(0, 300000),
    _.random(10, 40),
    _.random(4, 40),
    "gas",
    _.random(28, 240)
  );
  return randomCar;
}



let container = {
  cars: []
  
}

for (let i = 0; i < 100; i++) {
  container.cars.push(createCar("Car" + i));
}


let stringifiedData = JSON.stringify(container);

fs.writeFileSync("carInventory.json", stringifiedData, "utf8");


console.log(container.cars[80].make)

//nov5, 2019
//week 3 day 11