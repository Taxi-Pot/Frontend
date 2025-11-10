import React from 'react';
import { ChevronLeft } from 'lucide-react';

const Header = ({ 
  title, 
  subtitle, 
  showBack = false, 
  onBackClick,
  leftButton,
  rightButton,
  showMy = false,
  onMyClick
}) => {
  return (
    <div className="bg-white border-b sticky top-0 z-10">
      <div className="flex items-center justify-between p-4">
        {/* 왼쪽 영역 */}
        <div className="flex items-center gap-3">
          {showBack && (
            <button 
              onClick={onBackClick}
              className="hover:bg-gray-100 p-1 rounded"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          
          {leftButton && (
            <button 
              onClick={leftButton.onClick}
              className="hover:bg-gray-100 p-1 rounded"
            >
              {leftButton.icon}
            </button>
          )}
          
          <div>
            <h1 className={`font-bold ${subtitle ? 'text-2xl text-blue-500' : 'text-lg'}`}>
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm text-gray-600">{subtitle}</p>
            )}
          </div>
        </div>

        {/* 오른쪽 영역 */}
        <div>
          {showMy && (
            <button 
              onClick={onMyClick}
              className="px-4 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300"
            >
              MY
            </button>
          )}
          
          {rightButton && (
            rightButton.text ? (
              <button 
                onClick={rightButton.onClick}
                className="text-blue-500 font-semibold hover:text-blue-600"
              >
                {rightButton.text}
              </button>
            ) : (
              <button 
                onClick={rightButton.onClick}
                className="hover:bg-gray-100 p-1 rounded"
              >
                {rightButton.icon}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;