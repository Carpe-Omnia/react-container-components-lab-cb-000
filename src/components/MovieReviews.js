import React, { Component } from 'react';

const MovieReviews = (props) => {
  return (
    <div className="movie reviews" >
      <h2> movie review </h2>
      {props.reviews.map((review) =>{
        <p> {review.headline} </p>
        <p> {review.display_title} </p>
        <p> {review.link.url} </p>
      })}
    </div>
  )
}

export default MovieReviews ;
