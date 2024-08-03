document.getElementById('send-button').addEventListener('click', sendMessage);

const responses = {
    'hola': '¡Hola! ¿Cómo estás?',
    'adiós': '¡Adiós! Que tengas un buen día.',
    'cómo estás': 'Estoy bien, gracias por preguntar.',
    'qué puedes hacer': 'Puedo responder a tus preguntas básicas.'
};

function sendMessage() {
    const userInput = document.getElementById('user-input').value.toLowerCase();
    if (userInput.trim() === '') return;

    addMessage(userInput, 'user');
    document.getElementById('user-input').value = '';

    setTimeout(() => {
        const response = generateResponse(userInput);
        addMessage(response, 'bot');
    }, 500);
}

function addMessage(message, sender) {
    const chatbox = document.getElementById('chatbox');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function generateResponse(userInput) {
    return responses[userInput] || 'Lo siento, no entiendo esa pregunta.';
}
