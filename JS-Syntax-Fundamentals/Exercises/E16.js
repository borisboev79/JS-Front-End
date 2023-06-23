function sort(arr) {
  let arr2 = [];

  arr.sort((a, b) => a - b);

  while (arr.length > 0) {
    arr2.push(arr.shift());
    arr2.push(arr.pop());
  }

  return arr2;
}

sort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
