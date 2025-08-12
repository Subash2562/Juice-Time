import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stats = [
    { value: "50K+", label: "Happy Customers", icon: "😊" },
    { value: "100%", label: "Organic Ingredients", icon: "🌱" },
    { value: "20+", label: "Local Farms", icon: "🏡" },
    { value: "24h", label: "Freshness Guarantee", icon: "⏱️" }
  ];

  return (
    <motion.section 
      className="about-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Floating Juice Elements (Animated) */}
      <motion.div 
        className="floating-juice orange"
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
        className="floating-juice green"
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

      <div className="about-container" ref={ref}>
        <motion.div 
          className="about-content"
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
          <motion.div variants={fadeInUp}>
            <h2 className="section-subtitle">Our Journey</h2>
            <motion.h1 
              className="section-title"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Story of <span>Freshness</span>
            </motion.h1>
          </motion.div>

          <motion.div variants={fadeInUp} className="about-text">
            <motion.p
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Founded in 2020, JuiceTime began with a simple mission: to make fresh nutritious juices accessible to everyone. We source our fruits and vegetables from local organic farms, ensuring every bottle contains the purest ingredients.
            </motion.p>
            <motion.p
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.5 }}
            >
              Our <strong>cold-press technology</strong> preserves maximum nutrients and flavor, delivering juice that not only tastes incredible but nourishes your body from the inside out.
            </motion.p>
          </motion.div>

          <motion.div 
            className="stats-grid"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-card"
                variants={fadeInUp}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 15px 30px rgba(76, 175, 80, 0.2)"
                }}
              >
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
                <motion.span 
                  className="stat-icon"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  {stat.icon}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="about-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1546173159-315724a31696?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
            alt="Fresh juices" 
          />
          <div className="image-highlight"></div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;