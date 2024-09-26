
let slideIndex = { international: 0, domestic: 0 };

function showSlider(type) {
    document.getElementById('internationalSlider').classList.remove('active');
    document.getElementById('domesticSlider').classList.remove('active');
    
    if (type === 'international') {
        document.getElementById('internationalSlider').classList.add('active');
    } else {
        document.getElementById('domesticSlider').classList.add('active');
    }
}

function moveSlides(type, n) {
    const slider = document.getElementById(`${type}Slider`).querySelector('.slides');
    const totalSlides = slider.querySelectorAll('.slide').length;
    const visibleSlides = 4;
    const slideWidth = slider.querySelector('.slide').offsetWidth;
    
    slideIndex[type] += n;
    
    if (slideIndex[type] < 0) {
        slideIndex[type] = totalSlides - visibleSlides;
    } else if (slideIndex[type] > totalSlides - visibleSlides) {
        slideIndex[type] = 0;
    }

    const newTransform = -slideIndex[type] * slideWidth;
    slider.style.transform = `translateX(${newTransform}px)`;
}

function moveSlides1(type, n) {
    const slider = document.getElementById(`${type}Slider1`).querySelector('.slides1');
    const totalSlides = slider.querySelectorAll('.slide1').length;
    const visibleSlides = 3;
    const slideWidth = slider.querySelector('.slide1').offsetWidth;
    
    slideIndex[type] += n;
    
    if (slideIndex[type] < 0) {
        slideIndex[type] = totalSlides - visibleSlides;
    } else if (slideIndex[type] > totalSlides - visibleSlides) {
        slideIndex[type] = 0;
    }

    const newTransform = -slideIndex[type] * slideWidth;
    slider.style.transform = `translateX(${newTransform}px)`;
}


// Second Slider 

let currentIndex = 0;
const sliderWrapper = document.querySelector('.slider-wrapper');
const totalItems = document.querySelectorAll('.slider-item').length;
const visibleItems = 4; // Number of images to show at one time

function updateSliderPosition() {
    const slideWidth = sliderWrapper.querySelector('.slider-item').clientWidth;
    const newPosition = -(currentIndex * slideWidth);
    sliderWrapper.style.transform = `translateX(${newPosition}px)`;
}

function slideNext() {
    if (currentIndex < totalItems - visibleItems) {
        currentIndex++;
    } else {
        currentIndex = 0; // Wrap around to the beginning
    }
    updateSliderPosition();
}

function slidePrev() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - visibleItems; // Wrap around to the end
    }
    updateSliderPosition();
}

window.addEventListener('resize', updateSliderPosition); // Adjust position on window resize
