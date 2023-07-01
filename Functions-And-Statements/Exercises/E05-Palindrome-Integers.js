function checkPalindrome(numbers) {
  for (const number of numbers) {
    let array = number.toString().split("");

    array.length % 2 === 0
      ? console.log(checkForPalindrome(0, array))
      : console.log(checkForPalindrome(1, array));
  }

  function checkForPalindrome(arrLength, array) {
    let n1 = 0;
    let n2 = 0;

    while (array.length > arrLength && n1 === n2) {
      n1 = Number(array.pop());
      n2 = Number(array.shift());
    }

    if (n1 !== n2) {
      return false;
    } else if (n1 === n2 && array.length === arrLength) {
      return true;
    }
  }
}

checkPalindrome([345543, 22, 2332, 456, 10401]);
