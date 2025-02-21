const caesarUppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const caesarLowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz'

function caesarCipher(string, shift) {
    let newString = '';
    for (let index = 0; index < string.length; index++) {
        const characterCode = string.codePointAt(index);
        if (characterCode >= 97 && characterCode <= 122) {
            let offset = ((characterCode - 97) + shift) % 26;
            newString += caesarLowercaseAlphabet[offset];
        } else if (characterCode >= 65 && characterCode <= 90) {
            let offset = ((characterCode - 65) + shift) % 26;
            newString += caesarUppercaseAlphabet[offset];
        } else {
            newString += string[index];
        }
    }
    return newString;
}

module.exports = caesarCipher;