
import React from 'react';
import AnimatedBackground from './AnimatedBackground';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 p-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
          Andrés Teixeira de Uña
        </h1>
        <p className="font-roboto-mono text-lg md:text-2xl text-cyan-400 mb-8 drop-shadow-md">
          Soluciones Informáticas Innovadoras
        </p>
        <button 
          onClick={scrollToContact}
          className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30">
          Contacta Ahora
        </button>
      </div>
    </section>
  );
};

export default Hero;
