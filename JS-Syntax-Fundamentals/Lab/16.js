function countRepetitions(sentence, word) {
    let words = sentence.split(' ');
    let counter = 0;

    for (let element of words) {
        if(element === word) {
            counter++;
        }
    }
    console.log(counter);
}

countRepetitions('softuni is great place for learning new programming languages','softuni');