function printCharactersInRange(char1, char2) {
  const chars = [];
  let c1 = char1.charCodeAt(0);
  let c2 = char2.charCodeAt(0);

  if(c1 < c2){
    getChars(c1, c2);
  }
  else {
    getChars(c2, c1);
  }
  
  console.log(chars.join(" "));
  
  function getChars(start, end) {
    for (let index = start + 1; index < end; index++) {
      chars.push(String.fromCharCode(index));
    }  
  }
}

printCharactersInRange("C", "#");
