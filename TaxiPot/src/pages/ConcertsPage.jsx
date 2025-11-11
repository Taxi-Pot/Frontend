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
        title={<img src="/header_logo.png" alt="TaxiPot 로고" className="h-6" />}
        showBack={false}
        showMy={true}
        onMyClick={() => navigate('my')}
      />

      {/* 현재 약속 표시 */}
      <div className="px-4 mt-4 mb-2">
        <p className="text-gray-500 font-bold text-lg">
          현재 진행 중인 콘서트  <span className="text-buttonBlue font-bold">{concerts.length}</span>
        </p>
      </div>

      {/* 콘서트 카드 리스트 */}
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