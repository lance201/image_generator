import React, { useState, useEffect } from 'react';
import './App.css';

const NewsArticle = () => {

    const [news, setNews] = useState();
    
    const loadNews = async () => {
        const response = await fetch('https://sheltered-crag-94521.herokuapp.com/today', {mode: "cors"});
        const data = await response.json();
        setNews(data.articles[0]);
    }

    useEffect(() => {
        loadNews();
    }, []);
    

    return (
        <div class="news">
            <h2 class="news-headline">{news?.title}</h2>
            <div class="news-body">
                <p>{news?.description}</p>
                <p><img class="news-img" alt="" src={news?.urlToImage}></img></p>                
                <p class="news-bold">{news?.source?.name}</p>
                <p><a href={news?.url}>{news?.url}</a></p>
                <p class="news-bold">{news?.author}</p>
                <p class="news-bold">{news?.publishedAt}</p>
            </div>                        
        </div>
    );
}

export default NewsArticle;