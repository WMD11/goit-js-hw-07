import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const galleryListItem = document.createElement("li"); 
  galleryListItem.classList.add("gallery__item"); 
  
  galleryListItem.innerHTML = `
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>`;
  galleryContainer.append(galleryListItem); 
});

galleryContainer.addEventListener("click", preventDefaultClick);

function preventDefaultClick(e) {
  e.preventDefault();
}


const galleryLightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt", 
  captionDelay: 250, 
});

console.log(galleryLightbox);