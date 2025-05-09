import React from "react";
import { FaUserCircle } from "react-icons/fa"; // Single icon for all
import "../styles/Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <div className="icon-wrapper testimonial-client">
            <FaUserCircle />
          </div>
          <h3>John Doe</h3>
          <p>"SoftSell has transformed the way we do business."</p>
          <div className="rating">★★★★★</div>
        </div>
        <div className="testimonial-card">
          <div className="icon-wrapper testimonial-service">
            <FaUserCircle />
          </div>
          <h3>Jane Smith</h3>
          <p>"Amazing service and support. Highly recommend!"</p>
          <div className="rating">★★★★★</div>
        </div>
        <div className="testimonial-card">
          <div className="icon-wrapper testimonial-experience">
            <FaUserCircle />
          </div>
          <h3>Michael Johnson</h3>
          <p>"A seamless experience from start to finish!"</p>
          <div className="rating">★★★★★</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;