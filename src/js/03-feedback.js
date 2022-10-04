const inputEl = document.querySelector('.feedback-form input');
console.log(inputEl.value);

const textareaEl = document.querySelector('.feedback-form textarea');
console.dir(textareaEl);

const btnEl = document.querySelector(`.feedback-form button`);
console.log(btnEl);

const formEl = document.querySelector('.feedback-form');
console.dir(formEl);

let emailIn;

let textIn;

let obj = {};

const onInput = event => {
  event.preventDefault();
  console.log(event);
  console.log(event.path[0].type);
  if (event.path[0].type === 'email') {
    emailIn = event.target.value;
    obj.email = emailIn;

    console.log(emailIn);
  } else if (event.path[0].type === 'textarea') {
    textIn = event.target.value;
    obj.message = textIn;

    console.log(textIn);
  }

  console.log(obj);
  localStorage.setItem('feedback-form-state', JSON.stringify(obj));

  console.log(localStorage.getItem('feedback-form-state'));
};

formEl.addEventListener('input', onInput);

const onSubmit = event => {
  event.preventDefault();
  event.target.reset();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
};

formEl.addEventListener('submit', onSubmit);
