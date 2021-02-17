//link to kata: https://www.codewars.com/kata/525f50e3b73515a6db000b83

// my solution 

function createPhoneNumber(n) {
    return '(' + n[0] + n[1] + n[2] + ') ' + n[3] + n[4] + n[5] + '-' + n[6] + n[7] + n[8] + n[9]
}
module.exports = createPhoneNumber;

// best solution/practice

// function createPhoneNumber(numbers){
//     numbers = numbers.join('');
//     return '(' + numbers.substring(0, 3) + ') ' 
//         + numbers.substring(3, 6) 
//         + '-' 
//         + numbers.substring(6);
//   }

// What I learn from this kata?

// Nothing