const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
const bookingForm = document.querySelector("#booking-form");
const formMessage = document.querySelector(".form-message");
const testimonialSlides = document.querySelectorAll(".testimonial-slide");
const testimonialDots = document.querySelector(".testimonial-dots");
const previousTestimonial = document.querySelector(".testimonial-prev");
const nextTestimonial = document.querySelector(".testimonial-next");
let activeTestimonial = 0;
let testimonialTimer;

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

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(bookingForm);
  const message = [
    "Assalamu alaikum, I would like to book a mehndi session.",
    "",
    `Name: ${formData.get("name")}`,
    `Email: ${formData.get("email")}`,
    `Celebration type: ${formData.get("event")}`,
    `Preferred date: ${formData.get("date")}`,
    `Message: ${formData.get("message") || "Not added"}`,
  ].join("\n");

  formMessage.textContent = "Opening WhatsApp with your booking enquiry...";
  window.open(`https://wa.me/919923350240?text=${encodeURIComponent(message)}`, "_blank");
});

function showTestimonial(index) {
  activeTestimonial = (index + testimonialSlides.length) % testimonialSlides.length;

  testimonialSlides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === activeTestimonial);
  });

  testimonialDots.querySelectorAll("button").forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === activeTestimonial);
  });
}

function startTestimonialTimer() {
  clearInterval(testimonialTimer);
  testimonialTimer = setInterval(() => showTestimonial(activeTestimonial + 1), 5000);
}

testimonialSlides.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.setAttribute("aria-label", `Show testimonial ${index + 1}`);
  dot.addEventListener("click", () => {
    showTestimonial(index);
    startTestimonialTimer();
  });
  testimonialDots.appendChild(dot);
});

previousTestimonial.addEventListener("click", () => {
  showTestimonial(activeTestimonial - 1);
  startTestimonialTimer();
});

nextTestimonial.addEventListener("click", () => {
  showTestimonial(activeTestimonial + 1);
  startTestimonialTimer();
});

showTestimonial(0);
startTestimonialTimer();

document.querySelector("#year").textContent = new Date().getFullYear();

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
