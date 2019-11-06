// Units is American, Miles and Gallons

const Car = require("./car.js");

let honda = new Car("Jesse", "Honda", "Civic", 2000, "white", "8EFD39E9", 125000, 35, 12, "gas", 150);

console.log(honda);
honda.travel(100);
honda.travel(100);
honda.travel(100);
honda.travel(100);
honda.travel(100);
honda.travel(100);
honda.refuel(10);
honda.travel(50);