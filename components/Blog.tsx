import React, { useState, useEffect } from 'react';
import { ExternalLink, BookOpen, Calendar } from 'lucide-react';
import { BlogPost } from '../types';

export const Blog: React.FC = () => {
  const [articles, setArticles] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const mediumProfileUrl = "https://medium.com/harrisonkuria254";
  const mediumRssUrl = "https://medium.com/feed/@harrisonkuria254";

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const rss2jsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(mediumRssUrl)}`;
        const response = await fetch(rss2jsonUrl);
        const data = await response.json();
        
        if (data.status === 'ok' && data.items) {
          const formattedArticles: BlogPost[] = data.items.slice(0, 6).map((item: any) => {
            const thumbnailMatch = item.content?.match(/<img[^>]+src="([^"]+)"/);
            const thumbnail = thumbnailMatch 
              ? thumbnailMatch[1] 
              : `https://via.placeholder.com/400x250/FAF9FF/8B5CF6?text=${encodeURIComponent(item.title)}`;
            
            const description = item.content 
              ? item.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...'
              : item.description || 'Read more on Medium';
            
            return {
              title: item.title,
              link: item.link,
              thumbnail: thumbnail,
              description: description,
              date: new Date(item.pubDate).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })
            };
          });
          setArticles(formattedArticles);
        }
      } catch (error) {
        console.error('Error fetching Medium articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section className="py-28 bg-white relative overflow-hidden min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div className="mb-6 md:mb-0">
            <span className="text-purple-600 font-black uppercase tracking-[0.2em] text-xs mb-3 block">
              Writing
            </span>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Latest Articles.
            </h3>
          </div>
          <p className="max-w-md text-slate-600 font-medium text-base sm:text-lg leading-relaxed">
            Sharing insights on backend systems, mobile development, and software engineering.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-purple-600 border-t-transparent" />
            <p className="text-slate-500 mt-4 font-medium">Loading articles...</p>
          </div>
        ) : articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {articles.map((article, idx) => (
              <a
                key={idx}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card-light rounded-3xl overflow-hidden bg-white border border-purple-100 shadow-md shadow-purple-500/5 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-500 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-purple-50">
                  <img
                    src={article.thumbnail}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://via.placeholder.com/400x250/FAF9FF/8B5CF6?text=${encodeURIComponent(article.title)}`;
                    }}
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center text-slate-400 text-xs mb-2.5 font-semibold">
                      <Calendar className="w-3.5 h-3.5 mr-1.5 text-purple-600" />
                      <span>{article.date}</span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-purple-700 transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-slate-500 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                  <div className="flex items-center text-purple-600 text-sm font-bold pt-3 border-t border-purple-100/60">
                    <span>Read Article</span>
                    <ExternalLink className="ml-1.5 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="glass-card-light rounded-3xl p-10 md:p-16 border border-purple-100 text-center bg-purple-50/30">
            <BookOpen className="w-14 h-14 text-purple-600 mx-auto mb-5" />
            <h4 className="text-2xl font-black text-slate-900 mb-3">Check Out My Articles</h4>
            <p className="text-slate-600 mb-8 max-w-md mx-auto">Visit my Medium profile to read my latest articles on software engineering and systems architecture.</p>
            <a
              href={mediumProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3.5 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-full font-bold shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/35 hover:-translate-y-0.5 transition-all text-sm"
            >
              <span>Visit Medium Profile</span>
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        )}

        {articles.length > 0 && (
          <div className="text-center pt-8">
            <a
              href={mediumProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-purple-600 hover:text-purple-800 font-bold transition-colors text-sm"
            >
              <span>View All Articles on Medium</span>
              <ExternalLink className="ml-1.5 w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
