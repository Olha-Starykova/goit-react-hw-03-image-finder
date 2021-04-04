import React from 'react';
import './ImageGallery.css'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'



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
 export default ImageGallery;


        


