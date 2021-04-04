import React from 'react';
import PropTypes from 'prop-types';
 import  './Button.css';

const Button = ({ fetchHits }) => {
  const clickfetchHits = () => {
   fetchHits();
  };
  return (
    <button type="button" className="Button" onClick={clickfetchHits}>
      Load more
    </button>
    
  );
};

Button.propTypes = {
  fetchHits: PropTypes.func.isRequired,
};

export default Button;