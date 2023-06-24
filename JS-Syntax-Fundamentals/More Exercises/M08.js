function buildPyramid(base, increment) {
  let stone = 0;
  let marble = 0;
  let lapisLazuli = 0;
  let gold = 0;
  let floors = 1;

  while (base - 2 > 0) {
    let totalBlocks = base ** 2;
    let innerBlocks = (base - 2) ** 2;
    let outerBlocks = totalBlocks - innerBlocks;

    stone += innerBlocks;
    
    if (floors % 5 !== 0) {
      marble += outerBlocks;
    } else {
      lapisLazuli += outerBlocks;
    }

    floors++;
    base -= 2;
    
  }

  gold += base ** 2;

  console.log(`Stone required: ${Math.ceil(stone * increment)}`);
  console.log(`Marble required: ${Math.ceil(marble * increment)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli * increment)}`);
  console.log(`Gold required: ${Math.ceil(gold * increment)}`);
  console.log(`Final pyramid height: ${Math.floor(floors * increment)}`);
}

buildPyramid(23, 0.5);
