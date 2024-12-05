
const input = require('fs').readFileSync('input.txt', 'utf8').split('\n');

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

const calculateDirection = (line) => {
  const steps = line.split(' ');
  const first = Number(steps[0]);
  const second = Number(steps[1]);
  if (first > second){
    return 'decreasing';
  }
  return 'increasing';
}

const isLineSafe = (steps, direction) => {
  for (let i = 0; i < steps.length - 1; i++) {
    if (!isSafeStep([steps[i], steps[i + 1]], direction)){
      return false;
    }
  }
  return true;
}

const splitLine = (steps) => {
  const newLines = [];
  for (let i = 0; i < steps.length; ++i) {
    const newSteps = [...steps];
    newSteps.splice(i, 1)
    newLines.push(newSteps);
  }
  return newLines;
}

for (let i = 0; i < input.length; i++) {
  const line = input[i];
  const direction = calculateDirection(line);
  const steps = line.split(' ');
  if (isLineSafe(steps, direction)){
    ++safeScore;
  }
  else {
    const newLines = splitLine(steps);
    for (let j = 0; j < newLines.length; j++) {
      let newDirection = calculateDirection(newLines[j].join(' '));
      if (isLineSafe(newLines[j], newDirection)){
        ++safeScore;
        break;
      }
    }
  }
}

console.log(safeScore);