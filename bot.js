document.addEventListener('DOMContentLoaded', function () {
    const chatBox = document.getElementById('chatbox');
    const chatIcon = document.getElementById('chat-icon');
    const closeChat = document.getElementById('closeChat');
    const sendButton = document.getElementById('sendButton');
    const voiceButton = document.getElementById('voiceButton');

    // Add event listener to open the chatbox
    chatIcon.addEventListener('click', openChat);

    // Add event listener to close the chatbox
    closeChat.addEventListener('click', closeChatBox);

    // Add event listener to send the message
    sendButton.addEventListener('click', sendMessage);

    voiceButton.addEventListener('click', startVoiceRecognition);


    function openChat() {
        console.log('Opening chat...');
        chatBox.style.display = 'block';
    }

    function closeChatBox() {
        console.log('Closing chat...');
        chatBox.style.display = 'none';
    }

    const OPENAI_API_KEY = ' ';
    const OPENAI_ENDPOINT = 'https://api.openai.com/v1/engines/davinci/completions';

    function sendMessage() {
        const userInput = document.getElementById('user-input').value;
        addUserMessage(userInput);

        // Show loading indicator
        document.getElementById('loading-indicator').style.display = 'block';

        // Call GPT-3 API here
        callGPT3(userInput)
            .then(aiResponse => {
                // Hide loading indicator
                document.getElementById('loading-indicator').style.display = 'none';
                addBotMessage(aiResponse);
            })
            .catch(error => {
                // Hide loading indicator
                document.getElementById('loading-indicator').style.display = 'none';
                console.error(error);
                addBotMessage('Sorry, an error occurred. Please try again.');
            });
    }

    function addUserMessage(message) {
        const chatDisplay = document.getElementById('chat-display');
        const userMessage = document.createElement('div');
        userMessage.classList.add('user-message');
        userMessage.textContent = `You: ${message}`;
        chatDisplay.appendChild(userMessage);
    }

    function addBotMessage(message) {
        const chatDisplay = document.getElementById('chat-display');
        const botMessage = document.createElement('div');
        botMessage.classList.add('bot-message');
        botMessage.innerHTML = message;

        // Check if the message contains interactive elements
        if (message.includes('<button')) {
            botMessage.classList.add('interactive-message');
            handleInteractiveElements(botMessage);
        }

        chatDisplay.appendChild(botMessage);

        // Speak the bot's response
        //speakMessage(message);
    }
    function speakMessage(message) {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(message);
        synth.speak(utterance);
    }

    function startVoiceRecognition() {
        const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
        recognition.lang = 'en-US';

        recognition.onresult = function (event) {
            const voiceInput = event.results[0][0].transcript;
            document.getElementById('user-input').value = voiceInput;
            sendMessage();
        };

        recognition.start();
    }

    async function callGPT3(userInput) {
        try {
            const response = await axios.post(
                OPENAI_ENDPOINT,
                {
                    prompt: userInput,
                    max_tokens: 75,
                    temperature: 0.5,  // Specify the temperature here
                    n: 1,
                    stop: null,
                    frequency_penalty: 0.5,
                    presence_penalty: 0.5, 
                    best_of: 1

                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${OPENAI_API_KEY}`
                    }
                }
            );

            return response.data.choices[0]?.text.trim() || 'I have no response.';
        } catch (error) {
            console.error('Error calling GPT-3 API:', error);
            throw new Error('Failed to call GPT-3 API');
        }
    }
});
