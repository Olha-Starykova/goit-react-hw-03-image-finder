import React, { Component } from 'react';
 import Searchbar from './components/Searchbar/Searchbar'
import api from './services/api'


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
    this.setState({
      searchQuery: query,
      currentPage: 1,
      hits: []
    })
  };



  fetchHits = () => {
    const { currentPage, searchQuery } = this.state

    const options = {
        searchQuery,
        currentPage
    }


  // newsApi
  //     .fetchArticles(options)
  //     .then(articles => {
  //       this.setState(prevState => ({
  //         articles: [...prevState.articles, ...articles],
  //         currentPage: prevState.currentPage + 1,
  //       }));
  //     })


    api
      .fetchHits(options)
       .then(hits => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
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



