const container = document.querySelector('.container');
const gallery = container.querySelector('.gallery');
const prevBtn = container.querySelector('.previous');
const nextBtn = container.querySelector('.next');
const card = gallery.querySelector('.card');
const transitionAmount = card.width + parseInt(getComputedStyle(card).marginRight);
const cardsAmount = gallery.querySelectorAll('.card').length;

let counter = 1;

const prevSlide = () => {
    nextBtn.style.opacity = '1';
    
    if (counter > 1) {
        counter--;
        gallery.style.transform += `translateX(${transitionAmount}px)`;
    }
    console.log(counter);
    if (counter == 1) {
        // prevBtn.style.opacity = '.3';
        prevBtn.style.opacity = '.3';
    }    
};

const nextSlide = () => {
    prevBtn.style.opacity = '1';
    
    if (counter < cardsAmount) {
        counter++;
        gallery.style.transform += `translateX(-${transitionAmount}px)`;
    }
    console.log(counter);
    if (counter == cardsAmount) {
        // prevBtn.style.opacity = '.3';
        nextBtn.style.opacity = '.3';
    }
};

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);