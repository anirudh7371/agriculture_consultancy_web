import React, { useEffect, useState } from 'react';
import './Toast.css';

/**
 * Toast notification component.
 * Props:
 *   message (string)   — text to display
 *   type    ('success' | 'error')
 *   onClose (fn)       — called after auto-dismiss or manual close
 */
const Toast = ({ message, type = 'success', onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof onClose !== 'function') {
      return undefined;
    }

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 400);
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleClose = () => {
    if (typeof onClose !== 'function') {
      return;
    }

    setVisible(false);
    setTimeout(onClose, 400);
  };

  return (
    <div className={`toast toast-${type}${visible ? ' toast-visible' : ' toast-hidden'}`} role="alert">
      <span className="toast-icon">
        {type === 'success'
          ? <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
          : <i className="fa-solid fa-circle-xmark" aria-hidden="true"></i>}
      </span>
      <p className="toast-message">{message}</p>
      <button type="button" className="toast-close" onClick={handleClose} aria-label="Dismiss">×</button>
    </div>
  );
};

export default Toast;
