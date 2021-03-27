'use strict';

const validation = () => {

    let onFocus = false;

    const checkBlur = event => {
      event.target.value = event.target.value.replace(/-+(?=-+)| +(?= +)|-+(?= +)| +(?=-+)|^ +| +$|^-+|-+$/ig, '');
      if (event.target.name === 'fio') {
        event.target.value = event.target.value.split(' ').map(item => item[0].toUpperCase() + item.slice(1).toLowerCase()).join(' ');
      }
      event.target.removeEventListener('blur', checkBlur);
      onFocus = !onFocus;
    };

    const checkFocus = event => {
      if (!onFocus) {
        event.target.addEventListener('blur', checkBlur);
        onFocus = !onFocus;
      }
    };

    const checkInputText = event => {
      event.target.value = event.target.value.replace(/[^а-я- ]/ig, '');
      checkFocus(event);
    };

    const checkInputTel = event => {
      event.target.value = event.target.value.replace(/[^\d()-+]/ig, '');
      checkFocus(event);
    };

    document.addEventListener('input', event => {
      if (event.target.name === 'tel') {
        checkInputTel(event);
      } else if (event.target.name === 'fio') {
        checkInputText(event);
      }
    });
  };

export default validation;