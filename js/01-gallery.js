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
    const instance = basicLightbox.create(
    `
		<img width="1400" height="900" src="${clickedOn.dataset.source}">
	`
)

instance.show()

document.addEventListener('keydown', function onKeyPress(event) {
    if (event.key === 'Escape') {
        instance.close();
        document.removeEventListener('keydown', onKeyPress);
    }
});
setTimeout(() => {
    instance.close((instance) => console.log('finished close()', instance));
}, 3000);
}
