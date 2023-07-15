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