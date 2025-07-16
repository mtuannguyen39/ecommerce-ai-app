import React, { useState } from "react";
import { X } from "lucide-react";
import "./AIChat.css";

const AIChat = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Xin chào, tôi là AI tư vấn khóa học. Bạn đang tìm khóa học phải không?",
      isAi: true,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), text: input, isAi: false };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAiResponse(input);
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), text: aiResponse, isAi: true },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAiResponse = (query) => {
    const responses = {
      "tiếng anh":
        "Tôi đề xuất bạn xem khóa học 'Tiếng anh giao tiếp với người bản địa' rất phù hợp cho bạn để cải thiện kỹ năng giao tiếp",
      "lập trình ":
        "Khóa 'Lập Trình React từ Cơ Bản đến Nâng Cao' là lựa chọn tuyệt vời để bắt đầu career IT!",
      "khóa marketing": 
        "Khóa Digital Marketing sẽ giúp bạn nắm vững được chiến lược Marketing hiện đại!",
      default:
        "Dựa trên nhu cầu của ban, tôi khuyên bạn nên xem các khóa học phổ biến trên trang web của chúng tôi trước. Bạn cũng có thể cung cấp cho tôi nhu cầu của bạn, để tôi có thể tư vấn cho bạn một cách chính xác nhất nhé!",
    };

    for (const [key, response] of Object.entries(responses)) {
      if (query.toLowerCase().includes(key)) {
        return response;
      }
    }

    return responses.default;
  };

  if (!isOpen) return null;

  return (
    <div className="ai-container">
      <div className="ai-header">
        <h3 className="ai-title">AI Chat box</h3>
        <button className="ai-btn" onClick={onClose}>
          <X size={18} />
        </button>
      </div>

      <div className="ai-widget-messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={` ai-wrapper ${msg.isAi ? "ai" : "user"}`}
          >
            <div className={`ai-text ${msg.isAi ? "ai" : "user"}`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="ai-typing">
            <div className="ai-indicator">
              <div className="ai-typing-dots">
                <div className="ai-typing-dot"></div>
                <div className="ai-typing-dot"></div>
                <div className="ai-typing-dot"></div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="ai-widget-footer">
        <div className="ai-input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Bạn đang tìm khóa học?...."
          />
          <button onClick={handleSend} className="send-btn">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
