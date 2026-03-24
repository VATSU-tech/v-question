import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Intro = ({ onComplete }) => {
  const [textIndex, setTextIndex] = useState(0);
  
  const messages = [
    "Salut...",
    "Tu sais que je vais droit au but",
    "Donc...",
    "Je sais que tu t'en doute deja",
    "mais bon...",
    "Depuis un moment,",
    "je pense à toi...",
    "À ton sourire...",
    "À ta gentillesse...",
    "À ta façon de voir les choses...",
    "À ta façon d'etre'...",
    "À ton charme...",
    "Et aujourd'hui, je repete.",
    "Bref..."
  ];

  useEffect(() => {
    if (textIndex < messages.length) {
      const timer = setTimeout(() => {
        setTextIndex(prev => prev + 1);
      }, 3000); // 2.5s per message
      return () => clearTimeout(timer);
    } else {
      setTimeout(onComplete, 1000);
    }
  }, [textIndex, messages.length, onComplete]);

  return (
    <div className="intro-container">
      {textIndex < messages.length && (
        <motion.div
            key={textIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="intro-text"
        >
          <h1>{messages[textIndex]}</h1>
        </motion.div>
      )}
    </div>
  );
};

export default Intro;
