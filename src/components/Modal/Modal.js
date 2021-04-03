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
//     console.log('Кликнули в бекдроп');
//       //где поймали
//       console.log('currentTarget: ', event.currentTarget);
//       //что нажали
//     console.log('target: ', event.target);

    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

    render() {
      const { largeImageURL } = this.props;
      return createPortal(
        
          <div className="Overlay" onClick={this.handleBackdropClick}>
         
              <div className="Modal">
                  
                  {this.props.children}
               {/* <img src={largeImageURL } alt={largeImageURL }/> */}
              </div>
                 
         
          </div>,modalRoot,

     
      );
  }
}
  