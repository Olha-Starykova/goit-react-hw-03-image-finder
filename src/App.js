import React, { Component } from 'react';
 import Searchbar from './components/Searchbar/Searchbar'
import api from './services/api'
import ImageGallery from './components/ImageGallery/ImageGallery'
import Modal from './components/Modal/Modal'
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader'


class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    largeImageURL: ''
  };
 

    componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchHits()
      };
  };
 
  //данные с сабмита
  onChangeQuery = query => {
    // console.log(query)
    this.setState({
      searchQuery: query,
      currentPage: 1,
      hits: [],
      error: null,
    });
  };



  fetchHits = () => {
    const { currentPage, searchQuery } = this.state;

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
        }))
      })
      .catch(error => this.setState({ error }))
      .finally(() => (this.setState({ isLoading: false }),
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        }))
      )
  };
  
  
  toggleModal = (largeImageURL) => {
    //console.log(largeImageURL)
    this.setState(state => ({
      showModal: !state.showModal,
      largeImageURL
    }));
  };


  render() {
    const { hits, isLoading, error, showModal, largeImageURL  } = this.state
     
    return (
      <div>
        {error && <h1>Попробуте перезагрузить страницу</h1>}

        <Searchbar onSubmit={this.onChangeQuery} />

        {isLoading && <h1>Загружаем...</h1>}

        <ImageGallery showModal={this.toggleModal} hits={hits} />


        {showModal && <Modal onClose={this.toggleModal} largeImageURL={largeImageURL} />}
          
     
        {(hits.length > 0) && !isLoading && <Button fetchHits={this.fetchHits} />}



        {isLoading && <Loader />}

              
      </div>
    );
  };
};

export default App;



