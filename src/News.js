import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const News = () => {

    /* const [newsData, setNewsData] = useState();

    const fetchNews = async() => {
        const data = await Axios.get('./news.json');
        setNewsData(data);
    }

    useEffect(() => {
        fetchNews()
    }, []) */

    return (
        <div class="news">
            <Link to="/news"><button class="news-button">Check out your News of the Day!</button></Link>                 
        </div>
    );
}

export default News;

