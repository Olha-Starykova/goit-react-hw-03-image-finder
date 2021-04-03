import React from 'react';
import './ImageGallery.css'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'



const ImageGallery = ({ hits }) => {
    return (
        <ul className="ImageGallery">
            {hits.map(({ id, webformatURL }) => (
                
                <ImageGalleryItem id={id} webformatURL={webformatURL} />)
               
            )
            }
        </ul>
      
    );
}; 
 export default ImageGallery;


        


