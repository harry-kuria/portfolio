import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Code, Smartphone, Zap, ArrowUpRight, Play, X, ArrowRight, Maximize2, Package } from 'lucide-react';
import { CaseStudy } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

export const Projects: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
    <section id="projects" className="py-28 bg-white border-t border-purple-100/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20"
        >
          <div className="mb-6 md:mb-0">
            <span className="text-purple-600 font-black uppercase tracking-[0.2em] text-xs mb-3 block">
              Works
            </span>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Selected Projects.
            </h3>
          </div>
          <p className="max-w-md text-slate-600 font-medium text-base sm:text-lg leading-relaxed">
            Architecting solutions from Go backends to fluid React frontends and Native Android SDKs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass-card-light rounded-[2.5rem] overflow-hidden bg-white border border-purple-100 shadow-md shadow-purple-500/5 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="p-8 sm:p-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 bg-purple-50 border border-purple-100 text-purple-600 rounded-2xl flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    {project.tags.includes('Android') || project.tags.includes('Kotlin') ? <Smartphone className="w-6 h-6" /> : <Zap className="w-6 h-6" />}
                  </div>
                  <div className="flex gap-2">
                    {project.video && (
                      <button
                        onClick={() => setSelectedVideo(project.video || null)}
                        className="p-3 rounded-full bg-purple-50 text-purple-600 hover:text-white hover:bg-purple-600 transition-all border border-purple-100 cursor-pointer"
                        aria-label="Play video"
                      >
                        <Play className="w-5 h-5" />
                      </button>
                    )}
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-purple-50 text-purple-600 hover:text-white hover:bg-purple-600 transition-all border border-purple-100"
                        title={project.playStore ? "View on Google Play" : "Visit Project"}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    ) : (
                      <div className="p-3 rounded-full bg-slate-100 text-slate-400">
                        <Code className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                </div>

                <h4 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 group-hover:text-purple-700 transition-colors flex items-center flex-wrap gap-2">
                  <span>{project.title}</span>
                  {project.playStore && (
                    <span className="px-2.5 py-0.5 text-xs font-bold bg-emerald-100 text-emerald-800 rounded-full border border-emerald-200 inline-flex items-center gap-1">
                      <Smartphone className="w-3 h-3" />
                      Google Play
                    </span>
                  )}
                  {project.mavenCentral && (
                    <span className="px-2.5 py-0.5 text-xs font-bold bg-amber-100 text-amber-900 rounded-full border border-amber-200 inline-flex items-center gap-1">
                      <Package className="w-3 h-3" />
                      Maven Central
                    </span>
                  )}
                  {project.video && (
                    <span className="px-2.5 py-0.5 text-xs font-bold bg-purple-100 text-purple-700 rounded-full border border-purple-200">
                      Video
                    </span>
                  )}
                  <ArrowUpRight className="ml-1 w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h4>
                <p className="text-slate-600 mb-6 text-base font-normal leading-relaxed">{project.description}</p>

                {/* Video Thumbnail Preview */}
                {project.video && isYouTubeUrl(project.video) && (
                  <div
                    className="relative mb-6 rounded-2xl overflow-hidden border border-purple-100 cursor-pointer group/thumb shadow-sm"
                    onClick={() => setSelectedVideo(project.video || null)}
                  >
                    <img
                      src={project.thumbnail || getYouTubeThumbnail(project.video) || ''}
                      alt={`${project.title} video thumbnail`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-44 object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover/thumb:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center group-hover/thumb:scale-110 transition-transform shadow-xl">
                        <Play className="w-7 h-7 text-white ml-0.5" fill="white" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Project Image / Flyer Preview */}
                {project.image && !project.video && (
                  <div
                    className="relative mb-6 rounded-2xl overflow-hidden border border-purple-100/80 bg-slate-900/5 cursor-pointer group/img shadow-sm"
                    onClick={() => setSelectedImage(project.image || null)}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} Flyer`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-48 sm:h-56 object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover/img:opacity-100 transition-opacity flex items-end justify-between p-3.5">
                      <span className="text-xs font-semibold text-white/95 drop-shadow-sm">Official App Flyer</span>
                      <span className="text-xs font-bold text-white bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full inline-flex items-center gap-1 hover:bg-white/30 transition-colors">
                        <Maximize2 className="w-3.5 h-3.5" />
                        View Flyer
                      </span>
                    </div>
                  </div>
                )}

                <div className="space-y-3 mb-8">
                  {project.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start text-slate-600 text-sm font-medium">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      {detail}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-5 pt-4 border-t border-purple-100/60">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3.5 py-1.5 bg-purple-50/80 text-purple-700 text-xs font-bold rounded-xl border border-purple-200/60 group-hover:border-purple-300 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    {project.playStore && (
                      <a
                        href={project.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold hover:shadow-lg hover:shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 group/play text-sm"
                      >
                        <Smartphone className="w-4 h-4" />
                        <span>Google Play</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/play:translate-x-0.5 group-hover/play:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                    {project.mavenCentral && (
                      <a
                        href={project.mavenCentral}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3.5 px-4 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold hover:shadow-lg hover:shadow-amber-600/25 transition-all flex items-center justify-center gap-2 group/maven text-sm"
                      >
                        <Package className="w-4 h-4" />
                        <span>Maven Central</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/maven:translate-x-0.5 group-hover/maven:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                    {project.caseStudy && (
                      project.caseStudy.link ? (
                        <a
                          href={project.caseStudy.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center group/btn text-sm"
                        >
                          <span>Read Case Study</span>
                          <ArrowUpRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </a>
                      ) : (
                        <button
                          onClick={() => setSelectedCaseStudy(project.caseStudy || null)}
                          className="flex-1 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center group/btn text-sm cursor-pointer"
                        >
                          <span>Read Case Study</span>
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
            onClick={() => setSelectedCaseStudy(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="relative max-w-3xl w-full bg-white rounded-[2.5rem] border border-purple-100 shadow-2xl my-8 max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-6 right-6 z-10 p-3 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 sm:p-12">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold mb-6 uppercase tracking-wider">
                  Engineering Case Study
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight">
                  {selectedCaseStudy.title}
                </h3>

                {selectedCaseStudy.image && (
                  <div
                    className="mb-8 rounded-2xl overflow-hidden border border-purple-100/80 bg-slate-900/5 shadow-sm cursor-pointer group/modalimg max-w-sm mx-auto relative"
                    onClick={() => setSelectedImage(selectedCaseStudy.image || null)}
                  >
                    <img
                      src={selectedCaseStudy.image}
                      alt="Project Flyer Preview"
                      className="w-full h-auto max-h-72 object-contain mx-auto group-hover/modalimg:scale-[1.02] transition-transform duration-300"
                    />
                    <div className="absolute bottom-3 right-3">
                      <span className="text-xs font-bold text-white bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-full inline-flex items-center gap-1 shadow-md">
                        <Maximize2 className="w-3 h-3" />
                        Expand Flyer
                      </span>
                    </div>
                  </div>
                )}

                <div className="space-y-8">
                  <div>
                    <h4 className="flex items-center text-lg font-bold text-slate-900 mb-3">
                      <span className="w-7 h-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-xs font-black">
                        01
                      </span>
                      The Challenge
                    </h4>
                    <div className="pl-10 border-l-2 border-purple-100 ml-3.5">
                      <p className="text-base text-slate-600 leading-relaxed">
                        {selectedCaseStudy.challenge}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="flex items-center text-lg font-bold text-slate-900 mb-3">
                      <span className="w-7 h-7 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mr-3 text-xs font-black">
                        02
                      </span>
                      The Solution
                    </h4>
                    <div className="pl-10 border-l-2 border-purple-100 ml-3.5">
                      <p className="text-base text-slate-600 leading-relaxed">
                        {selectedCaseStudy.solution}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="flex items-center text-lg font-bold text-slate-900 mb-3">
                      <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mr-3 text-xs font-black">
                        03
                      </span>
                      Key Results
                    </h4>
                    <div className="pl-10 border-l-2 border-purple-100 ml-3.5">
                      <ul className="space-y-2.5">
                        {selectedCaseStudy.results.map((result, rIdx) => (
                          <li key={rIdx} className="text-base text-slate-700 font-medium flex items-start">
                            <span className="text-emerald-600 mr-2.5 font-bold">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {selectedCaseStudy.techStack && selectedCaseStudy.techStack.length > 0 && (
                    <div>
                      <h4 className="flex items-center text-lg font-bold text-slate-900 mb-3">
                        <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-3 text-xs font-black">
                          04
                        </span>
                        Core Technologies
                      </h4>
                      <div className="pl-10 border-l-2 border-purple-100 ml-3.5">
                        <div className="flex flex-wrap gap-2 pt-1">
                          {selectedCaseStudy.techStack.map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className="px-3 py-1 bg-slate-100 text-slate-800 text-xs font-bold rounded-lg border border-slate-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-10 pt-8 border-t border-slate-100 flex justify-center">
                  <button
                    onClick={() => setSelectedCaseStudy(null)}
                    className="px-8 py-3 rounded-full bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition-all cursor-pointer"
                  >
                    Close Case Study
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Image / Flyer Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-xl w-full max-h-[90vh] bg-transparent rounded-2xl overflow-hidden flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 z-20 p-2.5 rounded-full bg-black/70 text-white hover:bg-black/90 transition-all cursor-pointer backdrop-blur-md border border-white/20"
                aria-label="Close flyer preview"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedImage}
                alt="Enlarged Project Flyer"
                className="max-h-[85vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
