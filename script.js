// Завдання
document.getElementById('helloButton').addEventListener('click', () => {
    alert('Hello World!');
});

// Завданн
const randomNumber = Math.floor(Math.random() * 100) + 1;
document.getElementById('checkGuessButton').addEventListener('click', () => {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const resultElement = document.getElementById('guessResult');
    if (userGuess === randomNumber) {
        resultElement.textContent = 'Ви вгадали число!';
    } else {
        resultElement.textContent = 'Спробуйте ще раз!';
    }
});

// Завдання
let clickCount = 0;
document.addEventListener('click', () => {
    clickCount++;
    document.getElementById('clickCount').textContent = clickCount;
});

// Завдання
const applyCallbackToArray = (arr, callback) => arr.map(callback);

// Завдання
const calculateDiscountPrice = (price, discount, callback) => {
    const discountPrice = price - (price * (discount / 100));
    return callback(discountPrice);
};