import React from "react";
import "./modal.css";

const Modal = ({ children, show, closeModal }) => {
  return (
    <div className={`overlay ${show && "open"}`}>
      <div className="custom-modal">
        <span onClick={closeModal}>x</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
