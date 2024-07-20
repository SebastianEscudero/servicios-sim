import React from 'react';

const SolutionsSection = () => {
  return (
    <div className="lg:py-10 mb-12 xl:mx-[10%] mx-[2%] text-[#1c1c1e] p-4">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Our Solutions for Enhanced Safety and Efficiency</h2>
        <p className="text-gray-600">
          At Triton, we are dedicated to enhancing safety and operational efficiency in mining and industrial sectors. Dive into our specialized solutions:
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <SolutionCard 
          title="Collision Avoidance"
          description="Enhance safety and prevent accidents with our advanced collision avoidance systems, designed for mining and industrial equipment to minimize the risk of vehicle interactions."
          icon="🏗️"
          color="bg-orange-400"
        />
        <SolutionCard 
          title="Fatigue Management"
          description="Address the critical issue of operator fatigue with our fatigue management solutions, utilizing innovative technology to monitor and manage fatigue levels for safer operations."
          icon="💺"
          color="bg-gray-200"
        />
        <SolutionCard 
          title="Remote Analytics"
          description="Leverage the power of remote analytics to gain real-time insights into your operations, enabling data-driven decisions for improved efficiency and safety."
          icon="🚧"
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