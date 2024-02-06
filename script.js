const button = document.getElementById('showMessageBtn');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  message.textContent = 'Bom loves Noynha very much na rak fan mak mak EiEi';
  message.classList.remove('hidden');
});