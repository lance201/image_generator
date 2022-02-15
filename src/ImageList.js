import React from 'react';
import Image from './Image';
import './App.css';

const ImageList = ({ images }) => {
    const imagesComponent = images.map((image, i) => {
        return <Image key={i} id={images[i].id} source={images[i].source}/>
    }) 
    return (
        <div class="image-wrapper">
            {imagesComponent}
        </div>
    );
}

export default ImageList;