
const input = require('fs').readFileSync('input.txt', 'utf8').split('\n');

const column1 = [];
const column2 = [];
for (let i = 0; i < input.length; i++) {
    const line = input[i];
    column1.push(line.split('   ')[0]);
    column2.push(line.split('   ')[1]);
}
column1.sort();
column2.sort();

let score = 0;
for (let i = 0; i < column1.length; i++) {
    const value = column1[i];
    // number of appearances of value in column2
    const appearances = column2.filter(v => v === value).length;
    score += appearances * value;
}
console.log("score", score);