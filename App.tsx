
import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';

const App: React.FC = () => {
  // Handle GitHub Pages 404 redirect
  const getPath = () => {
    let path = window.location.pathname;
    // Handle GitHub Pages SPA redirect format: /?/blog
    if (path === '/' && window.location.search) {
      const search = window.location.search.slice(1); // Remove '?'
      if (search.startsWith('/')) {
        path = search;
        // Clean up URL
        window.history.replaceState({}, '', path);
      }
    }
    return path;
  };

  const [currentPath, setCurrentPath] = useState(getPath());

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(getPath());
      
      // If navigating to home with a hash, scroll to section after a brief delay
      const path = getPath();
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
