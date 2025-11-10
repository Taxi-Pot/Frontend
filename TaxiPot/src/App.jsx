import React, { useState } from 'react';
import MainPage from './pages/MainPage';
import ConcertsPage from './pages/ConcertsPage';
import PostsPage from './pages/PostsPage';
import DetailPage from './pages/DetailPage';
import WritePage from './pages/WritePage';
import MyPage from './pages/MyPage';
import Navigation from './components/Navigation';

const App = () => {
  const [currentPage, setCurrentPage] = useState('main');
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedConcert, setSelectedConcert] = useState(null);

  const navigate = (page, data = null) => {
    setCurrentPage(page);
    if (data) {
      if (data.post) setSelectedPost(data.post);
      if (data.concert) setSelectedConcert(data.concert);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-xl min-h-screen relative">
      {currentPage === 'main' && <MainPage navigate={navigate} />}
      {currentPage === 'concerts' && <ConcertsPage navigate={navigate} />}
      {currentPage === 'posts' && (
        <PostsPage 
          navigate={navigate} 
          concert={selectedConcert} 
        />
      )}
      {currentPage === 'detail' && (
        <DetailPage 
          navigate={navigate} 
          post={selectedPost} 
        />
      )}
      {currentPage === 'write' && <WritePage navigate={navigate} />}
      {currentPage === 'my' && <MyPage navigate={navigate} />}

      {/* 하단 네비게이션 (메인 페이지 제외) */}
      {/* {currentPage !== 'main' && <Navigation navigate={navigate} />} */}
    </div>
  );
};

export default App;