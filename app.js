document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const message = document.createElement('p');
  message.textContent = "This is your smart event dashboard.";
  app.appendChild(message);
});