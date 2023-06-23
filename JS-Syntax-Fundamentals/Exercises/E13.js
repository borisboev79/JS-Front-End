function rotate(arr, num) {
    for (let index = 0; index < num; index++) {
        arr.push(arr.shift());
    }
    console.log(arr.join(' '));
}

rotate([2, 4, 15, 31], 5)