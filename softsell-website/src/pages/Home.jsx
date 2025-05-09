import React from 'react';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <Testimonials />
      <WhyChooseUs />
      <ContactForm />
    </div>
  );
};

export default Home;