function modifyNumber(number) {

    let modified = number.toString().split("");

    const findAverage = (number) => modified.map((n) => Number(n)).reduce((a, b) => a + b, 0) / modified.length;

    let average = findAverage(number);

  while (average <= 5) {
    modified.push('9')
    average = findAverage(number);
  }

  return modified.join('');
}

console.log(modifyNumber(5385));
