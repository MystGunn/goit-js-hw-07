import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);


const listEl = document.querySelector(".gallery");

galleryItems.forEach( item => {
    const listItem = document.createElement('li');
    listItem.classList.add('gallery__item');
    listItem.innerHTML = `
    <a class='gallery__link' href='${item.original}'>
    <img class="gallery__image"
    src='${item.preview}'
    data-source='${item.original}'
    alt='${item.description}'/>
    </a>
    `;
listEl.append(listItem);
})

listEl.addEventListener('click', openImageInModal)

function openImageInModal(event) {
    const clickedOn = event.target;

    if (clickedOn.nodeName !== 'IMG') {
        return;
    }
    event.preventDefault();
    basicLightbox.create(
    `
		<img width="1400" height="900" src="${clickedOn.dataset.source}">
	`
)

.show()
}
