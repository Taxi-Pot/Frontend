import React from 'react';
import { ChevronRight } from 'lucide-react';

const ConcertCard = ({ concert, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow cursor-pointer"
    >
      <img 
        src={concert.image} 
        alt={concert.title} 
        className="w-full h-48 object-cover"
        style={{ objectPosition: 'center 10%' }}
      />
      <div className="p-4 flex items-center justify-between">
        <div>
          <h3 className="font-bold text-lg">{concert.title}</h3>
          <p className="text-sm text-gray-600">{concert.subtitle}</p>
        </div>
        <ChevronRight className="w-6 h-6 text-gray-400" />
      </div>
    </div>
  );
};

export default ConcertCard;