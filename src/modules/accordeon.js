'use strict';

const accordeon = () => {
    const accordions = document.querySelectorAll('.element');
    accordions.forEach((item) => {
      item.addEventListener('click', function(){
        if(this.classList.contains('active')){
          this.classList.remove('active');
        } else {
          accordions.forEach((el) => {
            el.classList.remove('active');
          });
          this.classList.add('active');
        }
      });
    });
};

export default accordeon;