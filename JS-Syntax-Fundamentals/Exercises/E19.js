function findSubstring(searchedWord, text){

    let words = text.split(' ');
    let isWordFound = false;

    for (let word of words) {

        if (word.toLowerCase() === searchedWord.toLowerCase()) {

            isWordFound = true;
            break;

        }
    }

    if (isWordFound) {

        console.log(searchedWord);

    } else {

        console.log(`${searchedWord} not found!`)

    }

}

findSubstring('javascript', 'The Best programming language is JavaScript');