var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(fName, lName) {
        this.firstName = fName;
        this.lastname = lName;
    }
    Person.prototype.greet = function () {
        return "Welcome " + this.firstName + " " + this.lastname;
    };
    return Person;
}());
var per = new Person('Dhiraj', 'Jadhavrao');
console.log(per.greet());
//Inheritance 
var Progarmmer = /** @class */ (function (_super) {
    __extends(Progarmmer, _super);
    function Progarmmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Progarmmer;
}(Person));
//You can access all the members of Person class in Programmer class
var apr = new Progarmmer("dhiraj", "Jadhavrao");
console.log(apr.greet());
