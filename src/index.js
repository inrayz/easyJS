'use strict';

  import toggleMenu from './modules/toggleMenu';
  import slider from './modules/slider';
  import goUp from './modules/goUp';
  import references from './modules/references';
  import accordeon from './modules/accordeon';
  import sendForm from './modules/sendForm';
  import validation from './modules/validation';
  import maskPhone from './modules/maskPhone';


  // Маска для телефона
  maskPhone('.tel');

  //меню
  toggleMenu(); 

  // slider
  slider();

// Кнопка Вверх
  goUp();

  // Ссылки
  references();

  // Аккордеон
  accordeon();

  // Отправка формы
  sendForm();

  // Валидация
  validation();