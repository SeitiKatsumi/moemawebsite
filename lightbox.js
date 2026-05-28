const lightbox = document.createElement("div");
lightbox.className = "image-lightbox";
lightbox.innerHTML = `
  <button class="lightbox-close" type="button" aria-label="Fechar imagem">×</button>
  <img alt="" />
  <span></span>
`;
document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector("span");

const openLightbox = (image) => {
  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt || "";
  lightboxCaption.textContent = image.closest("article")?.querySelector("span, h3")?.textContent || image.alt || "";
  lightbox.classList.add("open");
  document.body.classList.add("lightbox-open");
};

const closeLightbox = () => {
  lightbox.classList.remove("open");
  document.body.classList.remove("lightbox-open");
  lightboxImage.removeAttribute("src");
};

document.addEventListener("click", (event) => {
  const image = event.target.closest(".slider-slide img, .case-strip img, .hero-showcase-image, .equipment-card img");
  if (image) {
    openLightbox(image);
    return;
  }

  if (event.target === lightbox || event.target.closest(".lightbox-close")) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});
