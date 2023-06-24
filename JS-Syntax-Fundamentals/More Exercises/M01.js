function solve(x1, y1, x2, y2) {

  findDistance(x1, y1, 0, 0);
  findDistance(x2, y2, 0, 0);
  findDistance(x1, y1, x2, y2);


  function findDistance(x1, y1, x2, y2) {

    let result = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    console.log(
      `{${x1}, ${y1}} to {${x2}, ${y2}} is ${Number.isInteger(result) ? "valid" : "invalid"}`);
  }

}

solve(3, 0, 0, 4);
