import React from 'react';
import Navbar from '../components/Navbar';
import Blog from '../components/Blog';

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-purple-500/20 selection:text-purple-900 font-sans">
      <Navbar currentSection="blog" />
      <main>
        <Blog />
      </main>
      <footer className="py-12 border-t border-purple-100 bg-white text-center">
        <p className="text-slate-500 font-mono text-xs uppercase tracking-[0.3em]">
          Designed & Built with Precision · Harrison Kuria © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default BlogPage;
