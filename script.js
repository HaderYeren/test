const API_KEY = '49546166-402fe78370a75dacf70cd060c';
const BASE_URL = 'https://pixabay.com/api/';
const IMAGES_PER_PAGE = 12;

let currentPage = 1;

async function fetchImages(page = 1) {
  try {
    const response = await fetch(`${BASE_URL}?key=${API_KEY}&page=${page}&per_page=${IMAGES_PER_PAGE}&order=latest&category=editorial`);
    const data = await response.json();

    if (data.hits && data.hits.length > 0) {
      displayImages(data.hits);
    } else {
      alert('Немає зображень для відображення');
    }
  } catch (error) {
    console.error('Помилка при отриманні зображень:', error);
  }
}

function displayImages(images) {
  const gallery = document.getElementById('image-gallery');
  images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.webformatURL;
    imgElement.alt = image.tags;
    gallery.appendChild(imgElement);
  });
}

document.getElementById('load-more-btn').addEventListener('click', () => {
  currentPage++;
  fetchImages(currentPage);
});

fetchImages(currentPage);
