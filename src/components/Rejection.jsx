import React from 'react';
import { motion } from 'framer-motion';

const Rejection = () => {
  // const whatsappMessage = encodeURIComponent(`Non ${params.sender} ! Je ne veux pas être ta ! 💔`);
  // const whatsappLink = `https://api.whatsapp.com/send?phone=+243995716294&text=${whatsappMessage}`;

  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="rejection-container"
    >
      <h1>Oh... 💔</h1>
      <p>Je comprends. Merci d'avoir été honnête.</p>
      <p>Mais c'est pas ca qui vas m'arreter</p>
      {/* <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button className="btn-primary" style={{ backgroundColor: '#25D366' }}>
          Envoyer par WhatsApp 💬
        </button>
      </a> */}
    </motion.div>
  );
};

export default Rejection;
