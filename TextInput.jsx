// TextInput.js
import React from 'react';
import './App.css'

const TextInput = ({ userInput, onUserInput, isPracticeActive, onPracticeToggle }) => {
  const handleChange = (event) => {
    onUserInput(event.target.value);
  };

  return (
    <div className="text-input">
      <textarea
        rows={4}
        cols={50}
        value={userInput}
        onChange={handleChange}
        disabled={!isPracticeActive}
        placeholder="Type here..."
      />
      <button onClick={onPracticeToggle}>{isPracticeActive ? 'Stop Practice' : 'Start Practice'}</button>
    </div>
  );
};

export default TextInput;
