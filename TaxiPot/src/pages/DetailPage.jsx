import React from 'react';
import { MoreVertical } from 'lucide-react';
import Header from '../components/Header';
import { comments } from '../data/mockData';

const DetailPage = ({ navigate, post }) => {
  if (!post) return null;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header 
        title="역속 게시"
        showBack={true}
        onBackClick={() => navigate('posts')}
        rightButton={{ 
          icon: <MoreVertical className="w-6 h-6" />, 
          onClick: () => {} 
        }}
      />

      <div className="p-4">
        {/* 게시글 본문 */}
        <div className="bg-white rounded-lg p-6 shadow mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div>
              <p className="font-bold">{post.author}</p>
              <p className="text-xs text-gray-500">{post.time}</p>
            </div>
          </div>

          <h2 className="text-xl font-bold mb-4">{post.title}</h2>
          <p className="text-gray-700 mb-6">{post.content}</p>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">가격정보</span>
              <span className="font-bold">{post.price}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">출발지</span>
              <span className="font-bold">{post.startLocation}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">도착지</span>
              <span className="font-bold">{post.endLocation}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">만남 예정일</span>
              <span className="font-bold">{post.meetingTime}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">최대 인원</span>
              <span className="font-bold">{post.maxPeople}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">연락정보</span>
              <span className="font-bold">{post.contact}</span>
            </div>
          </div>
        </div>

        {/* 댓글 영역 */}
        <div className="bg-white rounded-lg p-4 shadow">
          <h3 className="font-bold mb-4">댓글 {comments.length}</h3>
          
          <div className="space-y-4">
            {comments.map(comment => (
              <div key={comment.id} className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-sm">{comment.author}</p>
                    <p className="text-xs text-gray-400">{comment.time}</p>
                  </div>
                  <p className="text-sm text-gray-700">{comment.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 댓글 입력 */}
          <div className="mt-4 pt-4 border-t">
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="댓글을 입력하세요"
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                등록
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;