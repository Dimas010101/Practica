let caracter = "#";
const count = 8;
let rows = [];

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + caracter.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
    rows.push(padRow(i, count));
}

let result = "";
for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);

let inverted = true;

for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    } else {
        rows.push(padRow(i, count));
    }
}

let invertedResult = "";
for (const row of rows) {
    invertedResult = invertedResult + "\n" + row;
}

console.log(invertedResult);

let done = 0;
while (done < count) {
    done++;
    rows.push(padRow(done, count));
}

let finalResult = "";
for (const row of rows) {
    finalResult = finalResult + "\n" + row;
}

console.log(finalResult);

let secondCharacter = "Prueba";
console.log(secondCharacter);

rows = [];
rows.push("Paris");
console.log(rows);

let popped = rows.pop();
console.log(popped);
console.log(rows);

rows.push(caracter.repeat(3));
console.log(rows);
