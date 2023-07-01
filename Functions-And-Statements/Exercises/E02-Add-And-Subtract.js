function calculate(num1, num2, num3){

    const sum = (num1, num2) => num1 + num2;
    const subtract = (sum, num3) => sum - num3;

    console.log(subtract(sum(num1, num2), num3));
}

calculate(1, 17, 30)