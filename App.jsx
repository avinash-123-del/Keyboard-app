// App.js
import React, { useState, useEffect } from 'react';
import KeyboardLayout from './KeyboardLayout';
import TextInput from './TextInput';
import ProgressTracker from './ProgressTracker';
import Steps from './Steps'

const App = () => {
  const [targetCombination, setTargetCombination] = useState('');
  const [userInput, setUserInput] = useState('');
  const [typingSpeed, setTypingSpeed] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isPracticeActive, setIsPracticeActive] = useState(false);

  useEffect(() => {
    if (isPracticeActive) {
      setStartTime(Date.now());
      setEndTime(null);
      setUserInput('');
    } else {
      setEndTime(Date.now());
    }
  }, [isPracticeActive]);

  // Function to handle user input and calculate typing speed and accuracy
  const handleUserInput = (input) => {
    setUserInput(input);
  };

  // Function to generate random target combination
  const generateTargetCombination = () => {
    const keys = 'asdfjkl;';
    const randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
  };

  // Function to start or stop the typing practice
  const handlePracticeToggle = () => {
    setIsPracticeActive(!isPracticeActive);
  };

  // Function to calculate typing speed and accuracy
  const calculatePerformanceMetrics = () => {
    const timeInMinutes = 5;
    const charactersTyped = userInput.length;
    const minutesElapsed = (endTime - startTime) / 60000;
    const typingSpeed = Math.round(charactersTyped / minutesElapsed);
    const accuracy = Math.round((charactersTyped / targetCombination.length) * 100);
    setTypingSpeed(typingSpeed);
    setAccuracy(accuracy);
  };

  useEffect(() => {
    if (endTime) {
      calculatePerformanceMetrics();
    }
  }, [endTime]);

  // Generate a new target combination when the practice is active
  useEffect(() => {
    if (isPracticeActive) {
      setTargetCombination(generateTargetCombination());
    }
  }, [isPracticeActive]);

  return (
    <div className="App">
      <KeyboardLayout targetKeys={targetCombination} />
      <TextInput
        userInput={userInput}
        onUserInput={handleUserInput}
        isPracticeActive={isPracticeActive}
        onPracticeToggle={handlePracticeToggle}
      />
      <ProgressTracker typingSpeed={typingSpeed} accuracy={accuracy} />
    <Steps/>
    </div>
  );
};

export default App;
