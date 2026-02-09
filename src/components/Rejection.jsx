import React from 'react';
import { motion } from 'framer-motion';

const Rejection = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="rejection-container"
    >
      <h1>Oh... 💔</h1>
      <p>Je comprends. Merci d'avoir été honnête.</p>
      <p>Je te souhaite tout le bonheur du monde.</p>
    </motion.div>
  );
};

export default Rejection;
