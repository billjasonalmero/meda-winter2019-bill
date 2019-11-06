//const Vehicle = require("./vehicle.js");

const fs = require("fs");
const _ = require("lodash");
const Car = require("./car.js");
//const Helicopter = require("./helicopter.js");
//let honda = new Car("Bill", "Honda","Civic", 2000, "white","8FKT891",  125000, 35, 11,"gas", 150);

console.log(_.random(10,100)  );

let randomCar = new Car ("User", "Generic", "Company", _.random(1930,2020), "transparent", _.random(1111111,9999999), _.random(0, 300000), _.random(10, 40), _.random(4, 40), "gas", _.random(28, 240));

let stringifiedCar = JSON.stringify(randomCar);

fs.writeFileSync("carInventory.txt", stringifiedCar, "utf8");

//nov5, 2019
//week 3 day 11