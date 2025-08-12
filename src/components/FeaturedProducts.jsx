import { motion } from 'framer-motion';
import React, { useState } from 'react';

const FeaturedProducts = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);

  const fruitProducts = [
    // Citrus Fruits
    {
      id: 1,
      name: "Sunshine Orange",
      description: "Cold-pressed Valencia oranges with vitamin C boost",
      price: "$8.99",
      category: "citrus",
      emoji: "🍊",
      bgColor: "rgba(190, 144, 59, 0.45)",
      image: "https://images.unsplash.com/photo-1557800636-894a64c1696f",
      rating: 4.8
    },
    {
      id: 2,
      name: "Lemon Zest",
      description: "Tart lemon juice with a hint of mint and honey",
      price: "$7.99",
      category: "citrus",
      emoji: "🍋",
      bgColor: "rgba(153, 153, 80, 0.47)",
      image: "https://images.unsplash.com/photo-1519625149185-7626ff3a86bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxlbW9ufGVufDB8fDB8fHww",
      rating: 4.5
    },

    // Berries
    {
      id: 3,
      name: "Berry Blast",
      description: "Mixed berries with acai and pomegranate",
      price: "$10.99",
      category: "berry",
      emoji: "🫐",
      bgColor: "rgba(156, 89, 182, 0.43)",
      image: "https://images.unsplash.com/photo-1689249876759-10ff4bc9f189?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlcnJ5JTIwYmxhc3R8ZW58MHx8MHx8fDA%3D",
      rating: 4.9
    },
    {
      id: 4,
      name: "Strawberry Dream",
      description: "Fresh strawberries blended with banana",
      price: "$9.49",
      category: "berry",
      emoji: "🍓",
      bgColor: "rgba(255, 105, 180, 0.47)",
      image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6",
      rating: 4.7
    },

    // Tropical
    {
      id: 5,
      name: "Tropical Sunrise",
      description: "Mango, pineapple, and passionfruit blend",
      price: "$11.99",
      category: "tropical",
      emoji: "🏝️",
      bgColor: "rgba(243, 157, 18, 0.38)",
      image: "https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6",
      rating: 4.8
    },
    {
      id: 6,
      name: "Coconut Breeze",
      description: "Fresh coconut water with pineapple and lime",
      price: "$10.49",
      category: "tropical",
      emoji: "🥥",
      bgColor: "rgba(210, 180, 140, 0.47)",
      image: "https://images.unsplash.com/photo-1560769680-ba2f3767c785?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.6
    },

    // Melons
    {
      id: 7,
      name: "Watermelon Chill",
      description: "Pure watermelon juice with mint leaves",
      price: "$8.99",
      category: "melon",
      emoji: "🍉",
      bgColor: "rgba(255, 99, 71, 0.33)",
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.7
    },
    {
      id: 8,
      name: "Honeydew Harmony",
      description: "Refreshing honeydew melon with cucumber",
      price: "$9.99",
      category: "melon",
      emoji: "🍈",
      bgColor: "rgba(144, 238, 144, 0.32)",
      image: "https://images.unsplash.com/photo-1542843137-8791a6904d14",
      rating: 4.5
    },

    // Apples
    {
      id: 9,
      name: "Apple Spice",
      description: "Crisp apple with cinnamon and ginger",
      price: "$7.99",
      category: "apple",
      emoji: "🍎",
      bgColor: "rgba(255, 68, 0, 0.16)",
      image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb",
      rating: 4.4
    },
    {
      id: 10,
      name: "Green Apple Zing",
      description: "Tart green apple with lime and mint",
      price: "$8.49",
      category: "apple",
      emoji: "🍏",
      bgColor: "rgba(126, 252, 0, 0.29)",
      image: "https://images.unsplash.com/photo-1577028300036-aa112c18d109?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.6
    },

    // Exotic
    {
      id: 11,
      name: "Dragonfruit Delight",
      description: "Vibrant dragonfruit with pear and lime",
      price: "$12.99",
      category: "exotic",
      emoji: "🐉",
      bgColor: "rgba(255, 105, 180, 0.32)",
      image: "https://images.unsplash.com/photo-1698546690393-45482eb06942?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.9
    },
    {
      id: 12,
      name: "Kiwi Cooler",
      description: "Tropical kiwi with green apple and spinach",
      price: "$10.99",
      category: "exotic",
      emoji: "🥝",
      bgColor: "rgba(153, 205, 50, 0.23)",
      image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba",
      rating: 4.7
    }
  ];

  const filteredProducts = activeFilter === 'All' 
    ? fruitProducts 
    : fruitProducts.filter(product => product.category === activeFilter.toLowerCase());

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15
      }
    },
    hover: {
      y: -15,
      scale: 1.02,
      boxShadow: "10px 25px 50px -12px rgba(10, 10, 10, 0.15)",
      transition: {
        type: 'spring',
        stiffness: 400
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#4ade80",
      boxShadow: "0 4px 14px rgba(74, 222, 128, 0.4)"
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <motion.section 
      className="featured-products"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="fruit-pattern"></div>
      
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
        className="featured-header"
      >
        <h2>Fresh Fruit Juices</h2>
        <p>Cold-pressed, organic, and packed with nutrients. Choose from our vibrant selection of fruit juices.</p>
      </motion.div>
      
      <motion.div 
        className="product-filters"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {['All', 'Citrus', 'Berry', 'Tropical', 'Melon', 'Apple', 'Exotic'].map((filter) => (
          <motion.button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: activeFilter === filter ? "#4ade80" : "#f8fafc",
              color: activeFilter === filter ? "white" : "#1e293b",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            className={activeFilter === filter ? 'active' : ''}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {filter}
          </motion.button>
        ))}
      </motion.div>
      
      <motion.div 
        className="products-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProducts.map((product) => (
          <motion.div 
            key={product.id}
            className="product-card"
            variants={cardVariants}
            whileHover="hover"
            onHoverStart={() => setHoveredCard(product.id)}
            onHoverEnd={() => setHoveredCard(null)}
            style={{ backgroundColor: product.bgColor }}
          >
            <motion.div 
              className="product-image-container"
              variants={imageVariants}
              whileHover="hover"
            >
              <motion.img 
                src={product.image} 
                alt={product.name}
                className="product-image"
                animate={{
                  scale: hoveredCard === product.id ? 1.1 : 1
                }}
                transition={{ duration: 0.4 }}
              />
              <motion.div 
                className="product-emoji"
                animate={{
                  scale: hoveredCard === product.id ? 1.3 : 1,
                  rotate: hoveredCard === product.id ? [0, 5, -5, 0] : 0,
                  y: hoveredCard === product.id ? -10 : 0
                }}
                transition={{ 
                  type: 'spring',
                  stiffness: 500,
                  damping: 10
                }}
              >
                {product.emoji}
              </motion.div>
              <div className="product-rating">
                ⭐ {product.rating}
              </div>
            </motion.div>
            
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              
              <div className="price-addtocart">
                <p className="price">{product.price}</p>
                <motion.button 
                  className="add-to-cart"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Add to Cart
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default FeaturedProducts;