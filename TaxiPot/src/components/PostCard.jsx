import React from 'react';

const PostCard = ({ post, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white p-4 rounded-2xl shadow hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
        <div className="flex-1">
          <h3 className="font-bold mb-1">{post.title}</h3>
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
            {post.content}
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;