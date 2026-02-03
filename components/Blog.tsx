
import React, { useState, useEffect } from 'react';
import { ExternalLink, BookOpen, Calendar } from 'lucide-react';
import { BlogPost } from '../types';

const Blog: React.FC = () => {
  const [articles, setArticles] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const mediumProfileUrl = "https://medium.com/harrisonkuria254";
  const mediumRssUrl = "https://medium.com/feed/@harrisonkuria254";

  useEffect(() => {
    // Fetch articles from Medium RSS feed
    const fetchArticles = async () => {
      try {
        // Use RSS2JSON or similar service to parse Medium RSS
        const rss2jsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(mediumRssUrl)}`;
        const response = await fetch(rss2jsonUrl);
        const data = await response.json();
        
        if (data.status === 'ok' && data.items) {
          const formattedArticles: BlogPost[] = data.items.slice(0, 6).map((item: any) => {
            // Extract thumbnail from content or use default
            const thumbnailMatch = item.content?.match(/<img[^>]+src="([^"]+)"/);
            const thumbnail = thumbnailMatch 
              ? thumbnailMatch[1] 
              : `https://via.placeholder.com/400x250/1e293b/60a5fa?text=${encodeURIComponent(item.title)}`;
            
            // Extract description (remove HTML tags)
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
        // Fallback: Show link to Medium profile
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
          <div className="mb-8 md:mb-0">
            <h2 className="text-blue-500 font-black uppercase tracking-widest text-sm mb-4">Writing</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white">Latest Articles.</h3>
          </div>
          <p className="max-w-sm text-slate-400 font-medium text-lg leading-relaxed">
            Sharing insights on backend systems, mobile development, and software engineering.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
            <p className="text-slate-400 mt-4">Loading articles...</p>
          </div>
        ) : articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {articles.map((article, idx) => (
              <a
                key={idx}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card rounded-[2rem] overflow-hidden border border-white/5 hover:border-white/20 hover:translate-y-[-8px] transition-all duration-700"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.thumbnail}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback if image fails to load
                      (e.target as HTMLImageElement).src = `https://via.placeholder.com/400x250/1e293b/60a5fa?text=${encodeURIComponent(article.title)}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-slate-500 text-xs mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{article.date}</span>
                  </div>
                  <h4 className="text-xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {article.description}
                  </p>
                  <div className="flex items-center text-blue-400 text-sm font-bold">
                    Read Article
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-[3rem] p-10 md:p-16 border border-white/5 text-center">
            <BookOpen className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h4 className="text-2xl font-black text-white mb-4">Check Out My Articles</h4>
            <p className="text-slate-400 mb-8">Visit my Medium profile to read my latest articles.</p>
            <a
              href={mediumProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-slate-950 rounded-2xl font-black shadow-2xl shadow-white/5 hover:bg-blue-500 hover:text-white hover:translate-y-[-4px] transition-all"
            >
              Visit Medium Profile
              <ExternalLink className="ml-3 w-6 h-6" />
            </a>
          </div>
        )}

        {articles.length > 0 && (
          <div className="text-center">
            <a
              href={mediumProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-slate-400 hover:text-white font-bold transition-colors"
            >
              View All Articles on Medium
              <ExternalLink className="ml-2 w-5 h-5" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
