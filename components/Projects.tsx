
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Code, Smartphone, Zap, ArrowUpRight, Play, X } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Check if URL is YouTube
  const isYouTubeUrl = (url: string): boolean => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  // Get YouTube thumbnail URL
  const getYouTubeThumbnail = (url: string): string | null => {
    const videoId = getYouTubeVideoId(url);
    if (!videoId) return null;
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  // Get YouTube embed URL
  const getYouTubeEmbedUrl = (url: string): string | null => {
    const videoId = getYouTubeVideoId(url);
    if (!videoId) return null;
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <section id="projects" className="py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
          <div className="mb-8 md:mb-0">
            <h2 className="text-blue-500 font-black uppercase tracking-widest text-sm mb-4">Works</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white">Selected Projects.</h3>
          </div>
          <p className="max-w-sm text-slate-400 font-medium text-lg leading-relaxed">
            Architecting solutions from Go backends to fluid React frontends and Native Android SDKs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group glass-card rounded-[3rem] overflow-hidden border border-white/5 hover:border-white/20 hover:translate-y-[-8px] transition-all duration-700">
              <div className="p-10">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-16 h-16 bg-slate-900 border border-white/5 text-blue-500 rounded-3xl flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                    {project.tags.includes('Android') ? <Smartphone className="w-8 h-8" /> : <Zap className="w-8 h-8" />}
                  </div>
                  <div className="flex gap-2">
                    {project.video && (
                      <button
                        onClick={() => setSelectedVideo(project.video || null)}
                        className="p-4 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-purple-600 transition-all"
                        aria-label="Play video"
                      >
                        <Play className="w-6 h-6" />
                      </button>
                    )}
                    {project.link ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-4 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-blue-600 transition-all"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    ) : (
                      <div className="p-4 rounded-full bg-white/5 text-slate-600">
                        <Code className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                </div>

                <h4 className="text-3xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors flex items-center">
                  {project.title}
                  {project.video && (
                    <span className="ml-3 px-3 py-1 text-xs font-bold bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">
                      Video
                    </span>
                  )}
                  <ArrowUpRight className="ml-2 w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h4>
                <p className="text-slate-400 mb-8 text-lg font-medium leading-relaxed">{project.description}</p>
                
                {/* Video Thumbnail Preview */}
                {project.video && isYouTubeUrl(project.video) && (
                  <div 
                    className="relative mb-8 rounded-2xl overflow-hidden border border-white/10 cursor-pointer group/thumb"
                    onClick={() => setSelectedVideo(project.video || null)}
                  >
                    <img 
                      src={getYouTubeThumbnail(project.video) || ''} 
                      alt={`${project.title} video thumbnail`}
                      className="w-full h-48 object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover/thumb:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover/thumb:scale-110 transition-transform shadow-2xl">
                        <Play className="w-8 h-8 text-white ml-1" fill="white" />
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="space-y-4 mb-10">
                  {project.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start text-slate-500 font-medium">
                      <div className="w-2 h-2 bg-slate-700 rounded-full mt-2.5 mr-4 flex-shrink-0 group-hover:bg-blue-500 transition-colors"></div>
                      {detail}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-5 py-2 bg-slate-900 text-slate-400 text-xs font-black rounded-xl border border-white/5 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-all uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 p-3 rounded-full bg-slate-800/90 text-white hover:bg-slate-700 transition-all"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
            {isYouTubeUrl(selectedVideo) ? (
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={getYouTubeEmbedUrl(selectedVideo) + '?autoplay=1'}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube video player"
                />
              </div>
            ) : (
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-auto"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
