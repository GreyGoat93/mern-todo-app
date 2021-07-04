const findWords = (sentence) => {
    // Initial arrays.
    const spaceIndexes = [0];
    const words = [];

    // For finding spaces.
    for(let i = 0; i < sentence.length; i++){
        sentence[i] === " " && spaceIndexes.push(i);
    }
    spaceIndexes.push(sentence.length);

    // For finding words.
    for(let i = 0; i < spaceIndexes.length - 1; i++){
        let word = "";
        for(let j = spaceIndexes[i]; j < spaceIndexes[i+1]; j++){
            sentence[j] !== " " && (word += sentence[j]);
        }
        words.push(word);
    }

    return words;
}

const reverseWords = (sentence) => {
    // Init new sentence and find the words.
    let _sentence = "";
    let words = findWords(sentence);

    // Reversing words here.
    for(let i = words.length - 1; i >= 0; i--){
        _sentence += i !== 0 ? `${words[i]} ` : words[i];
    }
    
    return _sentence;
}