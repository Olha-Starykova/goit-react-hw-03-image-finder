import React from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.css'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import defaultImage from './default.jpg'


const ImageGallery = ({ hits, showModal }) => {
    return (
        <ul className="ImageGallery">
            {hits.map(({ id, webformatURL, largeImageURL }) => (
                
                <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} showModal={showModal }/>)
               
            )
            }
        </ul>
      
    );
};



ImageGallery.defaultProps = {
    webformatURL: defaultImage,
    largeImageURL: defaultImage,

};

ImageGallery.propTypes = {
  showModal: PropTypes.func.isRequired,
  hits: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
  })),
}



 export default ImageGallery;


        


