import React from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.css'
 import defaultImage from '../ImageGallery/default.jpg'

const ImageGalleryItem = ({ webformatURL, showModal, largeImageURL }) => {
    
    return (

        <li onClick={() => showModal(largeImageURL)} className="ImageGalleryItem">
            <img src={webformatURL} alt={webformatURL} className="ImageGalleryItem-image" />
        </li>

    );
}


ImageGalleryItem.defaultProps = {
    webformatURL: defaultImage,
    largeImageURL: defaultImage,

};

ImageGalleryItem.propTypes = {
    showModal: PropTypes.func.isRequired,
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string
};


export default ImageGalleryItem;
