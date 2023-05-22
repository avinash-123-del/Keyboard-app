// ProgressTracker.js
import React from 'react';
import './App.css'

const ProgressTracker = ({ typingSpeed, accuracy }) => {
  return (
    <div className="progress-tracker">
      <div className="metric">
        <div className="metric-label">Typing Speed</div>
        <div className="metric-value">{typingSpeed} WPM</div>
      </div>
      <div className="metric">
        <div className="metric-label">Accuracy</div>
        <div className="metric-value">{accuracy}%</div>
      </div>
    </div>
  );
};

export default ProgressTracker;
