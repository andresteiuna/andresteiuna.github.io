import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, githubUrl }) => {
  return (
    <a 
      href={githubUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label={`Ver el proyecto ${title} en GitHub`}
      className="group block bg-gray-800/50 rounded-lg border border-gray-700/50 shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
    >
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={`Imagen del proyecto ${title}`} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;