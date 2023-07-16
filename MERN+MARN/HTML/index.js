// Standard Function Syntax

function f(a, b) {
    const sum = a + b;
    return sum; // You Can't Export/Return Value After it 
  }
  console.log(f(3, 4)); // 7


  // Anonymous Function

  var f = function(a, b) {
    const sum = a + b;
    return sum;
  }
  console.log(f(3, 4)); // 7

  // Immediately Invoked Function Expression (IIFE)
  //Step-1
  var f = function(a, b) {
    const sum = a + b;
    return console.log(sum);
  }
  f(3, 4);

  //Step-2
  var f = function(a, b) {
    const sum = a + b;
    return console.log(sum);
  }
  
 (function(a, b) {
    const sum = a + b;
    return console.log(sum)})(3, 4); // or write this f() both are same
 //Step-3

  const result = (function(a, b) {
    const sum = a + b;
    return console.log(sum);
  })(3, 4); // its save the loc 
  
  // Functions Within Functions

  function createFunction() {
    function f(a, b) {
      const sum = a + b;
      return sum;
    }
    return f;
  }
  const f = createFunction();
  console.log(f(3, 4)); // 7

 // Function Hoisting

 function createFunction() {
    return f;
    function f(a, b) {
      const sum = a + b;
      return sum;
    }
  }
  const f = createFunction();
  console.log(f(3, 4)); // 7

  //Closures

  function createAdder(a) {
    function f(b) {
      const sum = a + b;
      return sum;
    }
    return f;
  }
  const f = createAdder(3);
  console.log(f(4)); // 7

  //Arrow Syntax

  const f = (a, b) => {
    const sum = a + b;
    return sum;
  };
  console.log(f(3, 4)); // 7

  // Omit Return

  const f = (a, b) => a + b;
console.log(f(3, 4)); // 7

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
let array = [1, 2 , 3 ];
let array2 = array;
console.log(array);
console.log(array2);
array2.pop() 
console.log(array)
console.log(array2)
