import React from "react";
import { FaUpload, FaChartLine, FaMoneyBillWave } from "react-icons/fa";
import "../styles/HowItWorks.css";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="how-it-works-steps">
        <div className="how-it-works-step">
          <div className="step-icon upload-icon">
            <FaUpload />
          </div>
          <h3>Upload License</h3>
          <p>Submit your software license details through our secure portal.</p>
        </div>
        <div className="how-it-works-step">
          <div className="step-icon valuation-icon">
            <FaChartLine />
          </div>
          <h3>Get Valuation</h3>
          <p>Receive a free, no-obligation valuation of your licenses.</p>
        </div>
        <div className="how-it-works-step">
          <div className="step-icon payment-icon">
            <FaMoneyBillWave />
          </div>
          <h3>Get Paid</h3>
          <p>Accept our offer and get paid quickly and securely.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;