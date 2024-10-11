document.getElementById('send-one').addEventListener('click', function() {
    sendMessage('input-one', 'blue');
});

document.getElementById('send-two').addEventListener('click', function() {
    sendMessage('input-two', 'red');
});

function sendMessage(inputId, colorClass) {
    var input = document.getElementById(inputId);
    var message = input.value.trim();

   
    if (message === '') {
        return;
    }

    
    var messageElement = document.createElement('div');
    messageElement.classList.add('message', colorClass);
    messageElement.textContent = message;

    
    document.getElementById('chat-area').appendChild(messageElement);

    
    input.value = '';

    
    document.getElementById('chat-area').scrollTop = document.getElementById('chat-area').scrollHeight;
}

