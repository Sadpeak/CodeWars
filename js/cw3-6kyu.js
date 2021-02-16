// link to kata: https://www.codewars.com/kata/5552101f47fc5178b1000050

// My solution

function digPow(n, p) {

    let sum = 0;
    let i = 0;
    let tmp = Array.from(String(n), (item) => {
        sum += Math.pow(item, p + i);
        i++
    });


    return (Number.isInteger(sum / n)) ? sum / n : -1;
}
module.exports = digPow;
// best practice/solution

// function digPow(n, p) {
//     var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
//     return x % n ? -1 : x / n
// }

// What I learn from kata?

// idk