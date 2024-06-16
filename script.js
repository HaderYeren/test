let numbers = [1, 2, 3];
numbers[1] = 10;
console.log(numbers); // [1, 10, 3]

let strings = ["apple", "banana", "cherry"];
strings.push("date");
console.log(strings); // ["apple", "banana", "cherry", "date"]

let numArray = [1, 2, 3, 4, 5];
let sum = numArray.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

let fiveNumbers = [10, 20, 30, 40, 50];
for (let i = 0; i < fiveNumbers.length; i++) {
    console.log(fiveNumbers[i]);
}

let fiveStrings = ["apple", "banana", "cherry", "date", "elderberry"];
for (let i = 0; i < fiveStrings.length; i++) {
    if (fiveStrings[i].length > 5) {
        console.log(fiveStrings[i]);
    }
}

let tenNumbers = [10, 20, 3, 40, 5, 60, 7, 80, 9, 100];
let maxNumber = Math.max(...tenNumbers);
console.log(maxNumber); // 100

let tenNums = [10, 21, 32, 43, 54, 65, 76, 87, 98, 109];
for (let i = 0; i < tenNums.length; i++) {
    if (tenNums[i] % 2 === 0) {
        console.log(tenNums[i]);
    }
}

