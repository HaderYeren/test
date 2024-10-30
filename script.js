
import galleryItems from './gallery-items.js';

const galleryContainer = document.querySelector('.js-gallery');
const modal = document.querySelector('.js-lightbox');
const modalImage = document.querySelector('.lightbox__image');
const closeModalBtn = document.querySelector('[data-action="close-lightbox"]');
const overlay = document.querySelector('.lightbox__overlay');

const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                  <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                  />
                </a>
              </li>`;
    })
    .join('');
}

galleryContainer.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  modal.classList.add('is-open');
  modalImage.src = event.target.dataset.source;
  modalImage.alt = event.target.alt;
}

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

function closeModal() {
  modal.classList.remove('is-open');
  modalImage.src = '';
  modalImage.alt = '';
}

window.addEventListener('keydown', (event) => {
  if (event.code === 'Escape') {
    closeModal();
  }
});
