import React from 'react';
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import { posts } from '../data/mockData';

const PostsPage = ({ navigate, concert }) => {
  const handlePostClick = (post) => {
    navigate('detail', { post });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header 
        title="역속 게시"
        showBack={true}
        onBackClick={() => navigate('concerts')}
        rightButton={{ text: '완료', onClick: () => {} }}
      />

      <div className="p-4">
        <div className="mb-4">
          <input 
            type="text" 
            placeholder="게시글 검색"
            className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <h2 className="font-bold mb-3 flex items-center gap-2">
          오당점 <span className="text-red-500">{posts.length}</span>
        </h2>

        <div className="space-y-3">
          {posts.map(post => (
            <PostCard 
              key={post.id}
              post={post}
              onClick={() => handlePostClick(post)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsPage;