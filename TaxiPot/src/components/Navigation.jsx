import React from 'react';
import { Home, List, PenSquare, User } from 'lucide-react';

const Navigation = ({ navigate }) => {
  const navItems = [
    { 
      id: 'concerts', 
      label: '홈', 
      icon: <Home className="w-5 h-5" /> 
    },
    { 
      id: 'posts', 
      label: '게시글', 
      icon: <List className="w-5 h-5" /> 
    },
    { 
      id: 'write', 
      label: '글쓰기', 
      icon: <PenSquare className="w-5 h-5" /> 
    },
    { 
      id: 'my', 
      label: '마이', 
      icon: <User className="w-5 h-5" /> 
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t max-w-md mx-auto">
      <div className="flex justify-around p-3">
        {navItems.map(item => (
          <button 
            key={item.id}
            onClick={() => navigate(item.id)}
            className="flex flex-col items-center gap-1 hover:text-blue-500 transition-colors"
          >
            {item.icon}
            <span className="text-xs">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navigation;