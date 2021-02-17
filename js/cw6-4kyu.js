// link to kata: https://www.codewars.com/kata/51e056fe544cf36c410000fb
let _ = require('lodash')

function topThreeWords(text) {
    let newText = ''
    newText.replace(/[^A-Za-z'\s]/g, '');
    newText = text.split(' ')

    let lm = _.countBy(newText)
    let lg = Object.fromEntries(Object.entries(lm).sort(([, a], [, b]) => a - b));
    delete lg['']
    // const sortObject = o => Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {})
    // console.log(lg);
    // console.log(lg[Object.keys(lg)[Object.keys(lg).length - 1]])
    // for (const [key, value] of Object.entries(lg)) {
    //     console.log(`${key}: ${value}`);
    // }
    // console.log(Object.keys(lg)[Object.keys(lg).length - 1]);
    let res = [];
    res.length = 0
    for (let i = 1; i < 4; i++) {
        res.push(Object.keys(lg)[Object.keys(lg).length - i])

    }

    // console.log(res)
    return res;
}
// console.log(topThreeWords("a a c b b"))
// console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"));
// topThreeWords("a a a  b  c c  d d d d  e e e e e"); //['e','d','a'])
console.log(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income.`))
module.exports = topThreeWords;


// wut the buullshit...