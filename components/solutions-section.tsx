import React from 'react';

const SolutionsSection = () => {
  return (
    <div className="lg:py-10 mb-12 xl:mx-[10%] mx-[2%] text-[#1c1c1e] p-4">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Nuestras Soluciones para Optimizar su Operación</h2>
        <p className="text-gray-600">
          En Servicios Sim, ofrecemos una gama completa de servicios especializados para mantener y mejorar sus sistemas de transporte y equipos industriales.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className={`border-2 border-orange-600 p-6 rounded-lg shadow-custom-3 relative`}>
          <div className="absolute top-4 right-4 bg-yellow-400 p-1 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <div className="text-4xl mb-4">🏗️</div>
          <h3 className="text-xl font-semibold mb-2">Correas Transportadoras</h3>
          <p className="text-sm">Servicios completos de mantención, montaje, reparación y empalmes de correas transportadoras para asegurar el funcionamiento óptimo de sus sistemas de transporte.</p>
        </div>
        <SolutionCard
          title="Revestimientos en Frío"
          description="Protección duradera para superficies de trabajo en correas transportadoras, utilizando materiales de alta resistencia para prolongar la vida útil de sus equipos."
          icon="🛡️"
          color="bg-gray-200"
        />
        <SolutionCard
          title="Correas Electroimán"
          description="Diseño y fabricación de correas transportadoras con electroimán, adaptadas a las necesidades específicas de su operación para un desempeño óptimo."
          icon="🧲"
          color="bg-gray-200"
        />
      </div>
    </div>
  );
};

interface SolutionCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const SolutionCard = ({ title, description, icon, color }: SolutionCardProps) => {
  return (
    <div className={`${color} p-6 rounded-lg shadow-custom-3 relative`}>
      <div className="absolute top-4 right-4 bg-yellow-400 p-1 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default SolutionsSection;