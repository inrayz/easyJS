'use strict';

const slider = () => {
    const slide = document.querySelectorAll('.item'),
    itemListParent = document.querySelector('.top-slider');
    let currentSlide = 0;

    const autoPlaySlide = () => {
      slide[currentSlide].classList.remove('item-active');
      slide[currentSlide].classList.add('item-not-active');
      currentSlide++;
      if(currentSlide >= slide.length){
        currentSlide = 0;
      }
      slide[currentSlide].classList.add('item-active');
      slide[currentSlide].classList.remove('item-not-active');
    };

    const startSlide = () => {
      setInterval(autoPlaySlide, 300000);
    };
    
    startSlide();
  };

  export default slider;