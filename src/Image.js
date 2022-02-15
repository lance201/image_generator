import React from 'react';

const Image = ({source}) => {
    return (
        <div class="image">
            <img alt="" src={source}/>
        </div>
    );
}

export default Image;