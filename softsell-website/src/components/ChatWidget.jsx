import React, { useState } from 'react';
import '../styles/ChatWidget.css';

const ChatWidget = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can we assist you today?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const [isVisible, setIsVisible] = useState(false); // Initially hidden

  // Predefined responses for common questions
  const predefinedResponses = {
    "How do I sell my license?": "To sell your license, you may need to transfer ownership through the respective licensing authority. Contact our support team for detailed steps.",
    "What are the pricing options?": "Our pricing depends on the license type. Check our website or reach out to sales for personalized quotes.",
    "How can I renew my license?": "You can renew your license through your account dashboard or by contacting support.",
    "Is there a refund policy?": "Yes, refunds are available based on our return policy. Contact support for eligibility."
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    setMessages([...messages, { text: input, sender: 'user' }]);

    setTimeout(() => {
      const botResponse = predefinedResponses[input] || "Thanks for reaching out! We'll get back to you shortly.";
      setMessages((prevMessages) => [...prevMessages, { text: botResponse, sender: 'bot' }]);
    }, 1000);

    setInput('');
  };

  const handleCloseChat = () => {
    setIsVisible(false);
    setMessages([{ text: 'Hello! How can we assist you today?', sender: 'bot' }]); // Reset chat messages
    setInput('');
  };

  return (
    <>
      {/* Chatbot Icon */}
      <div className="chatbot-icon" onClick={() => setIsVisible(!isVisible)}>
        💬
      </div>

      {/* Chat Widget */}
      {isVisible && (
        <div className="chat-widget">
          <div className="chat-widget-header">
            Chat with Us
            <button className="close-btn" onClick={handleCloseChat}>×</button>
          </div>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`chat-message ${message.sender === 'user' ? 'user' : 'bot'}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Ask a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;