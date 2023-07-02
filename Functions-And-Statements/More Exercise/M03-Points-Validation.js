function solve(arr) {
    const x1 = arr[0];
    const y1 = arr[1];
    const x2 = arr[2];
    const y2 = arr[3];
  
    findDistance(x1, y1, 0, 0);
    findDistance(x2, y2, 0, 0);
    findDistance(x1, y1, x2, y2);
  
  
    function findDistance(x1, y1, x2, y2) {
  
      let result = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${Number.isInteger(result) ? "valid" : "invalid"}`);
    }
  
  }
  
  solve([3, 0, 0, 4]);