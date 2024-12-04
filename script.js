
function loadImage(image) {
  const src = image.getAttribute('data-src');
  if (!src) return;
  
  image.src = src;
  image.onload = () => image.classList.add('loaded');
}
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadImage(entry.target);
      observer.unobserve(entry.target);
    }
  });
});
const images = document.querySelectorAll('img[data-src]');
images.forEach(image => observer.observe(image));
document.getElementById('load-button').addEventListener('click', () => {
  images.forEach(image => {
    loadImage(image);
    observer.unobserve(image);
  });
});
