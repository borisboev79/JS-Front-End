function reveal(words, text) {
  const wordArr = words.split(", ");

  let replacedText = text;

  for (const word of wordArr) {
    let temp = "*".repeat(word.length);
    replacedText = replacedText.replace(temp, word);
  }

  console.log(replacedText);
}

reveal(
    'great, learning, languages', 
'softuni is ***** place for ******** new programming *********'

);
