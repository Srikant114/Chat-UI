function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();
  
    if (messageText === '') return;
  
    appendMessage('You', messageText);
    messageInput.value = '';
  
    // Simulate auto-reply after a delay
    setTimeout(() => {
      appendMessage('Friend', 'Thanks for your message!');
    }, 1000);
  }
  
  function appendMessage(sender, text) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatMessages.appendChild(messageDiv);
  
    // Scroll to the bottom of the chat
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  