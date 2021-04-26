class Person {
  firstName: string;
  lastname: string;

  constructor(fName: string, lName: string) {
    this.firstName = fName;
    this.lastname = lName;
  }

  greet() {
    return "Welcome " + this.firstName + " " + this.lastname;
  }
}

var per = new Person("Dhiraj", "Jadhavrao");
console.log(per.greet());

//Inheritance
class Progarmmer extends Person {}

//You can access all the members of Person class in Programmer class
var apr = new Progarmmer("dhiraj", "Jadhavrao");
console.log(apr.greet());

//Interface
interface Employee {
  firestName: string;
  lastname: string;
  getFullName(): string;
}

//if class impletment interface that class should implements all the members of the interface
class impl implements Employee {
  firestName: string;
  lastname: string;
  getFullName(): string {
    return this.firestName + " " + this.lastname;
  }
}
