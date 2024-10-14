function smallestWord(sentence){
    const wordsArr=sentence.split(" ");
    let smallestWord=wordsArr[0];
    for(let i in wordsArr){
        if(wordsArr[i].length<smallestWord.length){
            smallestWord=wordsArr[i];
        }
    }
    return smallestWord;
}

console.log(smallestWord("I'm in love with javascript a"));