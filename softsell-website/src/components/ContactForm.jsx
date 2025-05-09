import React, { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import "../styles/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    licenseType: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: "" }); // Clear errors on input change
  };

  const validateForm = () => {
    let tempErrors = {};

    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Valid email is required.";
    if (!formData.company.trim()) tempErrors.company = "Company name is required.";
    if (!formData.message.trim()) tempErrors.message = "Message cannot be empty.";
    if (!formData.licenseType.trim()) tempErrors.licenseType = "License type is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted:", formData);
      alert("Your message has been sent!");
      setFormData({ name: "", email: "", company: "", message: "", licenseType: "" });
    }
  };

  return (
    <section className="contact-form-section">
      <div className="container">
        <h2>Contact Us</h2>
        <p className="contact-description">We'd love to hear from you! Send us a message and we'll get back to you soon.</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <div className="input-field">
              <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="input-field">
              <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>
          <div className="input-field">
            <Input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company Name" required />
            {errors.company && <span className="error">{errors.company}</span>}
          </div>
          <div className="input-field">
            <select name="licenseType" value={formData.licenseType} onChange={handleChange} required>
              <option value="">Select License Type</option>
              <option value="basic">Basic</option>
              <option value="premium">Premium</option>
              <option value="enterprise">Enterprise</option>
            </select>
            {errors.licenseType && <span className="error">{errors.licenseType}</span>}
          </div>
          <div className="input-field">
            <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={5} required />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          
          <Button type="submit" className="submit-btn">Submit</Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;