// KeyboardLayout.js
import React from 'react';
import './App.css'

const KeyboardLayout = ({ targetKeys }) => {
  return (
    <div className="keyboard-layout">
      {/* Display the keyboard layout */}
      <div className="row">
        <div className={targetKeys.includes('a') ? 'highlighted-key' : ''}>a</div>
        <div className={targetKeys.includes('s') ? 'highlighted-key' : ''}>s</div>
        <div className={targetKeys.includes('d') ? 'highlighted-key' : ''}>d</div>
        <div className={targetKeys.includes('f') ? 'highlighted-key' : ''}>f</div>
      </div>
      <div className="row">
        <div className={targetKeys.includes('j') ? 'highlighted-key' : ''}>j</div>
        <div className={targetKeys.includes('k') ? 'highlighted-key' : ''}>k</div>
        <div className={targetKeys.includes('l') ? 'highlighted-key' : ''}>l</div>
        <div className={targetKeys.includes(';') ? 'highlighted-key' : ''}>;</div>
      </div>
    </div>
  );
};

export default KeyboardLayout;
