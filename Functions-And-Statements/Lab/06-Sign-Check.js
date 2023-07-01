function signCheck(...numbers) {
  
   let sumNegative = 0;

   numbers.forEach(element => {if (element < 0) sumNegative++ });


  console.log(sumNegative % 2 !== 0 ? "Negative" : "Positive" );
}

signCheck(-1, -2, -3, -4);
