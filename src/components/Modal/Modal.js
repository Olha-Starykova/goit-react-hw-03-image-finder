import React, { Component } from 'react';
//метод создать портал из реакт дома
 import { createPortal } from 'react-dom';
import './Modal.css';

 const modalRoot = document.querySelector('#modal-root');
//закрытие по ескейп

export default class Modal extends Component {
    //при монтировании
  componentDidMount() {
    //console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }
//при размантировании чистим
  componentWillUnmount() {
   // console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нажали ESC, нужно закрыть модалку');
//вызвали пропс
      this.props.onClose();

    }
  };

  handleBackdropClick = event => {
    
    this.props.onClose();
    
  };

    render() {
      const { largeImageURL } = this.props;
      return createPortal(
        
        <div className="Overlay" onClick={this.handleBackdropClick}>
         
          <div className="Modal" onClick={e => { e.stopPropagation() }}>
            <img src={largeImageURL} alt={largeImageURL} />
          </div>
                          
        </div>, modalRoot,
     
      );
  }
}
  
