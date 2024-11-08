let rows = []; 

const caracter = "#"; 
const count = 8; 

for (let i = 0; i < count; i++) {
    rows.push(i); 
}

let result = ""; 

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);

function padRow(name) {
  return name;
}

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

for (let i = 0; i < count; i = i + 1) {
    rows.push(padRow(i + 1, count));
}

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + caracter.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 0; i < count; i = i + 1) {
    rows.push(padRow(i + 1, count));
}

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);

for (let i = 1; i <= count; i++) {
    rows.push(padRow(i, count));
}

let inverted = true;

for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    } else {
        rows.push(padRow(i, count));
    }
}
