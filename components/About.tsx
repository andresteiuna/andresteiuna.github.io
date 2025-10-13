
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Sobre Mí</h2>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/3 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Andrés Teixeira de Uña trabajando en su ordenador" 
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-cyan-500 shadow-lg shadow-cyan-500/20"
            />
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-4">¡Hola! Soy Andrés Teixeira de Uña</h3>
            <p className="text-gray-300 leading-relaxed">
              Apasionado por la tecnología y la resolución de problemas. Con años de experiencia en el sector informático, mi objetivo es ofrecer soluciones eficientes y personalizadas. Me especializo en la reparación y optimización de ordenadores, así como en la enseñanza, ayudando a las personas a comprender y dominar las herramientas digitales.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Mi filosofía se basa en la honestidad, la transparencia y el compromiso con cada cliente. Ya sea que necesites revivir tu viejo PC, aprender desde cero o mejorar tus habilidades, estoy aquí para ayudarte a alcanzar tus metas tecnológicas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
