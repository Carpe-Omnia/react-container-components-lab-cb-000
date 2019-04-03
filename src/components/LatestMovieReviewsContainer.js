import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
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
      console.log(json)
    })
  }
  render(){
    return (
      <div className="latest-movie-reviews" >
        <h1>Latest movie container </h1>
        <MovieReviews />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer ;
