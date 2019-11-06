const fs = require("fs");

let data = fs.readFileSync("carInventory.json", "utf8");

data = JSON.parse(data);

//console.log(data.cars[49].MPG); //MGP via cars.js
//the MPG ex: 26 came from carInventory [49]

//let carsArray = data.cars;
//carsArray.length or data.cars.length

//what is th eaverage miles per gallon of these 100 cars
//to find out the avarage, we add up all the MPG properties and divide by how many cars they were
let total = 0;

for (let i = 0; i < data.cars.length; i++) {
  total = total + data.cars[i].MPG;
}

let mpgAverage =  total / data.cars.length;

console.log("What is the average miles per gallon these 100 cars?");
console.log(mpgAverage + " MPG")