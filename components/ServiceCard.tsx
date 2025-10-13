
import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700/50 shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2">
      <div className="text-cyan-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
