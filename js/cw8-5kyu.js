/*// link to Kata: https://www.codewars.com/kata/55c6126177c9441a570000cc
'use strict'

// My solution


function orderWeight(strng) {
    let tmp = [];
    let tmp2 = {};
    let smth = strng.split(' ').forEach((item, x) => {

        // console.log(item.split('').reduce((a, b) => {
        //     // console.log('a is: ', a, 'b is: ', b)
        //     return Number(a) + Number(b);
        // }))
        tmp[x] = item.split('').reduce((a, b) => {
            // console.log('a is: ', a, 'b is: ', b)
            return Number(a) + Number(b);
        })
        tmp2[item] = tmp[x]


    });



    return tmp2;
}

const maxSpeed = {
    '99': 18,
    '103': 4,
    '123': 6,
    '2000': 2,
    '4444': 16
};

const sortable = Object.fromEntries(
    Object.entries(maxSpeed).sort()
);

console.log(sortable);

console.log(orderWeight("103 123 4444 99 2000"))

module.exports = orderWeight;

// best solution/practice


// What I learn from this kata?

/*



*/

function sumOfParts(num) {
    return num.split('').reduce((a, b) => a + +b, 0)
}

function orderWeight(string) {
    return string
        .split(' ')
        .sort((a, b) => sumOfParts(a) - sumOfParts(b) || a > b || -(a < b))
        .join(' ');
}

module.exports = orderWeight;