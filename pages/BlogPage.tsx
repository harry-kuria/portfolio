
import React from 'react';
import Navbar from '../components/Navbar';
import Blog from '../components/Blog';

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      <main>
        <Blog />
      </main>
      <footer className="py-12 border-t border-white/5 bg-slate-950 text-center">
        <p className="text-slate-700 font-mono text-xs uppercase tracking-[0.5em]">Built with lots of Passion</p>
      </footer>
    </div>
  );
};

export default BlogPage;
