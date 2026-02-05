const input = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const messages = document.getElementById('messages');

const addMessage = (text) => {
  const trimmed = text.trim();
  if (!trimmed) {
    return;
  }

  const wrapper = document.createElement('div');
  wrapper.className = 'message message--outgoing';

  const bubble = document.createElement('div');
  bubble.className = 'message__bubble';
  bubble.innerHTML = `
    <p>${trimmed}</p>
    <div class="message__meta">${new Date().toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
    })}</div>
  `;

  wrapper.appendChild(bubble);
  messages.appendChild(wrapper);
  messages.scrollTop = messages.scrollHeight;
  input.value = '';
};

sendButton.addEventListener('click', () => addMessage(input.value));
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addMessage(input.value);
  }
});
