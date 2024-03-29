import React, { useState, useEffect } from 'react';
import '../App.css';
import Navbar from '../Navbar';
import Title from '../Title';
import Themes from '../Themes';
import News from '../News';

function HomePage() {

    const [images, setImages] = useState([]);
    
    const loadImages = async () => {
        const response = await fetch('/home');
        const data = await response.json();
        setImages(data);
    }

    useEffect(() => {
        loadImages();
    }, []);

    return (
        <div>
            <header class="App-header">
                <Navbar/>
                <Title/>
                <News/>
                <Themes images={images}/>
            </header>             
        </div>
    );
}

export default HomePage;