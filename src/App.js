import React, { Component } from 'react';
 import Searchbar from './components/Searchbar/Searchbar'
import api from './services/api'
import ImageGallery from './components/ImageGallery/ImageGallery'
import Modal from './components/Modal/Modal'


class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    // showModal: true
     webformatURL: ''
  

  };
 

    componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchHits()
    }
  }
 
  //данные с сабмита
  onChangeQuery = query => {
    // console.log(query)
    this.setState({
      searchQuery: query,
      currentPage: 1,
      hits: [],
      error: null,
    
    })
  };



  fetchHits = () => {
    const { currentPage, searchQuery} = this.state;

    const options = {
      searchQuery,
      currentPage
    };

    this.setState({ isLoading: true });
 
    api
      .fetchHits(options)
      .then(hits => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false}));
  };

   toggleModal = () => {
    this.setState(state => ({
      // showModal: !state.showModal
      webformatURL: !state.webformatURL
    }));
  }

// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение для модального окна

  render() {
    const { hits, isLoading, error, showModal, largeImageURL, webformatURL } = this.state
   
    
    return (
      <div>
        {error && <h1>Попробуте перезагрузить страницу</h1>}

        <Searchbar onSubmit={this.onChangeQuery} />

        {isLoading && <h1>Загружаем...</h1>}

        <ImageGallery hits={hits} />


          {webformatURL && <Modal  onClose={this.toggleModal}>
          <p>Привет это children</p>

          {/* <img src={largeImageURL } alt={largeImageURL }/> */}
          
          <button type="button" onClick={this.toggleModal}> закрыть модальное окно </button>
          
        </Modal>}

       

     
        {hits.length > 0 && !isLoading && (<button type='button' onClick={this.fetchHits}>Загрузить еще</button>)}


      </div>
    );
  };
};

export default App;



