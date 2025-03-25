/*document.addEventListener('DOMContentLoaded', function () {
    const chatBox = document.getElementById('chatBox');
    const chatIcon = document.getElementById('chatIcon');
    const chatDisplay = document.getElementById('chatDisplay');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    const closeChat = document.getElementById('closeChat');

    // Add event listeners
    chatIcon.addEventListener('click', openChat);
    closeChat.addEventListener('click', closeChatBox);
    sendButton.addEventListener('click', handleUserInput);

    // Display the default welcome message when the page loads
    addMessage('bot', "Hi there! How may I assist you today?");

    function openChat() {
        chatBox.style.display = 'block';
    }

    function closeChatBox() {
        chatBox.style.display = 'none';
    }

    function handleUserInput() {
        const userMessage = userInput.value;
        addMessage('user', userMessage);

        // Check if the user selected an option
        const selectedOption = getSelectedOption();

        if (selectedOption) {
            // Generate response based on selected option
            const response = getResponseForOption(selectedOption);
            addMessage('bot', response);
        } else {
            // Ask for email and additional details
            addMessage('bot', "I'm sorry, I didn't recognize that option. Could you please provide more details about your query? Additionally, please enter your email so our team can get back to you.");
        }

        // Clear input field
        userInput.value = '';

        // Scroll to the bottom to show the latest message
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }

    function addMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = message;
        chatDisplay.appendChild(messageElement);
    }

    function getSelectedOption() {
        // Get the selected radio button
        const selectedOption = document.querySelector('input[name="options"]:checked');

        // Return the id of the selected radio button or null if none is found
        return selectedOption ? selectedOption.id : null;
    }

    function getResponseForOption(option) {
        // Implement logic to return a response based on the selected option
        // This is a placeholder, you need to customize it based on your actual options
        const responses = {
            'option1': 'Sure! I am happy to help you. In CSE, there are few core courses like Design and Analysis of Algorithms, Data Analysis and Modelling Techniques, Data Mining, Distributed Systems, Web Data Management, and many others. It can be found in All - Course section',
            'option2': 'Feedback can be given at the end of your coursework, which is anonymous',
            'option3': 'I apologize for the inconvenience. Let me help you with the login issue. Please provide your Mavs Email ID, our team will contact you.',
            'option4': 'Exam Schedule is provided in the Student page, when you can see the detailed information for your course.',
            'option5': 'If you have any questions regarding assignments, feel free to ask. Only Instuctor can modify the assignments section',
            'option6': 'Please provide more details about your query along with your Email ID, and we will do our best to assist you.'
        };

        return responses[option] || "I did not recognize that option.";
    }
});
*/

document.addEventListener('DOMContentLoaded', function () {
    const chatBox = document.getElementById('chatBox');
    const chatIcon = document.getElementById('chatIcon');
    const chatDisplay = document.getElementById('chatDisplay');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    const closeChat = document.getElementById('closeChat');
    const optionsSelect = document.getElementById('optionsSelect');

    // Add event listeners
    chatIcon.addEventListener('click', openChat);
    closeChat.addEventListener('click', closeChatBox);
    sendButton.addEventListener('click', handleUserInput);

    // Display the default welcome message when the page loads
    addMessage('bot', "Hi there! How may I assist you today?");

    function openChat() {
        chatBox.style.display = 'block';
    }

    function closeChatBox() {
        chatBox.style.display = 'none';
    }

    function handleUserInput() {
        const userMessage = userInput.value;
        addMessage('user', userMessage);

        // Get the selected option from the dropdown
        const selectedOption = optionsSelect.value;

        if (selectedOption) {
            // Generate response based on selected option
            const response = getResponseForOption(selectedOption);
            addMessage('bot', response);
        } else {
            // Ask for email and additional details
            addMessage('bot', "🤖I'm sorry, I didn't recognize that option. Could you please provide more details about your query? Additionally, please enter your email so our team can get back to you.");
        }

        // Clear input field
        userInput.value = '';

        // Scroll to the bottom to show the latest message
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }

    function addMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = message;
        chatDisplay.appendChild(messageElement);
    }

    function getResponseForOption(option) {
        // Implement logic to return a response based on the selected option
        // This is a placeholder, you need to customize it based on your actual options
        const responses = {
            'option1': '🤖Sure! I am happy to help you. In CSE, there are few core courses like Design and Analysis of Algorithms, Data Analysis and Modelling Techniques, Data Mining, Distributed Systems, Web Data Management, and many others. It can be found in All - Course section',
            'option2': '🤖Feedback can be given at the end of your coursework, which is anonymous',
            'option3': '🤖I apologize for the inconvenience. Let me help you with the login issue. Please provide your Mavs Email ID, our team will contact you.',
            'option4': '🤖Exam Schedule is provided in the Student page, when you can see the detailed information for your course.',
            'option5': '🤖If you have any questions regarding assignments, feel free to ask. Only Instuctor can modify the assignments section',
            'option6': '🤖Please provide more details about your query along with your Email ID, and we will do our best to assist you.'
        };

        return responses[option] || "🤖I did not recognize that option.";
    }
});

/*
document.addEventListener('DOMContentLoaded', function () {
    const chatBox = document.getElementById('chatBox');
    const chatIcon = document.getElementById('chatIcon');
    const chatDisplay = document.getElementById('chatDisplay');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    const closeChat = document.getElementById('closeChat');
    const optionsSelect = document.getElementById('optionsSelect');
    const subOptionsDiv = document.getElementById('subOptions');

    // Additional variable for sub-options
    let subOptionsSelect;

    // Add event listeners
    chatIcon.addEventListener('click', openChat);
    closeChat.addEventListener('click', closeChatBox);
    sendButton.addEventListener('click', handleUserInput);

    // Display the default welcome message when the page loads
    addMessage('bot', "Hi there! How may I assist you today?");

    function openChat() {
        chatBox.style.display = 'block';
    }

    function closeChatBox() {
        chatBox.style.display = 'none';
    }

    function handleUserInput() {
        const userMessage = userInput.value;
        addMessage('user', userMessage);

        // Get the selected option from the dropdown
        const selectedOption = optionsSelect.value;
        // Get the selected sub-option from the dropdown
        const selectedSubOption = subOptionsSelect?.value;

        if (selectedOption) {
            // Generate response based on selected option and sub-option
            const response = getResponseForOption(selectedOption, selectedSubOption);
            addMessage('bot', response);
        } else {
            // Ask for email and additional details
            addMessage('bot', "I'm sorry, I didn't recognize that option. Could you please provide more details about your query? Additionally, please enter your email so our team can get back to you.");
        }

        // Clear input fields
        userInput.value = '';

        // Scroll to the bottom to show the latest message
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }

    // Function to handle changes in the options dropdown
    function handleOptionChange() {
        const selectedOption = optionsSelect.value;
        // Clear previous sub-options
        subOptionsDiv.innerHTML = '';

        // Check if the selected option has sub-options
        if (selectedOption && subOptions[selectedOption]) {
            // Create a new dropdown for sub-options
            subOptionsSelect = document.createElement('select');
            subOptionsSelect.id = 'subOptionsSelect';
            subOptionsSelect.name = 'subOptions';

            // Add default option
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.text = 'Select Sub-Option';
            subOptionsSelect.add(defaultOption);

            // Add sub-options to the dropdown
            subOptions[selectedOption].forEach(subOption => {
                const option = document.createElement('option');
                option.value = subOption;
                option.text = subOption;
                subOptionsSelect.add(option);
            });

            // Append the new dropdown to the subOptionsDiv
            subOptionsDiv.appendChild(subOptionsSelect);
        }
    }

    // Attach the handleOptionChange function to the change event of the options dropdown
    optionsSelect.addEventListener('change', handleOptionChange);

    // Define sub-options based on the selected options
    const subOptions = {
        'Info about course': ['CSE', 'Breadth Courses'],
        'Feedback': ['Instructor', 'Student'],
        'Login Issue': ['Password', 'Email not found'],
        'Exam Schedule': ['Tentative Schedule'],
        'Assignments': ['Add Assignment', 'Query'],
        // Add more sub-options as needed
    };

    // Function to add messages to the chat display
    function addMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = message;
        chatDisplay.appendChild(messageElement);
    }

    // Function to generate responses based on the selected option and sub-option
    function getResponseForOption(option, subOption) {
        // Sample responses, customize as needed
        const responses = {
            'Info about course': {
                'CSE': 'Sure! I am happy to help you. In CSE, there are few core courses like Design and Analysis of Algorithms, Data Analysis and Modelling Techniques, Data Mining, Distributed Systems, Web Data Management, and many others. It can be found in All - Course section',
                'Breadth Courses': 'For breadth courses, please check the MS-Guide. If you have 36 credits, you can take 2 additional course works, and 2 breadth courses from other departments as well, but if you have 30 credits, you cannot take from other departments.',
                // Add more sub-options as needed
            },
            'Feedback': {
                'Instructor': 'Feedback can be given at the end of your coursework',
                'Student': 'Feedback to the student can be given after each assignment submission, which makes the student improve in the upcoming assignments',
                // Add more sub-options as needed
            },
            'Login Issue': {
                'Password': 'If you are able to log in, but sometimes if it says incorrect password, clear cache and retry logging in',
                'Email not found': 'Clear cache, if the issue still persists, please Email us with the screenshot along with your username. Our team will look into it',
                // Add more sub-options as needed
            },
            'Exam Schedule': {
                'Tentative Schedule': 'Exam Schedule is provided in the Student page, where you can see detailed information for your course',
            },
            'Assignments': {
                'Add Assignment': 'Only the Instructor can add assignments and change them accordingly',
                'Query': 'If you have any questions regarding assignments, feel free to ask. Only the Instructor can modify the assignments section',
            },
            'Other Query': 'Please provide more details about your query along with your Email ID, and we will do our best to assist you',
            // Add responses for other options
        };

        return responses[option]?.[subOption] || "I did not recognize that option or sub-option.";
    }
});
*/


