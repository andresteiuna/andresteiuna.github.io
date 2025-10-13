import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-cyan-400">¿Hablamos?</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Si tienes alguna duda, necesitas un presupuesto o simplemente quieres charlar sobre tu próximo proyecto tecnológico, no dudes en contactarme.
        </p>
        <a
          href="mailto:andresteixe@outlook.com"
          aria-label="Enviar correo a andresteixe@outlook.com"
          className="group inline-block bg-gray-900/50 rounded-lg p-6 border border-gray-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
        >
          <div className="flex items-center justify-center space-x-4 text-lg text-cyan-300 font-roboto-mono group-hover:text-cyan-400 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>andresteixe@outlook.com</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
