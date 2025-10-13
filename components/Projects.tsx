import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Bot de Telegram para Administración Remota',
    description: 'Bot de telegram que permite gestionar nuestra red local y equipos locales de forma remota.',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/andresteiuna/Telegram_bot_administration'
  },
  {
    title: 'Gestor de Datasets IoC/IoA',
    description: 'Aplicación funcional diseñada para la gestión eficiente de datasets que incluyen Indicadores de Compromiso (IoC) e Indicadores de Ataque (IoA).',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/andresteiuna/IoC_IoA_dataset'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Mis Proyectos Recientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;