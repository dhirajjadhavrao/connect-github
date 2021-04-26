
var fn = () => 'response';
// This is new arrow function when you compile this file using 
// tsc : typescript compiler 
// After this complier will create new .js file with same name 
// file will contains all typescript code converted into native javascript code

/** 
 * Converted Code :
 * var fn = function () { return 'response'; };
*/

//Declaring Variables into Typescript
var a:number;
//this is allowed 
a = 10;
//this will throw error 
// a = true;

//Define Array 
var arr = [];
var stringArr :string[];
var numberArr : number[];

//Tuple
var tuple : [string, number];
tuple = ["first", 1];
console.log(tuple);


//create function that contains two number agrs and returns addtion as number
function addNum (firstNumber : number, secondNumber : number ) : number{
    return firstNumber + secondNumber;
}
var sum = addNum(12, 8);
console.log(sum);