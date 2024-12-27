document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('feedback-form');
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    console.log('Збережені дані:', formData);

    successMessage.classList.remove('hidden');
    setTimeout(() => successMessage.classList.add('hidden'), 3000);
    form.reset();
  });
});
