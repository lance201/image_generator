import React from 'react';
import '../App.css';
import { images } from '../images/Images';
import ImageList from '../ImageList';
import Navbar from '../Navbar';
import Title from '../Title';
import Themes from '../Themes';
import News from '../News';

function HomePage() {

    return (
        <div>
            <header class="App-header">
                <Navbar/>
                <Title/>
                <News/>
                <Themes/>
                <ImageList images={images}/>
            </header>             
        </div>
    );
}

export default HomePage;