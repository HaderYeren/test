
let bankAccount = {
    ownerName: "John Doe",
    accountNumber: "1234567890",
    balance: 1000,
    deposit: function(amount) {
        this.balance += amount;
        alert(`Залишок на рахунку: ${this.balance}`);
        document.getElementById('balance').innerText = this.balance;
    },
    withdraw: function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            alert(`Залишок на рахунку: ${this.balance}`);
        } else {
            alert('Недостатньо коштів');
        }
        document.getElementById('balance').innerText = this.balance;
    }
};

document.getElementById('ownerName').innerText = bankAccount.ownerName;
document.getElementById('accountNumber').innerText = bankAccount.accountNumber;
document.getElementById('balance').innerText = bankAccount.balance;

function deposit() {
    let amount = parseFloat(prompt("Введіть суму для поповнення:"));
    bankAccount.deposit(amount);
}

function withdraw() {
    let amount = parseFloat(prompt("Введіть суму для зняття:"));
    bankAccount.withdraw(amount);
}

let weather = {
    temperature: 0,
    humidity: 50,
    windSpeed: 10,
    isBelowZero: function() {
        return this.temperature < 0;
    }
};

function checkTemperature() {
    let tempInput = document.getElementById('temperature').value;
    weather.temperature = parseFloat(tempInput);
    let message = weather.isBelowZero() ? "Температура нижче 0 градусів Цельсія" : "Температура вище або рівна 0 градусів Цельсія";
    document.getElementById('weatherMessage').innerText = message;
}

let user = {
    name: "",
    email: "",
    password: "",
    login: function(email, password) {
        return this.email === email && this.password === password;
    }
};

function login() {
    let emailInput = document.getElementById('email').value;
    let passwordInput = document.getElementById('password').value;
    let message = user.login(emailInput, passwordInput) ? "Login Successful" : "Invalid Email or Password";
    document.getElementById('loginMessage').innerText = message;
}

let movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,
    isHighRated: function() {
        return this.rating > 8;
    }
};

document.getElementById('title').innerText = movie.title;
document.getElementById('director').innerText = movie.director;
document.getElementById('year').innerText = movie.year;
document.getElementById('rating').innerText = movie.rating;

function checkRating() {
    if (movie.isHighRated()) {
        document.getElementById('title').style.color = "green";
    } else {
        document.getElementById('title').style.color = "black";
    }
}
