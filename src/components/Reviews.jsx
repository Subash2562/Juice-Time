import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Reviews = () => {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const testimonials = [
    {
      id: 1,
      text: "The best juice I have ever tested! Fresh, natural, and incredibly delicious.",
      author: "Sarah Johnson",
      role: "Health Coach",
      rating: 5
    },
    {
      id: 2,
      text: "I've been a customer for 2 years and can't imagine my mornings without JuiceTime.",
      author: "Michael Chen",
      role: "Fitness Trainer",
      rating: 5
    },
    {
      id: 3,
      text: "The Green Detox Power is my daily essential. Noticeable energy boost!",
      author: "Emily Rodriguez",
      role: "Nutritionist",
      rating: 4
    }
  ];

  const subscriptionPlans = [
    {
      name: "Basic Plan",
      price: "$29.99/month",
      features: [
        "5 premium juices per week",
        "Free express delivery",
        "Mix and match flavors",
        "Nutritional guidance"
      ],
      popular: false,
      color: "#8BC34A"
    },
    {
      name: "Popular Plan",
      price: "$49.99/month",
      features: [
        "10 premium juices per week",
        "Free express delivery",
        "Mix and match flavors",
        "1 free cleanse per month",
        "Personalized recommendations"
      ],
      popular: true,
      color: "#4CAF50"
    },
    {
      name: "Premium Plan",
      price: "$79.99/month",
      features: [
        "20 premium juices per week",
        "Free express delivery",
        "Mix and match flavors",
        "2 free cleanses per month",
        "Priority customer service",
        "Exclusive seasonal flavors"
      ],
      popular: false,
      color: "#388E3C"
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardHover = {
    scale: 1.03,
    y: -10,
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    transition: { type: "spring", stiffness: 300 }
  };

  const juiceDrop = {
    hidden: { y: -100, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    })
  };

  return (
    <div className="reviews-page" ref={ref}>
      {/* Animated Juice Drops Background */}
      <div className="juice-drops">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="drop"
            custom={i}
            initial="hidden"
            animate={controls}
            variants={juiceDrop}
            style={{
              left: `${10 + i * 10}%`,
              backgroundColor: i % 2 ? '#8BC34A' : '#FFC107'
            }}
          />
        ))}
      </div>

      {/* Hero Section with Parallax */}
      <motion.section 
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="hero-content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            Fresh <span className="highlight">Juices</span>,<br />
            Happy <span className="highlight">Customers</span>
          </motion.h1>
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Discover why thousands choose JuiceTime for their daily wellness
          </motion.p>
          <motion.div
            className="scroll-indicator"
            animate={{
              y: [0, 15, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg width="30" height="30" viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5z" fill="white" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        className="testimonials"
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <h2>
            <span className="section-title">Customer</span>
            <span className="section-title-accent"> Voices</span>
          </h2>
          <p className="subtitle">Join thousands of satisfied customers who love our fresh juices</p>
        </motion.div>
        
        <motion.div 
          className="testimonials-grid"
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id} 
              className="testimonial-card"
              variants={fadeInUp}
              whileHover={cardHover}
              initial="hidden"
              animate={controls}
            >
              <div className="quote-icon">“</div>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < testimonial.rating ? 'star filled' : 'star'}>
                    ★
                  </span>
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="author-info">
                <div className="author-avatar" style={{ 
                  backgroundImage: `url(https://i.pravatar.cc/100?img=${testimonial.id})` 
                }} />
                <div>
                  <p className="testimonial-author">{testimonial.author}</p>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Subscription Plans Section */}
      <motion.section 
        className="subscription-plans"
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <h2>
            <span className="section-title">Juice</span>
            <span className="section-title-accent"> Plans</span>
          </h2>
          <p className="subtitle">Flexible subscription plans to fit your healthy lifestyle</p>
        </motion.div>
        
        <motion.div 
          className="plans-grid"
          variants={staggerContainer}
        >
          {subscriptionPlans.map((plan, index) => (
            <motion.div 
              key={index} 
              className={`plan-card ${plan.popular ? 'popular' : ''}`}
              variants={fadeInUp}
              whileHover={cardHover}
              initial="hidden"
              animate={controls}
              style={{ borderTopColor: plan.color }}
            >
              {plan.popular && (
                <motion.div 
                  className="popular-badge"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Most Popular
                </motion.div>
              )}
              
              <div className="plan-header" style={{ backgroundColor: plan.color }}>
                <h3>{plan.name}</h3>
                <p className="price">{plan.price}</p>
              </div>
              
              <ul className="features">
                {plan.features.map((feature, i) => (
                  <motion.li 
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <svg className="feature-icon" viewBox="0 0 20 20">
                      <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"></path>
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </ul>
              
              <motion.button 
                className="subscribe-btn"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                style={{ backgroundColor: plan.color }}
              >
                Subscribe Now
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Floating Juice Elements */}
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
    </div>
  );
};

export default Reviews;