import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
require('dotenv').config();

let key = `${process.env.REACT_APP_API_KEY}`
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${key}`;

class LatestMovieReviewsContainer extends Component {

    constructor() {
        super()
          this.state= {
            reviews: [],
          }
      }
  
    componentDidMount() {
      fetch(URL) 
      .then((resp) => resp.json())
      .then((data) => this.setState({reviews: data.results}))      
    }

    render() {
      return (
        <div className="latest-movie-reviews">
          {this.state.reviews.map((review, index) => 
            <MovieReviews 
              key={index} 
              review={review}
            />
          )}
        </div>
      )
    };
}; 
export default LatestMovieReviewsContainer;




