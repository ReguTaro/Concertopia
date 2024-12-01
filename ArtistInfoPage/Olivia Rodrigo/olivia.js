function goToHome() {
  window.location.href = "home.html";
}
 
// Elements
const sliderImages = document.querySelector(".slider-images");
const images = document.querySelectorAll(".slider-images img");
const dots = document.querySelectorAll(".dot");
 
let currentIndex = 0;
 
// Update slider position and active dot
function updateSlider(index) {
  const sliderWidth = document.querySelector(".slider-container").clientWidth;
  sliderImages.style.transform = `translateX(-${index * sliderWidth}px)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}
 
// Auto-slide function
function autoSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider(currentIndex);
}
 
// Auto-slide every 3 seconds
const interval = setInterval(autoSlide, 3000);
 
// Dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    clearInterval(interval); // Stop auto-slide when user interacts
    currentIndex = index;
    updateSlider(index);
  });
});
 
// Handle window resize for responsive design
window.addEventListener("resize", () => updateSlider(currentIndex));
