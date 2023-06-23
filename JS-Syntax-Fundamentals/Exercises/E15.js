function sort(arr) {
    arr.sort(function (a, b) {
        return a.localeCompare(b, undefined, { sensitivity: "base" });
      });
    for (let index = 0; index < arr.length; index++) {
      console.log(`${index + 1}.${arr[index]}`)
    }
}

sort(["John", 
"Bob", "Genoveva", "Zak",
"Christina", 
"Ema"])