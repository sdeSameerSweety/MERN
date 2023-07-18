// Standard Function Syntax

function  f1(a, b) {
  const sum = a + b;
  return sum; // You Can't Export/Return Value After it 
}
console.log(f1(3, 4)); // 7


// Anonymous Function

var f2 = function(a, b) {
  const sum = a + b;
  return sum;
}
console.log(f2(3, 4)); // 7

// Immediately Invoked Function Expression (IIFE)

const result = (function(a, b) {
  const sum = a + b;
  return console.log(sum);
})(3, 4); // its save the loc 

// Functions Within Functions

function createFunction() {
  function f5(a, b) {
    const sum = a + b;
    return sum;
  }
  return f5;
}
const f5 = createFunction();
console.log(f5(3, 4)); // 7

// Function Hoisting

function createFunction() {
  return f6;
  function f6(a, b) {
    const sum = a + b;
    return sum;
  }
}
const f6 = createFunction();
console.log(f6(3, 4)); // 7

//Closures

function createAdder(a) {
  function f7(b) {
    const sum = a + b;
    return sum;
  }
  return f7;
}
const f8 = createAdder(3);
console.log(f8(4)); // 7

//Arrow Syntax

const f9 = (a, b) => {
  const sum = a + b;
  return sum;
};
console.log(f9(3, 4)); // 7

// Omit Return

const f10 = (a, b) => a + b;
console.log(f10(3, 4)); // 7

//Value Vs Refferance 

// copy via value
let name = "SameerSweety";
let employee = name;
console.log(`My Name Is ${name}`);
console.log(`My Employee Name Is ${employee}`);
employee = "ChepaChepi";
console.log(`My Name Is ${name}`);
console.log(`My Employee Name Is ${employee}`);

//copy via refferance
let array = [1, 2 , 3 ];
let array2 = array;

//copy via refferance
let array3 = [1, 2 , 3 ];
let array4 = array;
console.log(array3);
console.log(array4);
array2.pop() 
console.log(array3)
console.log(array4)
//TYPECONVERSION
//String To Array 
let str = "SameerSweety";
const arr = str.split("");
console.log(arr); // Output: ["H", "e", "l", "l", "o"];
//Using the spread operator (...):
const str1 = "SameerSweety , ChepiChepa";
const arr1 = [...str1];
console.log(arr1)
//Using the `Array.from method:
const arr2 = Array.from(str1)
console.log(arr2)
//Using the split() method with a delimiter:
const arr3 = str.split(",")
console.log(arr3)

