function checkIfPerfectNumber(number) {
  let sum = 0;

  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  console.log(
    sum === number ? "We have a perfect number!" : "It's not so perfect."
  );
}

checkIfPerfectNumber(1236498);
