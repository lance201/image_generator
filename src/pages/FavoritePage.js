import React, { useState, useEffect } from 'react';
import '../App.css';
import ImageList from '../ImageList';
import NavbarFav from '../NavbarFav';
import TitleFav from '../TitleFav';

function FavoritePage() {

    const [images, setImages] = useState([]);
    
    const loadImages = async () => {
        const response = await fetch('/home');
        const data = await response.json();
        let filter = data.filter(data => data.fav === true);
        setImages(filter);
    }

    useEffect(() => {
        loadImages();
    }, []); 

    return (
        <div>
            <header class="App-header">
                <NavbarFav/>
                <TitleFav/>
                <ImageList reload={loadImages} images={images}/>
            </header>             
        </div>
    );
}

export default FavoritePage;