import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';

const Success = ({ params }) => {
  useEffect(() => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const random = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: random(0.1, 0.3), y: random(0.1, 0.3) } });
      confetti({ ...defaults, particleCount, origin: { x: random(0.7, 0.9), y: random(0.1, 0.3) } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const whatsappMessage = encodeURIComponent(`Oui ${params.sender} ! Je veux sortir avec toi ! ❤️`);
  const whatsappLink = `https://api.whatsapp.com/send?phone=+243995716294&text=${whatsappMessage}`;
  
  const mailSubject = encodeURIComponent("C'est un grand OUI !");
  const mailBody = encodeURIComponent(`Coucou ${params.sender},\n\nJ'ai vu ta jolie demande et... OUI, je veux sortir avec toi ! ❤️\n\nBisous,\n${params.receiver}`);
  const mailToLink = `mailto:${params.email || ''}?subject=${mailSubject}&body=${mailBody}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="success-container"
    >
      <h1>Yaaaaay !!! ❤️❤️❤️</h1>
      <p>Tu as fait de moi la personne la plus heureuse !</p>
      <div className="contact-options" style={{ marginTop: '2rem' }}>
          <p>Confirme-lui la bonne nouvelle :</p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <button className="btn-primary" style={{ backgroundColor: '#25D366' }}>
                Envoyer par WhatsApp 💬
              </button>
            </a>
            {params.email && (
              <a href={mailToLink}>
                <button className="btn-secondary">
                  Envoyer un Email 📧
                </button>
              </a>
            )}
          </div>
      </div>
      <img 
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3hveXU0b3V4eXU0b3V4eXU0b3V4eXU0b3V4eXU0b3V4eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRv0ThflsHCqDrG/giphy.gif" 
        alt="Celebration" 
        style={{ maxWidth: '100%', borderRadius: '15px', margin: '1rem 0', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
      />
    </motion.div>
  );
};

export default Success;
