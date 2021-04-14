const socket = io();

const chat = document.querySelector('.chat-form');
const Input = document.querySelector('.chat-input')

chat.addEventListener('submit', (event) => {
    event.preventDefault();
    socket.emit('chat', Input.value);
    Input.value = '';
});

const chatWindow = document.querySelector('.chat-window')

const renderMessage = message => {
    const div = document.createElement('div')
    div.classList.add('render-message')
    div.innerText = message
    chatWindow.appendChild(div)
}

socket.on('chat', message => {
    // make sure to modify this
    renderMessage(message)
});