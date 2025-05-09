import React from "react";
import "../styles/HeroSection.css";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <motion.div 
        className="hero-section-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Unlock the Value of Your Software</h1>
        <p>Empower your business with cutting-edge software solutions. We provide tailored services to meet your unique needs.</p>
        <motion.button 
          className="get-quote-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Quote
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;