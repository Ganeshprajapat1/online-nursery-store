import React from 'react';
import './Hero.css';
import hero_image from '../Assets/hero.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <p>A beautiful plant is <br></br>like having a friend around the house.</p>
      </div>
      <div className="hero-right">
        {/* Correct usage without curly braces */}
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
