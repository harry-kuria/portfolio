
import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      
      // If navigating to home with a hash, scroll to section after a brief delay
      if (window.location.pathname === '/' && window.location.hash) {
        setTimeout(() => {
          const targetId = window.location.hash.replace('#', '');
          const element = document.getElementById(targetId);
          if (element) {
            const navHeight = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };

    // Listen for popstate (back/forward buttons)
    window.addEventListener('popstate', handleLocationChange);
    
    // Check path on mount
    handleLocationChange();
    
    // Also listen for hash changes
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Route based on current path
  if (currentPath === '/blog' || currentPath === '/blog/') {
    return <BlogPage />;
  }

  return <Home />;
};

export default App;
