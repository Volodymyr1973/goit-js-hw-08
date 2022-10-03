// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
console.log(SimpleLightbox);
console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const markup = galleryItems.reduce(
  (acc, item) =>
    acc +
    `<li class="gallery__items"> 
    <a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" title='${item.description}'/>
</a>
</li>`,
  ''
);

galleryEl.innerHTML = markup;

function onClick(event) {
  event.preventDefault();
}

galleryEl.addEventListener('click', onClick);

var lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionType: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  enableKeyboard: true,
  heightRatio: 0.9,
});
