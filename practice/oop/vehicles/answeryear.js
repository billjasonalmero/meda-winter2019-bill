const fs = require("fs");

let data = fs.readFileSync("carInventory.json", "utf8");

data = JSON.parse(data);

let total = 0;

for (let i = 0; i < data.cars.year.length; i++) {
  total = total + data.cars[i].MPG;
}


let mpgAverage =  total / data.cars.length;

console.log("What is the average miles per gallon these 100 cars?");
console.log(mpgAverage + " MPG")












// 1.create a File, create a readyFileSync
// 2.create a for loop to gather all the car years
// 3.create an if / else statement to sort how many car are from  year 1940 -1960



//nov 7, 2019
//week 3 DAY 13
