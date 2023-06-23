function buy(fruit, grams, price) {
    let kg = grams/1000;
    console.log(`I need $${(price * kg).toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`)
}

buy('orange', 2500, 1.80)

