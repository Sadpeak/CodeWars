// Kata description.


// My Solution

function getCount(str) {
    var vowelsCount = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for (const [key, value] of Object.entries(str.split('')))
        if (vowels.includes(value))
            vowelsCount++

    return vowelsCount;
}
console.log(getCount('vijqjkdfgqivmowiht'))
module.exports = getCount;
// Best practice/solution

// function getCount(str) {
//     return (str.match(/[aeiou]/ig)||[]).length;
//   }


// What i Learn from this kata?

// - convert object to array