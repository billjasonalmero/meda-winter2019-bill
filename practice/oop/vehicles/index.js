//const Vehicle = require("./vehicle.js");
const Car = require("./car.js");
const Helicopter = require("./helicopter.js");

let honda = new Car("Bill", "Honda","Civic", 2000, "white","8FKT891",  125000, 35, 11,"gas", 150);

console.log(honda);
honda.travel(100);
honda.travel(100);
honda.travel(100);

honda.refuel(2);

let privateHeli = new Helicopter();



//nov5, 2019
//week 3 day 11