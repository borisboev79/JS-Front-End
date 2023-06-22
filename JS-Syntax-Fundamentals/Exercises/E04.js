function printSum(start, end) {
    let arr = [];
    let sum = 0;
    for (let index = start; index <= end; index++) {
        
        arr.push(index);
        sum += index;   
   }

    console.log(arr.join(' '));
    console.log(`Sum: ${sum}`)

}

printSum(50,60)