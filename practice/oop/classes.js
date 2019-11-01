let firstPerson = {
  firstName: "Eduardo",
  lastName: "Garcia",
  age: 29,
  city: "San Francisco",
  state: "California",
  occupation: "contractor",
  eye: "transparent",
  hair: "black",
  beard_color: "black",
  transportation: "teleportation",
  marital_status: "single",
  gender: "male",
  food: "sushi"
};

let secondPerson = {
  firstName: "Barbara",
  lastName: "Streisand",
  age: 50,
  occupation: "Actress",
  transportation: "Private Jet",
  gender: "female",
};

let thirdPerson = {
  firstName: "Brad",
  transportation: "Car"
};


//console.log("Welcome! " + firstPerson.firstName + ", how was your day today?");

let people = [firstPerson, secondPerson, thirdPerson];

//A function that calculates the average age of the people in the array provided.



function getAverageAge(personArray) {

  let totalAge = 0;

  for (let i = 0; i < personArray.length; i++) {
    totalAge = totalAge + personArray[i].age;
  }
  return totalAge / personArray.length;

}

//console.log("The average age of the people in the array is: " + getAverageAge(people));

//Same objects but using Classes instead.

class Employee {
  constructor(firstNameValue, salary, license, status, timesheet) {
    console.log("A new employee was created!");
    this.firstName = firstNameValue;
    this.license = license;
    this .salary = salary;
    this.status = status;
    this.timesheet = timesheet;
    //  [property]    [parameter]

  }

  work() {
    console.log(this.firstName + " is working pretty really hard, maybe.");

    this.timesheet = this.timesheet -1;
  }

  goHomeAndSleep()

  hourLeft() {
    return this.timesheet;
  }
}

new Employee();

let firstEmployee = new Employee("Eduardo", 70000, "123456", "active", 2);
let secondEmployee = new Employee("Pedro", 120000, "1qaz2w", "inactive", 4);
let thirdEmployee = new Employee(null, null, null, null, 0);


firstEmployee.work();
firstEmployee.work();
firstEmployee.work();
