function sendMessage() {
    const input = document.getElementById("messageInput");
    const messageText = input.value.trim();

    if (messageText === "") return;

    const chatBox = document.getElementById("chatBox");

    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    messageDiv.textContent = messageText;

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;

    input.value = "";
}