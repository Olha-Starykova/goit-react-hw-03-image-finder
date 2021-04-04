import React from 'react';
 import './ImageGalleryItem.css'

const ImageGalleryItem = ({ webformatURL, showModal, largeImageURL }) => {
    
    return (

        <li onClick={() => showModal(largeImageURL)} className="ImageGalleryItem">
            <img src={webformatURL} alt={webformatURL} className="ImageGalleryItem-image" />
        </li>

    )
}

export default ImageGalleryItem;
