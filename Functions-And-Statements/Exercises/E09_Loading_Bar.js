function loadingBar(percentage) {
  // Solution 1
  //   let bar = [];

  //   for (let i = 10; i <= 100; i += 10) {
  //     if (i <= percentage) {
  //       bar.push("%");
  //     } else {
  //       bar.push(".");
  //     }
  //   }
  //
  //   console.log(
  //     percentage === 100
  //       ? `100%Complete\n[${bar.join("")}]`
  //       : `${percentage}% [${bar.join("")}]\nStill loading...`
  //   );

  //Solution 2

  const percentageNumber = percentage / 10;
  const bar = "%".repeat(percentageNumber) + ".".repeat(10 - percentageNumber);

  console.log(
    percentage === 100
      ? `100%Complete\n[${bar}]`
      : `${percentage}% [${bar}]\nStill loading...`
  );
}

loadingBar(30);
