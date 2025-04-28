import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import DashboardPreview from './components/DashboardPreview';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Solutions from './components/Solutions';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Solutions/>
      <DashboardPreview />
      <Testimonials />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;