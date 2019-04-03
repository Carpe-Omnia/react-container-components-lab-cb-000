import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'cbTv1EzjVGRMCAAAHkopgoUnRLXkUpaG';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {
  constructor(){
    super();
    this.state = {reviews: []}
    fetch(URL)
    .then(res => res.json())
    .then(function(json){
      this.setState({
        reviews: json.response.data
      })
      console.log(json);
    })
  }
  render(){
    return (
      <div className="latest-movie-reviews" >
        <h1>Latest movie container </h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer ;
