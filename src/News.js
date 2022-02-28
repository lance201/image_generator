import React, { useState } from 'react';
import './App.css';
import NewsArticle from './NewsArticle';

const News = () => {

    const [toFetchNews, setFetchNews] = useState(false);

    const toggleFetchNews = () => setFetchNews(!toFetchNews);
    

    return (
        <div class="news">
            <button class="news-button" onClick={toggleFetchNews}>Check out your News of the Day!</button>
            {toFetchNews && <NewsArticle/>}
        </div>
    );
}

export default News;

