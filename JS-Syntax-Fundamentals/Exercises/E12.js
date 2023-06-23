function solve(num, op1, op2, op3, op4, op5) {
    let number = Number(num);
    let arr = [op1, op2, op3, op4, op5];
    
    for (const element of arr) {
         
        switch(element) {
            case 'chop': number = number/2; console.log(number); break;
            case 'dice': number = Math.sqrt(number); console.log(number); break;
            case 'spice': number = number + 1; console.log(number); break;
            case 'bake': number = number * 3; console.log(number); break;
            case 'fillet': number = number * 0.8; console.log(number.toFixed(1)); break;
        }
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 
'fillet')