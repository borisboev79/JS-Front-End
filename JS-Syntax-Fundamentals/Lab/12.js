function reverseArray (count, arr) {
    let resultArray = [];
    
    for (let index = 0; index < count; index++){
        resultArray.push(arr[index]);
    }

    console.log(resultArray.reverse().join(" "));
}

reverseArray(3, [10,20,30,40,50]);