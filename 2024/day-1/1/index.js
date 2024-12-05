
// read input file
const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').split('\n');

const column1 = [];
const column2 = [];
for (let i = 0; i < input.length; i++) {
    const line = input[i];
    column1.push(line.split('   ')[0]);
    column2.push(line.split('   ')[1]);
}
column1.sort();
column2.sort();
let totalDistance = 0;
for (let i = 0; i < column1.length; i++) {
    totalDistance += Math.abs(column1[i] - column2[i]);
}
console.log("total distance", totalDistance);