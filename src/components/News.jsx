import React, { useEffect, useState } from 'react';
import axios from 'axios';

function News() {
  const [news, setNews] = useState([]);
  const [visibleNewsCount, setVisibleNewsCount] = useState(10);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://api.gdeltproject.org/api/v2/doc/doc?query=agriculture+india&mode=artlist&format=json');
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching news", error);
      }
    };
    fetchNews();
  }, []);

  const handleRemove = (index) => {
    setNews(prevNews => prevNews.filter((_, i) => i !== index));
  };

  const handleShowMore = () => {
    setVisibleNewsCount(prevCount => prevCount + 10);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6 text-green-800">Latest News</h2>
      {news.length ? (
        <div className="overflow-hidden p-4 ">
          <ul className="space-y-4">
            {news.slice(0, visibleNewsCount).map((article, index) => (
              <li 
                key={index} 
                className="p-4 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 relative">
                
                <button 
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                  onClick={() => handleRemove(index)}
                >
                  ✖
                </button>

                <a 
                  href={article.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg font-semibold text-blue-600 hover:underline">
                  {article.title}
                </a>
                <p className="text-gray-700 mt-2">{article.description}</p>
              </li>
            ))}
          </ul>
          {visibleNewsCount < news.length && (
            <button 
              onClick={handleShowMore} 
              className="mt-4 w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Show More News
            </button>
          )}
        </div>
      ) : (
        <p>No news available at the moment.</p>
      )}
    </div>
  );
}

export default News;
