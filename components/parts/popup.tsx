import React, { useState } from "react";
import styles from "../../styles/globals.scss";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className={`${styles.popup} ${isOpen ? styles.open : ""}`}>
      <div className={styles.content}>
        <button className={styles.closeButton} onClick={handleClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
