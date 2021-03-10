import React from 'react';
import '../App.css';
import { Button } from './Botones';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
     <video src='/videos/video-4.mp4' autoPlay loop muted /> 
      <h1>LA AVENTURA ESPERA</h1>
      <p>¿Que estas esperando?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          EMPEZAR
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Ver los Calzados <i className='fas fa-eye' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;