function digGold(gold) {
  const bitcoinPrice = 11949.16;
  const goldPrice = 67.51;
  let totalMoney = 0;
  let totalBitcoin = 0;
  let firstBitcoinDay = 0;

  for (let index = 0; index < gold.length; index++) {
    if ((index + 1) % 3 !== 0) {
      totalMoney += gold[index] * goldPrice;
    } else {
      totalMoney += gold[index] * 0.7 * goldPrice;
    }

    while (totalMoney >= bitcoinPrice) {
      totalBitcoin++;
      totalMoney -= bitcoinPrice;

      if (firstBitcoinDay === 0) {
        firstBitcoinDay = index + 1;
      }
    }
  }

  console.log(`Bought bitcoins: ${totalBitcoin}`);
  
  if (firstBitcoinDay !== 0) {
    console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
  }

  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

digGold([3124.15, 504.212, 2511.124]);
