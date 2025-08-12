import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const socialMedia = [
    { name: "Facebook", icon: "📘", url: "#" },
    { name: "Instagram", icon: "📷", url: "#" },
    { name: "Twitter", icon: "🐦", url: "#" },
    { name: "YouTube", icon: "▶️", url: "#" }
  ];

  return (
    <motion.div 
      className="contact-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Floating Juice Elements */}
      <motion.div 
        className="floating-juice green"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="floating-juice orange"
        animate={{
          y: [0, -30, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="contact-container" ref={ref}>
        <motion.div 
          className="contact-header"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          <motion.h1 variants={fadeIn}>
            Get In <span>Touch</span>
          </motion.h1>
          <motion.p variants={fadeIn}>
            Have questions? We would love to hear from you.
          </motion.p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            <motion.div className="info-card" variants={fadeIn}>
              <div className="info-icon">📍</div>
              <h3>Address</h3>
              <p>123 Fresh Street</p>
              <p>Juice City, JC 12345</p>
              <p>United States</p>
            </motion.div>

            <motion.div className="info-card" variants={fadeIn}>
              <div className="info-icon">📞</div>
              <h3>Phone</h3>
              <p>+1 (353) 123-4567</p>
            </motion.div>

            <motion.div className="info-card" variants={fadeIn}>
              <div className="info-icon">✉️</div>
              <h3>Email</h3>
              <p>hello@juicetime.com</p>
            </motion.div>
          </motion.div>

          <motion.form 
            className="contact-form"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div 
              className="form-group"
              whileHover={{ scale: 1.02 }}
            >
              <label>First Name</label>
              <input type="text" placeholder="John" />
            </motion.div>

            <motion.div 
              className="form-group"
              whileHover={{ scale: 1.02 }}
            >
              <label>Last Name</label>
              <input type="text" placeholder="Doe" />
            </motion.div>

            <motion.div 
              className="form-group"
              whileHover={{ scale: 1.02 }}
            >
              <label>Email</label>
              <input type="email" placeholder="john@example.com" />
            </motion.div>

            <motion.div 
              className="form-group"
              whileHover={{ scale: 1.02 }}
            >
              <label>Subject</label>
              <input type="text" placeholder="How can we help you?" />
            </motion.div>

            <motion.div 
              className="form-group"
              whileHover={{ scale: 1.02 }}
            >
              <label>Message</label>
              <textarea placeholder="Tell us more about your inquiry..."></textarea>
            </motion.div>

            <motion.button 
              type="submit" 
              className="submit-button"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(46, 204, 113, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>

        <motion.div 
          className="social-media"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3>Follow Us</h3>
          <div className="social-icons">
            {socialMedia.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                className="social-icon"
                whileHover={{ 
                  y: -5,
                  scale: 1.1
                }}
              >
                <span role="img" aria-label={social.name}>
                  {social.icon}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;