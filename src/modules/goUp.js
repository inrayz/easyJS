'use strict'

const goUp = () => {

    let goTopBtn = document.querySelector('.up');
    goTopBtn.classList.add('up-none');
  
    let trackScroll = () => {
    let scrolled = window.pageYOffset;
    let coords = 580;

    if (scrolled > coords){
      goTopBtn.classList.remove('up-none');
    }
    if(scrolled < coords){
      goTopBtn.classList.add('up-none');
    }
  };
  let backToTop = () => {
    if(window.pageYOffset > 0){
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  };

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
  };

  export default goUp;