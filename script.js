import fetchCountries from './fetchCountries.js';
const searchInput = document.getElementById('search');
const notification = document.getElementById('notification');
const countryList = document.getElementById('country-list');
const countryInfo = document.getElementById('country-info');


const debounceSearch = _.debounce((searchQuery) => {
  console.log('Поисковый запрос:', searchQuery);

  if (!searchQuery) {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
    notification.innerHTML = '';
    return;
  }

  fetchCountries(searchQuery)
    .then(countries => {
      console.log('Страны, полученные от API:', countries);

      if (countries && countries.length > 10) {
        notification.innerHTML = 'Найдено слишком много стран, уточните запрос.';
        countryList.innerHTML = '';
        countryInfo.innerHTML = '';
      } else if (countries && countries.length > 1 && countries.length <= 10) {
        notification.innerHTML = '';
        countryList.innerHTML = countries.map(country => `<li>${country.name.common}</li>`).join('');
        countryInfo.innerHTML = '';
      } else if (countries && countries.length === 1) {
        notification.innerHTML = '';
        countryList.innerHTML = '';
        const country = countries[0];
        countryInfo.innerHTML = `
          <h2>${country.name.common}</h2>
          <p>Столица: ${country.capital}</p>
          <p>Население: ${country.population}</p>
          <p>Языки: ${Object.values(country.languages).join(', ')}</p>
          <img src="${country.flags[0]}" alt="${country.name.common} flag" width="100">
        `;
      }
    })
    .catch(error => {
      notification.innerHTML = 'Ошибка при получении данных. Попробуйте снова позже.';
      countryList.innerHTML = '';
      countryInfo.innerHTML = '';
      console.error('Ошибка при fetch запросе:', error);
    });
}, 500);

searchInput.addEventListener('input', (event) => {
  const searchQuery = event.target.value;
  debounceSearch(searchQuery);
});

countryList.addEventListener('click', (event) => {
  const countryName = event.target.textContent;
  searchInput.value = countryName;
  debounceSearch(countryName);
});
