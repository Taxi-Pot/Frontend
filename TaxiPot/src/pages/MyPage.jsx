import React from 'react';
import Header from '../components/Header';

const MyPage = ({ navigate }) => {
  const userInfo = {
    name: '최사지',
    status: '어지',
    date: '2000.00.00',
    contact: '010-0000-0000',
    meeting: '예약 예정 일시',
    maxPeople: '최대 인원'
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header 
        title="마이페이지"
        showBack={true}
        onBackClick={() => navigate('concerts')}
      />

      <div className="p-4">
        {/* 프로필 섹션 */}
        <div className="bg-white rounded-lg p-6 shadow text-center mb-6">
          <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
          <button className="text-blue-500 font-semibold hover:text-blue-600">
            가입 정보
          </button>
        </div>

        {/* 정보 목록 */}
        <div className="bg-white rounded-lg shadow divide-y">
          <div className="flex justify-between items-center p-4 hover:bg-gray-50 cursor-pointer">
            <span className="text-gray-700">이름</span>
            <span className="text-gray-900 font-medium">{userInfo.name}</span>
          </div>
          
          <div className="flex justify-between items-center p-4 hover:bg-gray-50 cursor-pointer">
            <span className="text-gray-700">상태</span>
            <span className="text-gray-900 font-medium">{userInfo.status}</span>
          </div>
          
          <div className="flex justify-between items-center p-4 hover:bg-gray-50 cursor-pointer">
            <span className="text-gray-700">가입일</span>
            <span className="text-gray-900 font-medium">{userInfo.date}</span>
          </div>
          
          <div className="flex justify-between items-center p-4 hover:bg-gray-50 cursor-pointer">
            <span className="text-gray-700">연락정보</span>
            <span className="text-gray-900 font-medium">{userInfo.contact}</span>
          </div>
          
          <div className="flex justify-between items-center p-4 hover:bg-gray-50 cursor-pointer">
            <span className="text-gray-700">예약 상태</span>
            <span className="text-gray-900 font-medium">{userInfo.meeting}</span>
          </div>
          
          <div className="flex justify-between items-center p-4 hover:bg-gray-50 cursor-pointer">
            <span className="text-gray-700">참여 인원</span>
            <span className="text-gray-900 font-medium">{userInfo.maxPeople}</span>
          </div>
        </div>

        {/* 추가 메뉴 */}
        <div className="mt-6 bg-white rounded-lg shadow divide-y">
          <button className="w-full p-4 text-left hover:bg-gray-50">
            내가 작성한 글
          </button>
          <button className="w-full p-4 text-left hover:bg-gray-50">
            참여 중인 택시팟
          </button>
          <button className="w-full p-4 text-left hover:bg-gray-50">
            설정
          </button>
          <button className="w-full p-4 text-left text-red-500 hover:bg-gray-50">
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPage;