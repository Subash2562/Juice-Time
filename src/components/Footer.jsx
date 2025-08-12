import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.footer 
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={footerVariants}
    >
      {/* Floating decorative elements */}
      <div className="footer-decoration leaf"></div>
      <div className="footer-decoration drop"></div>
      
      <div className="footer-content">
        <motion.div className="footer-section about" variants={itemVariants}>
          <motion.h2 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Juice<span>Time</span>
          </motion.h2>
          <p>Fresh, organic, and delicious juice delivered to your door. Nourish your body with nature's best.</p>
          <div className="social-links">
            {['📘', '📷', '🐦', '▶️'].map((icon, index) => (
              <motion.span
                key={index}
                whileHover={{ y: -5, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {icon}
              </motion.span>
            ))}
          </div>
        </motion.div>
        
        <motion.div className="footer-section links" variants={itemVariants}>
          <h3>Quick Links</h3>
          <ul>
            {['Home', 'About Us', 'Products', 'Reviews', 'Contact'].map((link, index) => (
              <motion.li 
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to={`/${link.toLowerCase().replace(' ', '')}`}>{link}</Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div className="footer-section products" variants={itemVariants}>
          <h3>Products</h3>
          <ul>
            {['Citrus Juice', 'Green Detox', 'Berry Blender', 'Tropical Mix', 'Vegetable Juices'].map((product, index) => (
              <motion.li 
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {product}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div className="footer-section newsletter" variants={itemVariants}>
          <h3>Newsletter</h3>
          <p>Subscribe to get updates and special offers</p>
          <form>
            <motion.input 
              type="email" 
              placeholder="Your email address" 
              whileFocus={{ 
                boxShadow: "0 0 0 2px #4CAF50",
                borderColor: "#4CAF50"
              }}
            />
            <motion.button 
              type="submit"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(76, 175, 80, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </div>
      
      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p>&copy; {new Date().getFullYear()} JuiceTime. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;