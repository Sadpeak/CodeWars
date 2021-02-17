// linki to kata: https://www.codewars.com/kata/546f922b54af40e1e90001da/


// My solution

function alphabetPosition(text) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''),
        newText = '';
    let tmp = Array.from(text, (char) => (alphabet.indexOf(char.toLowerCase()) + 1) ? (newText += ' ' + (alphabet.indexOf(char.toLowerCase()) + 1)) : (newText += ''));
    return newText.substring(1);
}
module.exports = alphabetPosition;

// Best solution/practice

// function alphabetPosition(text) {
//     return text
//         .toUpperCase()
//         .match(/[a-z]/gi)
//         .map((c) => c.charCodeAt() - 64)
//         .join(' ');
// }