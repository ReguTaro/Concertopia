function goToHome() {
    window.location.href = "Home.html";
}
const images = document.querySelectorAll(".slider-images img");
    const dots = document.querySelectorAll(".dot");
    const sliderImages = document.querySelector(".slider-images");
    let currentIndex = 0;

    function updateSlider(index) {
      sliderImages.style.transform = `translateX(-${index * 400}px)`;
      dots.forEach(dot => dot.classList.remove("active"));
      dots[index].classList.add("active");
    }

    function autoSlide() {
      currentIndex = (currentIndex + 1) % images.length;
      updateSlider(currentIndex);
    }

    // Auto-slide every 3 seconds
    setInterval(autoSlide, 3000);

    // Dot navigation
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlider(index);
      });
    });