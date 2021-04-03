import React from 'react';
 import './ImageGalleryItem.css'

const ImageGalleryItem = ({id, webformatURL }) => {
    return (


        <li key={id} className="ImageGalleryItem">
            <img src={webformatURL} alt={webformatURL} className="ImageGalleryItem-image" />
        </li>



    )
}

export default ImageGalleryItem;
