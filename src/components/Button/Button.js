import React from 'react';
import PropTypes from 'prop-types';
// import { button } from './Button.module.css';

const Button = ({  }) => {

  return (
    <button type="button" className={button} onClick={handelClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  serviceSearchImages: PropTypes.func.isRequired,
};

export default Button;