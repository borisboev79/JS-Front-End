function spiceYield(startYield) {
  let totalSpice = 0;
  let days = 0;
  let remainingYield = startYield;

  while (remainingYield >= 100) {
    totalSpice += remainingYield;

    if (totalSpice >= 26) {
      totalSpice -= 26;
    }

    days++;
    remainingYield -= 10;
  }

  if (totalSpice - 26 > 0) {
    totalSpice -= 26;
  }

  console.log(days);
  console.log(totalSpice);
}

spiceYield(100);
