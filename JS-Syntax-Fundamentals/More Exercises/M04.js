function calculateExpenses(lostCount, helmet, sword, shield, armor) {
  let isHelmetBroken = false;
  let isSwordBroken = false;
  let brokenShieldCounter = 0;
  let sum = 0;

  for (let index = 1; index <= lostCount; index++) {
    if (index % 2 === 0) {
      isHelmetBroken = true;
      sum += helmet;
    }

    if (index % 3 === 0) {
      isSwordBroken = true;
      sum += sword;
    }

    if (isHelmetBroken && isSwordBroken) {
      brokenShieldCounter++;
      sum += shield;
    }

    if (brokenShieldCounter === 2) {
      sum += armor;
      brokenShieldCounter = 0;
    }

    isHelmetBroken = false;
    isSwordBroken = false;
  }

  console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}

calculateExpenses(23, 12.5, 21.5, 40, 200);
