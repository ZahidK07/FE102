// map method of Array instances creates new Array populated with the results of calling a provided function on every element in the calling array.

// whenever we have to make changes every item in Array and create new array

const array = [2, 4, 7, 9]; //original array and never changes

const mapped = array.map((x) => x * 2);
console.log(mapped, "<< multiply by 2"); // gives new Array and cannot change original array

console.log("");

// Without map() it was done by loops
let nums = [2, 3, 4];
let res = [];
console.log(nums, "original");

for (let i = 0; i < nums.length; i++) {
  res.push(nums[i] * 2);
}
console.log(res, "with loops");
// with loops its a lengthy process and more line of code

const newNums = nums.map((n) => n * 2); // with map() multiplied the values in single line of code
console.log(newNums, "with map()");

/*
🔥 Why developers prefer map():
Less code
Easy to read
Less bugs
Functional style (used in React a LOT)
*/
console.log("");

// Q1 Square of each number 
let numAr = [1, 2, 3, 4];
const newNumAr = numAr.map((x) => x * x);

console.log(numAr, "original");
console.log(newNumAr, "Square of Num");

console.log("");
/*
 Q2 Convert Numbers to Strings
input [1, 2, 3]

output ["1", "2", "3"]
*/

let numbers = [1, 2, 3];
let convertNum = numbers.map((num) => num.toString());

console.log(numbers,"Orignal Array");
console.log(convertNum, "Convert Numbers to Strings");


/*
    3️⃣ Add 10 to Every Element
    input  [5, 10, 15]
    output [15, 20, 25]

*/

let addTen = [5, 10, 15];
const addedTen = addTen.map((num) => num + 10);

console.log(addTen, "origianl Array");
console.log(addedTen, "Add 10 to Every Element");

console.log("");
/*
    Convert Celsius to Fahrenheit

    Formula F = (C * 9/5) + 32

    Input [0, 10, 20]

    Output [32, 50, 68]
*/

let celsiusArr = [0, 10, 20];
let celsiusNum = celsiusArr.map((n) => (n * 9/5) + 32);

console.log(celsiusArr, "Original Array");
console.log(celsiusNum, "Celsius to Fahrenheit");

console.log("");
/*
4️⃣ Convert Celsius to Fahrenheit

Formula F = (C * 9/5) + 32

Input  =  [0, 10, 20]
Output = [32, 50, 68]
*/

let cels = [0, 10, 20];
const farh = cels.map((n) => (n * 9/5) + 32);
console.log(cels, "Celsius");
console.log(farh, "C to F");
