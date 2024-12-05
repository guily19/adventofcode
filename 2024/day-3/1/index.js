const input = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";

const regexMul = /mul\([0-9]{1,3},[0-9]{1,3}\)/g;
const regexNums = /mul\((\d+),(\d+)\)/;


// const input = require('fs').readFileSync('input.txt', 'utf8');

const mulMatches = input.match(regexMul);
console.log(mulMatches);

let score = 0;

for (let i = 0; i < mulMatches.length; i++) {
    const match = mulMatches[i];
    const nums = match.match(regexNums);
    const num1 = parseInt(nums[1]);
    const num2 = parseInt(nums[2]);
    score += num1 * num2;
}

console.log(score);