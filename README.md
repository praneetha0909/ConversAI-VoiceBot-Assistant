# ConversAI – Voice-Driven LLM Assistant

ConversAI is a browser-based voice assistant that enables users to interact through natural speech. It captures audio in real time using the Web Speech API, converts it into text, sends the text to an LLM, and displays the generated response. The project demonstrates a complete voice-to-LLM interaction loop built entirely on the frontend using JavaScript.

## Features
- Real-time speech recognition using the Web Speech API
- LLM-powered response generation through OpenAI GPT models
- Support for both text and voice input
- Low-latency voice-to-response pipeline
- Clean and modular JavaScript architecture

## Tech Stack
- HTML, CSS, JavaScript
- Web Speech API for speech-to-text
- Axios for API communication
- OpenAI GPT-3 (text-davinci)
- Runs fully client-side in the browser

## System Workflow
1. User activates the microphone and speaks.
2. The Web Speech API transcribes speech into text.
3. The transcribed text is sent to the OpenAI API.
4. The model returns a contextual response.
5. The chat interface displays the response.
6. Optional text-to-speech functionality can be enabled.

## Setup and Installation
Clone the repository:
git clone https://github.com/praneetha0909/ConversAI-VoiceBot-Assistant.git
cd ConversAI-VoiceBot-Assistant

Add your OpenAI API key inside script.js:
const OPENAI_API_KEY = 'YOUR_API_KEY_HERE';

Open index.html in your browser to run the application.

## Usage
Click the microphone button to begin voice capture  
Speak naturally and wait for transcription  
The assistant generates a real-time response using the LLM  
Text input is also supported  

## Future Enhancements
Streaming model responses  
Integration with Whisper or other ASR models  
Improved conversational memory  
Custom command triggers  
Latency optimization for real-time use  

## Contributing
Suggestions and pull requests are welcome. Please open an issue or submit a contribution to improve the project.


## Acknowledgements
Built using the Web Speech API and OpenAI GPT models.
