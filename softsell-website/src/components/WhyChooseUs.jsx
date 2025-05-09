import React from "react";
import { FaAward, FaHeadset, FaDollarSign, FaShieldAlt } from "react-icons/fa"; // Added security icon
import "../styles/WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us</h2>
      <div className="why-choose-us-container">
        <div className="why-choose-us-item">
          <div className="icon-wrapper quality-icon">
            <FaAward />
          </div>
          <h3>High Quality</h3>
          <p>We provide top-notch software solutions.</p>
        </div>
        <div className="why-choose-us-item">
          <div className="icon-wrapper support-icon">
            <FaHeadset />
          </div>
          <h3>24/7 Support</h3>
          <p>Our team is always here to help you.</p>
        </div>
        <div className="why-choose-us-item">
          <div className="icon-wrapper value-icon">
            <FaDollarSign />
          </div>
          <h3>Great Value</h3>
          <p>Affordable pricing for premium services.</p>
        </div>
        <div className="why-choose-us-item">
          <div className="icon-wrapper security-icon">
            <FaShieldAlt />
          </div>
          <h3>Fast & Secure Transactions</h3>
          <p>Quick, hassle-free, and secure processing for your peace of mind.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;