import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Question = ({ sender, receiver, onYes, onNo }) => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noCount, setNoCount] = useState(0);

  const handleNoHover = () => {
    if (noCount < 2) {
      const x = Math.random() * 200 - 100; // Random x between -100 and 100
      const y = Math.random() * 200 - 100; // Random y between -100 and 100
      setNoButtonPosition({ x, y });
      setNoCount(prev => prev + 1);
    }
  };

  const handleNoClick = () => {
      if (noCount < 2) {
          handleNoHover();
      } else {
          onNo();
      }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="question-container"
    >
      <h1>{receiver}, veux-tu être ma Valentine ?</h1>
      <p>Envoyé avec ❤️ par {sender}</p>
      
      <div className="buttons-container" style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '2rem' }}>
        <button className="btn-primary" onClick={onYes}>
          OUI ! 😍
        </button>
        
        <motion.button
          className="btn-secondary"
          animate={noButtonPosition}
          onMouseEnter={handleNoHover}
          onClick={handleNoClick}
          whileTap={{ scale: 0.9 }}
        >
          Non 😢
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Question;
