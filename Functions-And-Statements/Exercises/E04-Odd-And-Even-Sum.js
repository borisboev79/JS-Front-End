function getOddAndEvenSum(number) {
  const string = number.toString();
  let oddSum = 0;
  let evenSum = 0;

  for (const el of string) {
    if (el % 2 === 0) {
      evenSum += Number(el);
    } else {
      oddSum += Number(el);
    }
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

getOddAndEvenSum(3495892137259234)
