const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
const filterButtons = document.querySelectorAll(".filter-button");
const galleryGrid = document.querySelector(".full-gallery-grid");
const visibleCount = document.querySelector("#visible-count");
let currentImages = [];
let currentLightboxIndex = 0;

const galleryImages = [
  { category: "arabic", src: "img/arabic/WhatsApp Image 2026-06-09 at 2.46.37 PM (1).jpeg" },
  { category: "arabic", src: "img/arabic/WhatsApp Image 2026-06-09 at 2.46.37 PM.jpeg" },
  { category: "arabic", src: "img/arabic/WhatsApp Image 2026-06-09 at 2.46.38 PM.jpeg" },
  { category: "bridal", src: "img/bridal/WhatsApp Image 2026-06-09 at 2.50.00 PM (1).jpeg" },
  { category: "bridal", src: "img/bridal/WhatsApp Image 2026-06-09 at 2.50.00 PM.jpeg" },
  { category: "bridal", src: "img/bridal/WhatsApp Image 2026-06-09 at 2.50.01 PM (1).jpeg" },
  { category: "bridal", src: "img/bridal/WhatsApp Image 2026-06-09 at 2.50.01 PM (2).jpeg" },
  { category: "bridal", src: "img/bridal/WhatsApp Image 2026-06-09 at 2.50.01 PM (3).jpeg" },
  { category: "bridal", src: "img/bridal/WhatsApp Image 2026-06-09 at 2.50.01 PM.jpeg" },
  { category: "bridal", src: "img/bridal/WhatsApp Image 2026-06-09 at 2.50.02 PM (1).jpeg" },
  { category: "bridal", src: "img/bridal/WhatsApp Image 2026-06-09 at 2.50.02 PM (2).jpeg" },
  { category: "bridal", src: "img/bridal/WhatsApp Image 2026-06-09 at 2.50.02 PM (3).jpeg" },
  { category: "bridal", src: "img/bridal/WhatsApp Image 2026-06-09 at 2.50.02 PM.jpeg" },
  { category: "bridal", src: "img/bridal/WhatsApp Image 2026-06-09 at 2.50.03 PM (1).jpeg" },
  { category: "bridal", src: "img/bridal/WhatsApp Image 2026-06-09 at 2.50.03 PM (2).jpeg" },
  { category: "bridal", src: "img/bridal/WhatsApp Image 2026-06-09 at 2.50.03 PM (3).jpeg" },
  { category: "bridal", src: "img/bridal/WhatsApp Image 2026-06-09 at 2.50.03 PM.jpeg" },
  { category: "bridal", src: "img/bridal/WhatsApp Image 2026-06-09 at 2.50.04 PM (1).jpeg" },
  { category: "bridal", src: "img/bridal/WhatsApp Image 2026-06-09 at 2.50.04 PM (2).jpeg" },
  { category: "bridal", src: "img/bridal/WhatsApp Image 2026-06-09 at 2.50.04 PM (3).jpeg" },
  { category: "bridal", src: "img/bridal/WhatsApp Image 2026-06-09 at 2.50.04 PM.jpeg" },
  { category: "bridal", src: "img/bridal/WhatsApp Image 2026-06-09 at 2.50.05 PM (1).jpeg" },
  { category: "bridal", src: "img/bridal/WhatsApp Image 2026-06-09 at 2.50.05 PM (2).jpeg" },
  { category: "bridal", src: "img/bridal/WhatsApp Image 2026-06-09 at 2.50.05 PM (3).jpeg" },
  { category: "bridal", src: "img/bridal/WhatsApp Image 2026-06-09 at 2.50.05 PM.jpeg" },
  { category: "bridal", src: "img/bridal/WhatsApp Image 2026-06-09 at 2.50.06 PM.jpeg" },
  { category: "engagement", src: "img/engagement/WhatsApp Image 2026-06-09 at 2.49.15 PM.jpeg" },
  { category: "engagement", src: "img/engagement/WhatsApp Image 2026-06-09 at 2.49.16 PM (1).jpeg" },
  { category: "engagement", src: "img/engagement/WhatsApp Image 2026-06-09 at 2.49.16 PM (2).jpeg" },
  { category: "engagement", src: "img/engagement/WhatsApp Image 2026-06-09 at 2.49.16 PM.jpeg" },
  { category: "engagement", src: "img/engagement/WhatsApp Image 2026-06-09 at 2.49.17 PM (1).jpeg" },
  { category: "engagement", src: "img/engagement/WhatsApp Image 2026-06-09 at 2.49.17 PM.jpeg" },
  { category: "gulf", src: "img/gulf/WhatsApp Image 2026-06-09 at 2.47.48 PM (1).jpeg" },
  { category: "gulf", src: "img/gulf/WhatsApp Image 2026-06-09 at 2.47.48 PM.jpeg" },
  { category: "gulf", src: "img/gulf/WhatsApp Image 2026-06-09 at 2.47.49 PM (1).jpeg" },
  { category: "gulf", src: "img/gulf/WhatsApp Image 2026-06-09 at 2.47.49 PM (2).jpeg" },
  { category: "gulf", src: "img/gulf/WhatsApp Image 2026-06-09 at 2.47.49 PM (3).jpeg" },
  { category: "gulf", src: "img/gulf/WhatsApp Image 2026-06-09 at 2.47.49 PM.jpeg" },
  { category: "gulf", src: "img/gulf/WhatsApp Image 2026-06-09 at 2.47.50 PM (1).jpeg" },
  { category: "gulf", src: "img/gulf/WhatsApp Image 2026-06-09 at 2.47.50 PM (2).jpeg" },
  { category: "gulf", src: "img/gulf/WhatsApp Image 2026-06-09 at 2.47.50 PM (3).jpeg" },
  { category: "gulf", src: "img/gulf/WhatsApp Image 2026-06-09 at 2.47.50 PM.jpeg" },
  { category: "gulf", src: "img/gulf/WhatsApp Image 2026-06-09 at 2.47.51 PM (1).jpeg" },
  { category: "gulf", src: "img/gulf/WhatsApp Image 2026-06-09 at 2.47.51 PM (2).jpeg" },
  { category: "gulf", src: "img/gulf/WhatsApp Image 2026-06-09 at 2.47.51 PM (3).jpeg" },
  { category: "gulf", src: "img/gulf/WhatsApp Image 2026-06-09 at 2.47.51 PM.jpeg" },
  { category: "gulf", src: "img/gulf/WhatsApp Image 2026-06-09 at 2.47.52 PM (1).jpeg" },
  { category: "gulf", src: "img/gulf/WhatsApp Image 2026-06-09 at 2.47.52 PM (2).jpeg" },
  { category: "gulf", src: "img/gulf/WhatsApp Image 2026-06-09 at 2.47.52 PM (3).jpeg" },
  { category: "gulf", src: "img/gulf/WhatsApp Image 2026-06-09 at 2.47.52 PM.jpeg" },
  { category: "gulf", src: "img/gulf/WhatsApp Image 2026-06-09 at 2.47.53 PM.jpeg" },
  { category: "party", src: "img/party/WhatsApp Image 2026-06-09 at 2.48.31 PM (1).jpeg" },
  { category: "party", src: "img/party/WhatsApp Image 2026-06-09 at 2.48.31 PM.jpeg" },
  { category: "party", src: "img/party/WhatsApp Image 2026-06-09 at 2.48.32 PM (1).jpeg" },
  { category: "party", src: "img/party/WhatsApp Image 2026-06-09 at 2.48.32 PM (2).jpeg" },
  { category: "party", src: "img/party/WhatsApp Image 2026-06-09 at 2.48.32 PM (3).jpeg" },
  { category: "party", src: "img/party/WhatsApp Image 2026-06-09 at 2.48.32 PM.jpeg" },
  { category: "party", src: "img/party/WhatsApp Image 2026-06-09 at 2.48.33 PM (1).jpeg" },
  { category: "party", src: "img/party/WhatsApp Image 2026-06-09 at 2.48.33 PM (2).jpeg" },
  { category: "party", src: "img/party/WhatsApp Image 2026-06-09 at 2.48.33 PM (3).jpeg" },
  { category: "party", src: "img/party/WhatsApp Image 2026-06-09 at 2.48.33 PM.jpeg" },
  { category: "party", src: "img/party/WhatsApp Image 2026-06-09 at 2.48.34 PM (1).jpeg" },
  { category: "party", src: "img/party/WhatsApp Image 2026-06-09 at 2.48.34 PM (2).jpeg" },
  { category: "party", src: "img/party/WhatsApp Image 2026-06-09 at 2.48.34 PM (3).jpeg" },
  { category: "party", src: "img/party/WhatsApp Image 2026-06-09 at 2.48.34 PM.jpeg" },
  { category: "party", src: "img/party/WhatsApp Image 2026-06-09 at 2.48.35 PM (1).jpeg" },
  { category: "party", src: "img/party/WhatsApp Image 2026-06-09 at 2.48.35 PM (2).jpeg" },
  { category: "party", src: "img/party/WhatsApp Image 2026-06-09 at 2.48.35 PM.jpeg" },
  { category: "party", src: "img/party/WhatsApp Image 2026-06-09 at 2.48.36 PM (1).jpeg" },
  { category: "party", src: "img/party/WhatsApp Image 2026-06-09 at 2.48.36 PM (2).jpeg" },
  { category: "party", src: "img/party/WhatsApp Image 2026-06-09 at 2.48.36 PM.jpeg" },
];

const categoryLabels = {
  arabic: "Arabic",
  bridal: "Bridal",
  engagement: "Engagement",
  gulf: "Gulf",
  party: "Party",
};

const whatsappNumber = "919923350240";

function getDesignName(image, index) {
  return `${categoryLabels[image.category]} design ${index + 1}`;
}

function getDesignBookingLink(designName) {
  const message = `Heyy, I am interested in this "${designName}"`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function getAbsoluteImageUrl(src) {
  return new URL(src, window.location.href).href;
}

function contactForDesign(index) {
  const image = currentImages[index];
  const designName = getDesignName(image, index);
  const message = [
    `Heyy, I am interested in this "${designName}".`,
    `Design image: ${getAbsoluteImageUrl(image.src)}`,
  ].join("\n");

  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
}

function renderGallery(selectedCategory = "all") {
  currentImages = galleryImages.filter(
    (image) => selectedCategory === "all" || image.category === selectedCategory
  );

  galleryGrid.innerHTML = currentImages
    .map((image, index) => {
      const designName = getDesignName(image, index);

      return `
        <article class="gallery-item" data-category="${image.category}" data-index="${index}" tabindex="0">
          <img src="${image.src}" alt="${designName}" loading="lazy" />
          <div>
            <span>${categoryLabels[image.category]}</span>
            <h3>${designName}</h3>
            <button class="gallery-book-button" type="button" data-index="${index}">
              Send this design
            </button>
          </div>
        </article>
      `;
    })
    .join("");

  visibleCount.textContent = currentImages.length;
}

function createLightbox() {
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML = `
    <button class="lightbox-close" type="button" aria-label="Close gallery image">&times;</button>
    <button class="lightbox-arrow lightbox-prev" type="button" aria-label="Previous image">&larr;</button>
    <figure class="lightbox-frame">
      <img src="" alt="" />
      <figcaption></figcaption>
    </figure>
    <button class="lightbox-arrow lightbox-next" type="button" aria-label="Next image">&rarr;</button>
  `;
  document.body.appendChild(lightbox);
  return lightbox;
}

const lightbox = createLightbox();
const lightboxImage = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector("figcaption");
const closeLightboxButton = lightbox.querySelector(".lightbox-close");
const previousLightboxButton = lightbox.querySelector(".lightbox-prev");
const nextLightboxButton = lightbox.querySelector(".lightbox-next");

function openLightbox(index) {
  currentLightboxIndex = index;
  const image = currentImages[currentLightboxIndex];

  lightboxImage.src = image.src;
  lightboxImage.alt = getDesignName(image, currentLightboxIndex);
  lightboxCaption.textContent = getDesignName(image, currentLightboxIndex);
  lightbox.classList.add("open");
  document.body.classList.add("no-scroll");
}

function closeLightbox() {
  lightbox.classList.remove("open");
  document.body.classList.remove("no-scroll");
}

function moveLightbox(direction) {
  const nextIndex = currentLightboxIndex + direction;
  openLightbox((nextIndex + currentImages.length) % currentImages.length);
}

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 24);
});

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderGallery(button.dataset.filter);
  });
});

galleryGrid.addEventListener("click", (event) => {
  const shareButton = event.target.closest(".gallery-book-button");
  if (shareButton) {
    event.stopPropagation();
    contactForDesign(Number(shareButton.dataset.index));
    return;
  }

  const item = event.target.closest(".gallery-item");
  if (!item) return;
  openLightbox(Number(item.dataset.index));
});

galleryGrid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  if (event.target.closest(".gallery-book-button")) return;

  const item = event.target.closest(".gallery-item");
  if (!item) return;
  event.preventDefault();
  openLightbox(Number(item.dataset.index));
});

closeLightboxButton.addEventListener("click", closeLightbox);
previousLightboxButton.addEventListener("click", () => moveLightbox(-1));
nextLightboxButton.addEventListener("click", () => moveLightbox(1));

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (!lightbox.classList.contains("open")) return;

  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") moveLightbox(-1);
  if (event.key === "ArrowRight") moveLightbox(1);
});

renderGallery();
document.querySelector("#year").textContent = new Date().getFullYear();
