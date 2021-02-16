// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// My solution 
const test = require('assert').strict;

function filter_list(l) {
    let outputArr = [];
    for (let i = 0; i < l.length; i++)
        if (typeof l[i] == 'number')
            outputArr.push(l[i])
    return outputArr;
}

// best solution

// function filter_list(l) {
//     return l.filter(v => typeof v == "number")
// };

module.exports = filter_list;
