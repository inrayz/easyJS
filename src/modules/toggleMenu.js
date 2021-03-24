'use strict'
const toggleMenu = () => {
    const btnMenu = document.querySelectorAll('.callback-btn')[1],
          closeBtn = document.querySelector('.modal-close'),
          modalOverlay = document.querySelector('.modal-overlay'),
          modalCallback = document.querySelector('.modal-callback');
    document.addEventListener('click', event => {
      let target = event.target;
      if(target.closest('a[href="#callback"]')){
        modalOverlay.style.display = 'block';
        modalCallback.style.display = 'block';
      }
      else if(target.classList.contains('modal-overlay')){
        modalOverlay.style.display = 'none';
        modalCallback.style.display = 'none';
      }
      else if(target.closest('img[alt="modal-close"]')){
        modalOverlay.style.display = 'none';
        modalCallback.style.display = 'none';
      }
      else if(target.closest('a[href="#feedback"]')){
        modalOverlay.style.display = 'block';
        modalCallback.style.display = 'block';
      }
      else if(target.closest('a[href="#application"]')){
        modalOverlay.style.display = 'block';
        modalCallback.style.display = 'block';
      }
    });
  };

  export default toggleMenu;