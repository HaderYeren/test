export default function fetchCountries(searchQuery) {
    console.log(`Запрос к API с поисковым запросом: ${searchQuery}`);
  
    return fetch(`https://restcountries.com/v3.1/name/${searchQuery}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Что-то пошло не так с запросом');
        }
        return response.json();
      })
      .then(data => {
        console.log('Данные, полученные от API:', data);
        return data;
      })
      .catch(error => {
        console.error('Ошибка:', error);
        throw error;
      });
  }
  