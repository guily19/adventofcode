
const input = require('fs').readFileSync('input.txt', 'utf8').split('\n');
// const input = ["14 11 8 7 6" ]

let safeScore = 0;

const isSafeStep = (step, direction) => {
  const first = Number(step[0]);
  const second = Number(step[1]);
  if (first > second && first - second <= 3 && first - second > 0){
    return direction === 'decreasing';
  }
  if (second > first && second - first <= 3 && second - first > 0){
    return direction === 'increasing';
  }
  return false;
}

const isLineSafe = (line, direction) => {
  const steps = line.split(' ');
  for (let i = 0; i < steps.length - 1; i++) {
    if (!isSafeStep([steps[i], steps[i + 1]], direction)){
      return false;
    }
  }
  return true;
}

for (let i = 0; i < input.length; i++) {
    const lineNumbers = input[i].split(' ');
    const number1 = parseInt(lineNumbers[0]);
    const number2 = parseInt(lineNumbers[1]);
    if (number1 > number2){
      if (isLineSafe(input[i], 'decreasing')){
        ++safeScore;
      }
    } else {
      if (isLineSafe(input[i], 'increasing')){
        ++safeScore;
      }
    }
}

console.log(safeScore);