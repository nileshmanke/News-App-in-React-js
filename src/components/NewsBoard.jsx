import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=d1083c8d81694592b61d092e532289f0`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Filter articles to include only those with title, description, url, and urlToImage
        const filteredArticles = data.articles.filter(article => (
          article.title && article.description && article.url && article.urlToImage
        ));
        setArticles(filteredArticles);
      })
      .catch(error => console.error("Error fetching news:", error));

  }, [category]);

  return (
    <div>
      <h2 className="text-center"> Latest <span className="badge bg-danger ">News</span> </h2>

      {articles.map((news, index) => (
        <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      ))}
    </div>
  );
};

export default NewsBoard;
