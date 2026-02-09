import React, { useState, useEffect, useCallback } from 'react';
import Intro from './components/Intro';
import Question from './components/Question';
import Success from './components/Success';
import Rejection from './components/Rejection';
import { sendResponse } from './emailService';
import { sendTelegramMessage } from './telegramService';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [currentScreen, setCurrentScreen] = useState('intro');
  const [responseGiven, setResponseGiven] = useState(false);
  const [params] = useState(() => {
    const searchParams = new URLSearchParams(window.location.search);
    return {
      sender: searchParams.get('sender') || 'Moi',
      receiver: searchParams.get('receiver') || 'Toi',
      email: searchParams.get('email') || '',
    };
  });

  // Central notification handler
  const notifyOwner = useCallback((event, extra = '') => {
    const message = `📢 <b>${event}</b>\nDe: ${params.sender}\nPour: ${params.receiver}\n${extra}`;
    
    // Send Telegram
    sendTelegramMessage(message);
    
    // Send Email
    sendResponse(event, { ...params, extra });
  }, [params]);

  // Track Opening
  useEffect(() => {
    notifyOwner(`${params.sender} a ouvert le lien ! 👀`, 'Le lien vient d\'être ouvert ! 👀');
    
    // Track Abandonment (Page Hidden/Closed)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden' && !responseGiven) {
        // Note: sending requires 'beacon' or fetch keepalive usually, 
        // but for simple apps we try our best.
        notifyOwner(`${params.sender} a abandonné... 🏃‍♀️`, 'La page a été masquée/fermée sans réponse... 🏃‍♀️');
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [responseGiven, notifyOwner]);

  const handleIntroComplete = () => {
    setCurrentScreen('question');
  };

  const handleYes = () => {
    setResponseGiven(true);
    notifyOwner(`${params.sender} a dit OUI ! 🎉🎉🎉`, 'Elle a dit OUI ! 🎉🎉🎉');
    setCurrentScreen('success');
  };

  const handleNoFinal = () => {
    setResponseGiven(true);
    notifyOwner(`${params.sender} a dit Non... (après avoir insisté) 💔`, 'Elle a dit Non... (après avoir insisté) 💔');
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
