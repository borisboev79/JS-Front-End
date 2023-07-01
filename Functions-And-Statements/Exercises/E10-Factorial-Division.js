function factorialDivision(num1, num2) {
  let calculateFactorial = (num) => {
    let sum = 1;
    for (let i = 1; i <= num; i++) {
      sum *= i;
    }
    return sum;
  };

  let result = calculateFactorial(num1) / calculateFactorial(num2);

  console.log(result.toFixed(2));
}

factorialDivision(6, 2);
