// const input = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";

const regexAll = /mul\([0-9]{1,3},[0-9]{1,3}\)|do\(\)|don't\(\)/g;
const regexNums = /mul\((\d+),(\d+)\)/;


const input = require('fs').readFileSync('input.txt', 'utf8');

const allMatches = input.match(regexAll);

let score = 0;
let enabled = true;

for (let i = 0; i < allMatches.length; i++) {
  const match = allMatches[i];
  console.log(match);
  if (match === "do()") {
      enabled = true;
  }
  else if (match === "don't()") {
      enabled = false;
  }
  else {
    if (enabled){
      const nums = match.match(regexNums);
      const num1 = parseInt(nums[1]);
      const num2 = parseInt(nums[2]);
      score += num1 * num2;
    }
  }
}

console.log(score);