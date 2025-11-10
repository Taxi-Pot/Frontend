import React, { useState } from 'react';
import { X } from 'lucide-react';
import Header from '../components/Header';

const WritePage = ({ navigate }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    price: '',
    time: '',
    startLocation: '',
    endLocation: '',
    meetingTime: '',
    maxPeople: '',
    memo: ''
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('게시글 작성:', formData);
    navigate('posts');
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <Header 
        title="역속 게시"
        leftButton={{ 
          icon: <X className="w-6 h-6" />, 
          onClick: () => navigate('posts') 
        }}
        rightButton={{ 
          text: '완료', 
          onClick: handleSubmit 
        }}
      />

      <div className="p-4">
        <input 
          type="text" 
          placeholder="제목을 입력해주세요"
          value={formData.title}
          onChange={(e) => handleChange('title', e.target.value)}
          className="w-full p-3 border-b mb-4 text-lg font-semibold focus:outline-none focus:border-blue-500"
        />
        
        <textarea 
          placeholder="내용을 입력해주세요"
          value={formData.content}
          onChange={(e) => handleChange('content', e.target.value)}
          className="w-full p-3 border-b mb-6 h-32 resize-none focus:outline-none focus:border-blue-500"
        />

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              가격정보
            </label>
            <input 
              type="text" 
              placeholder="예: 15,000원"
              value={formData.price}
              onChange={(e) => handleChange('price', e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                출발 시간
              </label>
              <input 
                type="text" 
                placeholder="22:00"
                value={formData.time}
                onChange={(e) => handleChange('time', e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                최대 인원
              </label>
              <input 
                type="text" 
                placeholder="4명"
                value={formData.maxPeople}
                onChange={(e) => handleChange('maxPeople', e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                출발지
              </label>
              <input 
                type="text" 
                placeholder="잠실종합운동장"
                value={formData.startLocation}
                onChange={(e) => handleChange('startLocation', e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                도착지
              </label>
              <input 
                type="text" 
                placeholder="인천 부평구"
                value={formData.endLocation}
                onChange={(e) => handleChange('endLocation', e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              만남 예정 일시
            </label>
            <input 
              type="text" 
              placeholder="2025.12.20 22:00"
              value={formData.meetingTime}
              onChange={(e) => handleChange('meetingTime', e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              메모 (선택)
            </label>
            <textarea 
              placeholder="추가 정보를 입력하세요"
              value={formData.memo}
              onChange={(e) => handleChange('memo', e.target.value)}
              className="w-full p-3 border rounded-lg h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritePage;