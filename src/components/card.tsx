// components/HeroSection.tsx
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({ title, description, buttonText }) => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white p-10 rounded-lg shadow-lg mb-6">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-lg mb-4">{description}</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition-all duration-300">
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
