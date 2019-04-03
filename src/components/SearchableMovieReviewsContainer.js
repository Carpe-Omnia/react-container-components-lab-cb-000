import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'cbTv1EzjVGRMCAAAHkopgoUnRLXkUpaG';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;


class SearchableMovieReviewsContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      searchTerm: "",
      reviews: []
    }
  }
  handleSubmit(event){
    event.preventDefault() ;
  }
  render(){
    return (
      <div className="searchable-movie-reviews" >
        <h1>Searchable movie container </h1>
        <MovieReviews reviews={this.state.reviews}/>
        <form onSubmit={event => this.handleSubmit(event)} >
          <input type="text" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
