import throttle from 'lodash.throttle';

const inputEl = document.querySelector('.feedback-form input');
// console.log(inputEl.value);

const textareaEl = document.querySelector('.feedback-form textarea');
// console.dir(textareaEl);

const formEl = document.querySelector('.feedback-form');
// console.dir(formEl);
let obj = { email: ' ', message: ' ' };

inputEmail();
inputTextarea();

const onInput = event => {
  event.preventDefault();
  let emailIn;
  let textIn;

  if (event.path[0].type === 'email') {
    emailIn = event.target.value;
    obj.email = emailIn;

    // console.log(emailIn);
  }
  if (event.path[0].type === 'textarea') {
    textIn = event.target.value;
    obj.message = textIn;

    //  console.log(textIn);
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
  // console.log(JSON.parse(localStorage.getItem('feedback-form-state')).email);
  // console.log(JSON.parse(localStorage.getItem('feedback-form-state')).message);
  // console.log(localStorage.getItem('feedback-form-state'));
};

formEl.addEventListener('input', throttle(onInput, 500));

function inputEmail() {
  if (localStorage.getItem('feedback-form-state')) {
    inputEl.value = JSON.parse(
      localStorage.getItem('feedback-form-state')
    ).email;
  }
}

function inputTextarea() {
  if (localStorage.getItem('feedback-form-state')) {
    textareaEl.value = JSON.parse(
      localStorage.getItem('feedback-form-state')
    ).message;
  }
}

const onSubmit = event => {
  event.preventDefault();
  event.target.reset();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
};

formEl.addEventListener('submit', onSubmit);
