'use strict'

const slider = () => {
    const slide = document.querySelectorAll('.item'),
    itemListParent = document.querySelector('.top-slider');
    let currentSlide = 0;

    const autoPlaySlide = () => {
      itemListParent.insertBefore(slide[currentSlide], null);
      currentSlide++;
      if(currentSlide >= slide.length){
        currentSlide = 0;
      }
    };

    const startSlide = () => {
      setInterval(autoPlaySlide, 3000);
    };

    const stopSlide = () => {

    };

    startSlide();
  };

  export default slider;