import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400 cursor-pointer" onClick={() => scrollToSection('hero')}>
          Andrés Teixeira de Uña
        </h1>
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Sobre mí</button>
          <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Servicios</button>
          <button onClick={() => scrollToSection('cv')} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Currículum</button>
          <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Mis Proyectos</button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Contacto</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;