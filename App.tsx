
import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';

const App: React.FC = () => {
  // Get initial path - check for redirect from 404.html
  const getInitialPath = () => {
    // Check if we have a stored path from 404.html redirect
    const storedPath = sessionStorage.getItem('redirectPath');
    if (storedPath) {
      sessionStorage.removeItem('redirectPath');
      // Extract path, search, and hash
      const url = new URL(storedPath, window.location.origin);
      const cleanPath = url.pathname + url.search + url.hash;
      // Update URL to clean path
      window.history.replaceState({}, '', cleanPath);
      return url.pathname;
    }
    return window.location.pathname;
  };

  const [currentPath, setCurrentPath] = useState(getInitialPath());

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      setCurrentPath(path);
      
      // If navigating to home with a hash, scroll to section after a brief delay
      if (path === '/' && window.location.hash) {
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
