function createMatrix(digit) {
  let arr = [];
  for (let i = 0; i < digit; i++) {
    arr.push(digit);
  }

  for (let k = 0; k < digit; k++) {
    console.log(arr.join(" "));
  }
}

createMatrix(2);
