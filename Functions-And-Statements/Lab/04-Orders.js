function order(drink, quantity) {
   
    const calculator = {
        coffee: (x) => x * 1.50,
        water: (x) => x * 1.00,
        coke: (x) => x * 1.40,
        snacks: (x) => x * 2.00
    }

    return (calculator[drink](quantity)).toFixed(2);
}

console.log(order("water", 5))