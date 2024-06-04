const previousButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const slides = document.querySelectorAll(".slider-wrapper .slides");
let index = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });

    previousButton.style.display = index === 0 ? 'none' : 'block';
    nextButton.style.display = index === slides.length - 1 ? 'none' : 'block';
}

// Initial display
showSlide(index);

previousButton.addEventListener('click', function() {
    console.log('Previous button clicked');
    if (index > 0) {
        index--;
        showSlide(index);
    }
});

nextButton.addEventListener('click', function() {
    if (index < slides.length - 1) {
        index++;
        showSlide(index);
    }
});
console.log(previousButton, nextButton, slides);