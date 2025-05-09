import React, { useState } from "react";
import "./styles/global.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ContactForm from "./components/ContactForm";
import ChatWidget from "./components/ChatWidget";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <section id="hero"><HeroSection /></section>
      <section id="how-it-works"><HowItWorks /></section>
      <section id="why-choose-us"><WhyChooseUs /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="contact"><ContactForm /></section>
      <ChatWidget />
    </div>
  );
};

export default App;