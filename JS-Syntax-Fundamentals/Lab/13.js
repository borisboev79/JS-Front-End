function calculateDiffOddEven (arr) {
    let sumOdd = 0;
    let sumEven = 0;

    arr.forEach(element => {
        if (element % 2 === 0){
            sumEven += element;
        }
        else {
            sumOdd += element;
        }
    });

    console.log(sumEven - sumOdd);
}
