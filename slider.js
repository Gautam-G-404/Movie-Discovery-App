const slideImages = document.querySelector('.slide-images');
const nextBtn = document.querySelector('.next-btn');
const imageWidth = 200 + 10; // image width + gap
const visibleImages = 5;
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  const totalImages = slideImages.children.length;
  if (currentIndex + visibleImages < totalImages) {
    currentIndex++;
    slideImages.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  }
});