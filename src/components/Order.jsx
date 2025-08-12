import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const OrderPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    juice: 'Green Detox',
    quantity: 1,
    deliveryDate: '',
    specialInstructions: ''
  });

  const juiceOptions = [
    'Green Detox',
    'Sunrise Citrus',
    'Berry Blast',
    'Tropical Immunity',
    'Root Remedy'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Order submitted:', formData);
    navigate('/order-confirmation', { 
      state: { 
        orderId: `ORD-${Date.now()}`,
        details: formData
      } 
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="order-container"
    >
      <motion.div 
        className="order-header"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Fresh Juice Order
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Fill out the form below to get your daily dose of wellness
        </motion.p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="order-form"
      >
        {/* Name Field */}
        <motion.div 
          className="form-group"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
          />
        </motion.div>

        {/* Email Field */}
        <motion.div 
          className="form-group"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
          />
        </motion.div>

        {/* Juice Selection */}
        <motion.div 
          className="form-group"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <label>Juice Selection</label>
          <select
            name="juice"
            value={formData.juice}
            onChange={handleChange}
            required
          >
            {juiceOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </motion.div>

        {/* Quantity */}
        <motion.div 
          className="form-group"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <label>Quantity</label>
          <motion.div className="quantity-selector">
            <motion.button
              type="button"
              onClick={() => setFormData({...formData, quantity: Math.max(1, formData.quantity - 1)})}
              whileTap={{ scale: 0.9 }}
              className="quantity-btn"
            >
              -
            </motion.button>
            <span>{formData.quantity}</span>
            <motion.button
              type="button"
              onClick={() => setFormData({...formData, quantity: formData.quantity + 1})}
              whileTap={{ scale: 0.9 }}
              className="quantity-btn"
            >
              +
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Delivery Date */}
        <motion.div 
          className="form-group"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <label>Delivery Date</label>
          <input
            type="date"
            name="deliveryDate"
            value={formData.deliveryDate}
            onChange={handleChange}
            required
            min={new Date().toISOString().split('T')[0]}
          />
        </motion.div>

        {/* Special Instructions */}
        <motion.div 
          className="form-group"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <label>Special Instructions</label>
          <textarea
            name="specialInstructions"
            value={formData.specialInstructions}
            onChange={handleChange}
            placeholder="Allergies, delivery notes, etc."
          />
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="submit-btn"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 5px 15px rgba(46, 204, 113, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          Place Order
        </motion.button>
      </motion.form>

      <motion.button
        onClick={() => navigate(-1)}
        className="back-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back to Menu
      </motion.button>
    </motion.div>
  );
};

export default OrderPage;