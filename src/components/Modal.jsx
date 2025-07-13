import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ children, isOpen, onClose }) => {
    const modalRoot = document.getElementById('modal-root');
    
    useEffect(() => {
        // Optional: Add any effect for 
        // when the modal opens or closes
    }, [isOpen]);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal-content">
                <span className="close-button" 
                onClick={onClose}>&times;</span>
                {children}
            </div>
        </div>,
        modalRoot
    );
};

export default Modal;