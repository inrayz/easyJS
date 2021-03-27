'use strict'

const references = () => {
    const anchors = document.querySelectorAll('a[href*="#"]');
    for (let anchor of anchors) {
      anchor.addEventListener('click', function (event){
        event.preventDefault();
        const blockId = anchor.getAttribute('href');
        if (blockId === '#'){
          return;
        }else{
          document.querySelector('' + blockId).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        }
      });
    }
  };

  export default references;