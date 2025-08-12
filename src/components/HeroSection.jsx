import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom'; // Add this import

const HeroSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const navigate = useNavigate(); // Initialize navigation

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const juiceVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    }
  };

  return (
    <motion.section 
      className="hero"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Juice Elements */}
      <motion.div 
        className="juice-drop orange"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={juiceVariants}
        transition={{ delay: 0.2 }}
      />
      <motion.div 
        className="juice-drop green"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={juiceVariants}
        transition={{ delay: 0.4 }}
      />
      
      <div className="hero-content">
        <motion.h1 
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          Juice <span>Time</span>
        </motion.h1>
        
        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ delay: 0.3 }}
        >
          Every <span>Day</span>
        </motion.h2>
        
        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          Experience the pure taste of nature with our premium cold-pressed juices. 
          Made fresh daily with the finest organic ingredients.
        </motion.p>
        
        <motion.div 
          className="cta-buttons"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ delay: 0.5 }}
        >
          <motion.button 
            className="order-now"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(46, 204, 113, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/order')} // Add this onClick handler
          >
            Order Now
          </motion.button>
          <motion.button 
            className="learn-more"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(255,255,255,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/about')} // Optional: Link to about page
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;