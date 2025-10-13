import React from 'react';

// Data is kept for reference and future use.
const education = [
  {
    title: 'Curso de Especialización de Ciberseguridad en Entornos de las Tecnologías de la Información',
    institution: 'CIFP Juan de Colonia (Burgos)',
    date: 'septiembre 2024 - junio 2025',
  },
  {
    title: 'Grado Superior de Técnico en Administración de Sistemas Informáticos en Red (ASIR)',
    institution: 'CIFP de Ponferrada',
    date: 'septiembre 2022 - junio 2024',
  },
  {
    title: 'Grado Medio de Técnico en Sistemas Microinformáticos y Redes (SMR)',
    institution: 'CIFP de Ponferrada',
    date: 'septiembre 2020 - junio 2022',
  },
];

const experience = [
    {
    title: 'Técnico Informático, SmartDragon',
    institution: 'ETT Ananda, Veguellina de Órbigo (León)',
    date: 'septiembre 2025 - actual',
  },
  {
    title: 'Manipulador textil, ThinkTextil León',
    institution: 'ETT Empatif, Villadangos del Páramo (León)',
    date: 'julio 2025 - septiembre 2025',
  },
  {
    title: 'Cajero, DIA RETAIL',
    institution: 'Astorga (León)',
    date: 'julio 2024 - septiembre 2024',
  },
  {
    title: 'Prácticas, UNED Ponferrada',
    institution: 'Ponferrada (León)',
    date: 'abril 2024 - junio 2024',
  },
   {
    title: 'Prácticas Erasmus, BBS Italia',
    institution: 'Brescia (Italia)',
    date: 'julio 2022 - septiembre 2022',
  },
  {
    title: 'Prácticas, IP Informática',
    institution: 'Ponferrada (León)',
    date: 'abril 2022 - junio 2022',
  },
];

// We only need the most recent entries for the preview
const latestExperience = experience[0];
const latestEducation = education[0];

const CV: React.FC = () => {
  return (
    <section id="cv" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-center mb-4 text-cyan-400">Un Vistazo a mi Trayectoria</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Aquí puedes ver un resumen de mi experiencia y formación más reciente.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          {/* Latest Experience Card */}
          <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700/50 shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
            <h3 className="text-xl font-bold text-white mb-3">Experiencia Reciente</h3>
            <div className="flex-grow">
              <h4 className="text-lg font-semibold text-cyan-300">{latestExperience.title}</h4>
              <p className="text-gray-400 mb-1">{latestExperience.institution}</p>
            </div>
            <p className="text-sm text-gray-500 mt-2">{latestExperience.date}</p>
          </div>

          {/* Latest Education Card */}
          <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700/50 shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
            <h3 className="text-xl font-bold text-white mb-3">Formación Reciente</h3>
             <div className="flex-grow">
                <h4 className="text-lg font-semibold text-cyan-300">{latestEducation.title}</h4>
                <p className="text-gray-400 mb-1">{latestEducation.institution}</p>
            </div>
            <p className="text-sm text-gray-500 mt-2">{latestEducation.date}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
