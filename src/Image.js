import React, { useEffect, useState } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

const Image = ({reload, _id, url, favorite}) => {

    const [fav, setFav] = useState(favorite);


    const toggleFav = () => {

        if (fav === false) {
            addImagetoFav();
            setFav(true);
        } else {
            removeImagefromFav();
            setFav(false);
        }
        reload();
        setFav(fav);
    }

    const addImagetoFav = async () => {
        let fav = true;
        const editedImage = { fav };
        const response = await fetch(`/favorite/${_id}`, {
            method: 'PUT',
            body: JSON.stringify(editedImage),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            return 0;
        } else {
            alert(`Failed to add image to favorites, status code = ${response.status}`);
            return 1;
        }
    };

    const removeImagefromFav = async () => {
        let fav = false;
        const editedImage = { fav };
        const response = await fetch(`/favorite/${_id}`, {
            method: 'PUT',
            body: JSON.stringify(editedImage),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert("Successfully remove image from favorite list");
            return 0;
        } else {
            alert(`Failed to remove image from favorites, status code = ${response.status}`);
            return 1;
        }
    };

    useEffect(() => {
        setFav(favorite);
    }, [favorite]); 

    return (
        <div class="image">
            {fav
            ? <MdFavorite onClick={toggleFav} class="fav-icon-active"/> 
            : <MdFavoriteBorder onClick={toggleFav} class="fav-icon-inactive"/>
            }
            <img alt="" src={url}/>
        </div>
    );
}

export default Image;