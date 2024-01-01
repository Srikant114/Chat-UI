function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const fileInput = document.getElementById('fileInput');
    const chatMessages = document.getElementById('chatMessages');

    if (messageInput.value.trim() === '' && !fileInput.files.length) {
        return;
    }

    // Send user message
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'message my-message';

    if (messageInput.value.trim() !== '') {
        const textDiv = document.createElement('div');
        textDiv.textContent = messageInput.value;
        userMessageDiv.appendChild(textDiv);
    }

    if (fileInput.files.length) {
        const fileDiv = createFileDiv(fileInput.files[0]);
        userMessageDiv.appendChild(fileDiv);
    }

    chatMessages.appendChild(userMessageDiv);

    // Clear input fields
    messageInput.value = '';
    fileInput.value = '';

    // Scroll to the bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Simulate auto-reply after a short delay
    setTimeout(() => {
        const autoReplyMessageDiv = document.createElement('div');
        autoReplyMessageDiv.className = 'message';

        const autoReplyTextDiv = document.createElement('div');
        autoReplyTextDiv.textContent = 'This is an auto-reply. Thank you for your message!';
        autoReplyMessageDiv.appendChild(autoReplyTextDiv);

        chatMessages.appendChild(autoReplyMessageDiv);

        // Scroll to the bottom after the auto-reply
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 500);
}

function createFileDiv(file) {
    const fileDiv = document.createElement('div');
    const fileName = file.name;

    if (isImageFile(file)) {
        const thumbnailDiv = document.createElement('div');
        thumbnailDiv.className = 'attached-image';

        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.alt = fileName;
        thumbnailDiv.appendChild(img);

        fileDiv.appendChild(thumbnailDiv);

        const fileInfo = document.createElement('div');
        fileInfo.className = 'file-info';
        const fileLink = document.createElement('a');
        fileLink.href = URL.createObjectURL(file);
        fileLink.download = fileName;
        fileLink.textContent = `Attachment: ${fileName}`;
        fileInfo.appendChild(fileLink);
        fileDiv.appendChild(fileInfo);
    } else {
        const fileIconDiv = document.createElement('div');
        fileIconDiv.className = 'file-icon';
        fileIconDiv.textContent = '📄'; // Generic file icon

        fileDiv.appendChild(fileIconDiv);

        const fileLink = document.createElement('a');
        fileLink.href = URL.createObjectURL(file);
        fileLink.download = fileName;
        fileLink.textContent = `Attachment: ${fileName}`;
        fileDiv.appendChild(fileLink);
    }

    return fileDiv;
}

function isImageFile(file) {
    return file.type.startsWith('image/');
}
