function capitalize(word) {
    const capitalizedWord = word[0].toUpperCase() + word.slice(1);
    return capitalizedWord;
}

module.exports = capitalize;