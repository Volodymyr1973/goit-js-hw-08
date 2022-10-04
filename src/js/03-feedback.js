console.log('Hello World');

const inputEl = document.querySelector('.feedback-form input');
console.dir(inputEl);

const textareaEl = document.querySelector('.feedback-form textarea');
console.dir(textareaEl);

const btnEl = document.querySelector(`.feedback-form button`);
console.log(btnEl);

const formEl = document.querySelector('.feedback-form');
console.dir(formEl);

let emailIn;

let textIn;

let arr = {};

const onInput = event => {
  event.preventDefault();
  console.log(event);
  console.log(event.path[0].type);
  if (event.path[0].type === 'email') {
    emailIn = event.target.value;
    arr.email = emailIn;

    console.log(emailIn);
  } else if (event.path[0].type === 'textarea') {
    textIn = event.target.value;
    arr.message = textIn;

    console.log(textIn);
  }

  //   let arr = { email: `${emailIn}`, text: `${textIn}` };
  console.log(arr);
  localStorage.setItem('feedback-form-state', JSON.stringify(arr));
};

formEl.addEventListener('input', onInput);

const onSubmit = event => {
  event.preventDefault();
  console.log(event.currentTarget);
  const email = event.target[0].value;
  console.dir(email);
  const textarea = event.target[1].value;
  console.log(textarea);
  let arr = { email: `${email}`, text: `${textarea}` };
  console.log(arr);
  localStorage.setItem('feedback-form-state', JSON.stringify(arr));
  event.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
};

formEl.addEventListener('submit', onSubmit);
