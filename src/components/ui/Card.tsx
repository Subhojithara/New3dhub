import React from 'react';

interface CardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="relative p-6 bg-gradient-to-r from-white to-gray-100 shadow-lg rounded-lg cursor-pointer transition-all hover:shadow-2xl">
      <div className="relative z-10">
        <span className="flex items-center justify-center p-2 bg-white border border-gray-200 rounded-full shadow">
          {icon}
        </span>
        <h4 className="mt-3 text-lg font-semibold text-gray-900">{title}</h4>
        <p className="mt-1 text-sm text-gray-700">{description}</p>
      </div>
      <div className="absolute inset-0 z-0 overflow-hidden rounded-lg bg-gradient-to-br from-green-200 to-green-500 opacity-10"></div>
    </div>
  );
};

export default Card;
