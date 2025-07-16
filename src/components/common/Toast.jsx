import React, { useEffect } from "react";

import "./Toast.css";
import { X } from "lucide-react";

const Toast = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);
  return (
    <div className={`toast ${type}`}>
      <span>{message}</span>
      <button onClick={onClose}>
        <X size={16}/>
      </button>
    </div>
  );
};

export default Toast;
