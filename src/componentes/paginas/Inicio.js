import React from 'react';
import '../../App.css';
import Tarjeta from '../Tarjeta';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Tarjeta/>
      <Footer/>
    </>
  );
}

export default Home;