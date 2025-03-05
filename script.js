
const delayedPromise = (value, delay) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
};

const promises = [
  delayedPromise('Проміс 1', 3000),
  delayedPromise('Проміс 2', 1000),
  delayedPromise('Проміс 3', 2000),
  delayedPromise('Проміс 4', 4000),
  delayedPromise('Проміс 5', 500)
];

const randomDelay = (value) => {
  const delay = Math.floor(Math.random() * 4000) + 1000;
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`${value} виконано за ${delay} мс`);
    }, delay);
  });
};

const racePromises = [
  randomDelay('Проміс 1'),
  randomDelay('Проміс 2'),
  randomDelay('Проміс 3'),
  randomDelay('Проміс 4'),
  randomDelay('Проміс 5')
];
document.getElementById('runAllPromises').addEventListener('click', () => {
  Promise.all(promises)
    .then(results => {
      const resultDiv = document.getElementById('allPromisesResult');
      resultDiv.innerHTML = `<h3>Результати всіх промісів:</h3><ul>${results.map(result => `<li>${result}</li>`).join('')}</ul>`;
    })
    .catch(error => {
      console.log('Помилка при виконанні промісів:', error);
    });
});
document.getElementById('runRace').addEventListener('click', () => {
  Promise.race(racePromises)
    .then(result => {
      const raceResultDiv = document.getElementById('raceResult');
      raceResultDiv.innerHTML = `<h3>Найшвидший проміс:</h3><p>${result}</p>`;
    })
    .catch(error => {
      console.log('Помилка при виконанні промісу:', error);
    });
});
