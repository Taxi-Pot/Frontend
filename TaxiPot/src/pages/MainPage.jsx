import React from 'react';

const MainPage = ({ navigate }) => {
  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-8"
    style={{ backgroundImage: "url('/background.png')" }}>
      
      {/* 화면 중앙 로고 */}
      <div className="flex-1 flex items-center justify-center">
        <img 
          src="/login_page_logo.png" 
          alt="TaxiPot 로고" 
          className="h-24 object-contain"
        />
      </div>

      {/* 버튼 위 말풍선 */}
      <div className="bg-white text-gray-500 px-4 py-2 rounded-lg mb-3 shadow-md relative animate-float">
        나랑 같이 택시탈래?
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
      </div>

      {/* 카카오 로그인 버튼 */}
      <button 
      onClick={() => navigate('concerts')}
      className="w-full rounded-lg py-2 px-4 flex items-center justify-center mb-6">
        <img src="/kakao_login_large_wide.png" alt="카카오 로그인" className="h-15" />
      </button>
    </div>
  );
};

export default MainPage;