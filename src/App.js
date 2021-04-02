import React, { Component } from 'react';
 import Searchbar from './components/Searchbar/Searchbar'
 import axios from 'axios';


class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: '',
  };
 

    componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchHits()
    }
  }
 
  //данные с сабмита
  onChangeQuery = query => {
    // console.log(query)
    this.setState({ searchQuery: query, currentPage: 1, hits: [] })
  };



  fetchHits = () => {
     const{currentPage, searchQuery}=this.state
      axios.get(`https:pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=20314649-0be4b13706b99da5b0e7a5a44&image_type=photo&orientation=horizontal&per_page=12`)
      .then(response => {
        console.log(response.data.hits);
        this.setState(prevState => ({
          hits: [...prevState.hits, ...response.data.hits],
          currentPage: prevState.currentPage + 1,
        }));
      });
  }

// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение для модального окна

  render() {
    const {hits} = this.state
    return (
      <div>
   
        <Searchbar onSubmit={this.onChangeQuery} />
        <ul>
          {hits.map(({ id, webformatURL }) =>
            <li key={id}>  
            
              <img src={webformatURL} alt={webformatURL} />
              
            </li>)}
        </ul>
  <button type='button' onClick={this.fetchHits}>Загрузить еще</button>

      </div>
    );
    }
};

export default App;


