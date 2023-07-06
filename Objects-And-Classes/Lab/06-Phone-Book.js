function addToPhonebook(input) {
//Solution 1
    //   let phoneBook = {};

//   for (const element of input) {
//     const tuple = element.split(" ");
//     let name = tuple[0];
//     let number = tuple[1];

//     phoneBook[name] = number;
//   }

//   for (const key in phoneBook) {
//     console.log(`${key} -> ${phoneBook[key]}`);
//   }

//Solution 2
    const phoneObj = input.reduce((acc, curr) => {
        const [name, phone] = curr.split(' ');
        acc[name] = phone;

        return acc;
    }, {});

    Object.keys(phoneObj).forEach(key => {
        console.log(`${key} -> ${phoneObj[key]}`);
    })

    
}

addToPhonebook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
