
document.addEventListener('DOMContentLoaded', () => {
  const feedbackForm = document.querySelector('.feedback-form');

  const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedFormData) {
    feedbackForm.email.value = savedFormData.email;
    feedbackForm.message.value = savedFormData.message;
  }

  feedbackForm.addEventListener('input', handleInput);
  feedbackForm.addEventListener('submit', handleSubmit);
});

function handleInput(event) {
  const { name, value } = event.target;

  const currentFormData = {
    email: document.querySelector('[name="email"]').value,
    message: document.querySelector('[name="message"]').value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(currentFormData));
}

function handleSubmit(event) {
  event.preventDefault();

  const formData = {
    email: document.querySelector('[name="email"]').value,
    message: document.querySelector('[name="message"]').value,
  };

  localStorage.removeItem('feedback-form-state');
  document.querySelector('.feedback-form').reset();

  console.log(formData);
}
