import React, { useState } from "react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className={`popup ${isOpen ? "open" : ""}`}>
      <div className="content">
        <button className="closeButton" onClick={handleClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
