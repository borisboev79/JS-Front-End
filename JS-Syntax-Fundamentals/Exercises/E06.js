//Variant 1


// function sum(number){
//     let sum = 0;
//     let string = number.toFixed(0);

//     for (const el of string) {
//         let num = Number(el);
//             sum+= num;
//     }

//     console.log(sum)

// }


//Variant 2

function sum(number){
    let sum = 0;
    let num = number;

    while(num /10 > 0){
        sum+= num%10;
        num = Math.floor(num/10);
    }

    console.log(sum)

}

sum(245678)