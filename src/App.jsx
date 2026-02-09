import React, { useState } from 'react';
import Intro from './components/Intro';
import Question from './components/Question';
import Success from './components/Success';
import Rejection from './components/Rejection';
import { sendResponse } from './emailService';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [currentScreen, setCurrentScreen] = useState('intro'); // intro, question, success, rejection
  const [params] = useState(() => {
    const searchParams = new URLSearchParams(window.location.search);
    return {
      sender: searchParams.get('sender') || 'Moi',
      receiver: searchParams.get('receiver') || 'Toi',
      email: searchParams.get('email') || '',
    };
  });

  const handleIntroComplete = () => {
    setCurrentScreen('question');
  };

  const handleYes = () => {
    sendResponse('OUI', params);
    setCurrentScreen('success');
  };

  const handleNoFinal = () => {
    sendResponse('NON', params);
    setCurrentScreen('rejection');
  };

  return (
    <div className="App">
       {/* Background floating hearts could be added here */}
      <AnimatePresence mode="wait">
        {currentScreen === 'intro' && (
          <Intro key="intro" onComplete={handleIntroComplete} />
        )}
        {currentScreen === 'question' && (
           <Question 
             key="question"
             sender={params.sender} 
             receiver={params.receiver} 
             onYes={handleYes} 
             onNo={handleNoFinal} 
           />
        )}
        {currentScreen === 'success' && (
          <Success key="success" params={params} />
        )}
        {currentScreen === 'rejection' && (
          <Rejection key="rejection" />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
