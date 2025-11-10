import React from 'react';

const MainPage = ({ navigate }) => {
  return (
    <div className="min-h-screen bg-blue-200 flex flex-col items-center justify-center p-8">
      <h1 className="text-6xl font-bold text-white mb-16">TaxiPot!</h1>
      
      <div className="space-y-4 w-full max-w-md">
        <button className="w-full bg-white rounded-lg py-4 px-6 text-left text-gray-700 hover:bg-gray-50 transition">
          나랑 같이 택시탈래!?
        </button>
        
        <button 
          onClick={() => navigate('concerts')}
          className="w-full bg-yellow-400 rounded-lg py-4 px-6 flex items-center justify-center gap-2 font-semibold hover:bg-yellow-500 transition"
        >
          <span>💬</span> 카톡으로 로그인
        </button>
      </div>
    </div>
  );
};

export default MainPage;