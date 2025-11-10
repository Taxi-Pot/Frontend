import React from 'react';
import Header from '../components/Header';
import ConcertCard from '../components/ConcertCard';
import { concerts } from '../data/mockData';

const ConcertsPage = ({ navigate }) => {
  const handleConcertClick = (concert) => {
    navigate('posts', { concert });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header 
        title="TaxiPot!"
        subtitle="만남 시작시 · 콘서트"
        showBack={false}
        showMy={true}
        onMyClick={() => navigate('my')}
      />

      <div className="p-4 space-y-4">
        {concerts.map(concert => (
          <ConcertCard 
            key={concert.id}
            concert={concert}
            onClick={() => handleConcertClick(concert)}
          />
        ))}
      </div>
    </div>
  );
};

export default ConcertsPage;