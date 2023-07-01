function calculate(num1, num2, operator) {

  const calculator = {
  multiply: (x, y) => x * y,
  divide: (x, y) => x / y,
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
};

return(calculator[operator](num1, num2));
}

console.log(calculate(5, 5, "add"));
