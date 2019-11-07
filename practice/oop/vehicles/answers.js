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

//console.log("What is the average miles per gallon these 100 cars?");
//console.log(mpgAverage + " MPG")
//QUESTION 1 end


//QUESTION 2 start
//2.in order to detectcars between 1940 an 1960 will go through all the cars.
//3.create a counter thqt will count the cars that did match.
//3.write a condition

console.log("How many cars do we have that were built between 1940-1960, inclusive");

let cars = data.cars;
//1
//console.log(cars[0].year);//testing

//3
let carsbetween1940and1960 = 0

//2
//just to get the data of all the carInventory.js also called test and development
for (let i = 0; i <cars.length; i++) {
  // console.log(cars[i])

  let currentCar = cars[i];
  console.log(currentCar);

  //3
  if (currentCar.year >= 1940 && currentCar.year <=1960) {
    //4
    carsbetween1940and1960 = carsbetween1940and1960 +1;
    /*
    //version 2
    carsbetween1940and1960 += 1;
    carsbetween1940and1960++1 //adds only 1
    */
  }


  /*
  //version 2
  if(currentCar.year>1940) {
    if (currentCar.year <1960) {
      
    }
  }
  */
}
console.log(carsbetween1940and1960);


//console.log(cars[cars.length - 1].year) //get the last index of the array