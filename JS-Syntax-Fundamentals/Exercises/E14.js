function solve(arr, num) {
    let arr2 = [];
    for (let index = 0; index < arr.length; index+= num) {
        arr2.push(arr[index]);
    }
    return (arr2);
}
