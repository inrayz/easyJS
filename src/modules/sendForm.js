'use strict';

const sendForm = () => {

  const errorMessage = 'Что-то пошло не так...',
      loadMessage = 'Загрузка...',
      successMessage = 'Спасибо! Мы скоро с вами свяжемся';
  
  const form = document.querySelector('form'),
          modalOverlay = document.querySelector('.modal-overlay'),
          modalCallback = document.querySelector('.modal-callback');
  
  const statusMessage = document.createElement('div');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formData = new FormData(form);
    let body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    });
    postData(body, () => {
      statusMessage.textContent = successMessage;
    }, (error) => {
      statusMessage.textContent = errorMessage;
      console.error(error);
    });
  });

  const postData = (body, outputData, errorData) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
      if(request.readyState !== 4){
        return;
      }
      if(request.status === 200){
        outputData();
        updatePage();
        modalOverlay.style.display = 'none';
        modalCallback.style.display = 'none';
        alert(successMessage);
      }else {
        errorData(request.status);
        updatePage();
      }
    });
    request.open('POST', './server.php');
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(body));
  };


  const updatePage = () => {
    clearInputs(form);
      statusMessage.style.cssText = '';
      setTimeout(() => {
        statusMessage.textContent = '';
      }, 3000);
    };
    const clearInputs = (form) => {
      const inputs = form.querySelectorAll('.form-control');
      inputs.forEach(item => item.value = '');
      console.log(inputs);
    };
};


export default sendForm;