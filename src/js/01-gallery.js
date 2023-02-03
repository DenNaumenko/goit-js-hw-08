// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');
const arrayImages = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>`;
  })
  .join('');

gallery.insertAdjacentHTML('beforeend', arrayImages);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});