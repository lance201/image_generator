import React from 'react';
import Image from './Image';
import './App.css';

const ImageList = ({ reload, images }) => {

    const imagesComponent = images.map((image, i) => {
        return <Image reload={reload} _id={images[i]._id} key={i} favorite={images[i].fav} url={images[i].url}/>
    })

    return (
        <div class="image-wrapper">
            {imagesComponent}
        </div>
    );
}

export default ImageList;