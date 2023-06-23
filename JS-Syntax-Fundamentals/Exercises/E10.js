function solve(number) {

    let sum = 0;
    let totalLength = 1;
    let string = number.toFixed(0);
    let isSame = false;

    for (let index = string.length; index >= 1; index--) {
        if(string[index] === string[index -1]){
            totalLength++;
        }

        if(totalLength === string.length){
            isSame = true;
        }
        
    }

    for (const el of string) {
        let num = Number(el);
            sum+= num;
    }

    console.log(isSame)
    console.log(sum)

}



solve(2222222)


