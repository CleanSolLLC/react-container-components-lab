import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

let key = `${process.env.REACT_APP_API_KEY}`
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${key}`;

class SearchableMovieReviewsContainer extends Component {
    
    constructor() {
      super()
        this.state = {
          reviews: [],
          searchTerm: "",
        }
    }

    findReviews(searchCriteria) {
      let query = `&query=${searchCriteria}`
      fetch(URL+query) 
      .then((resp) => resp.json())
      .then((data) => this.setState({reviews: data.results}))   
      
    }

    changeHandler(event) {
      this.setState({
       searchTerm: event.target.value,
      })
    }
  
    onSubmitHandler(event) {
      event.preventDefault()
      let formData = this.state.searchTerm
      this.findReviews(formData)
    }

    render() {
      return (
        <div>
           <h3 className="inline d-flex justify-content-center">Search For Movie Review:</h3>
           <form onSubmit={(event) => this.onSubmitHandler(event)} className="form-inline d-flex justify-content-center">
                <input className="form-control"
                  type="text"
                  name="name" 
                  onChange={(event) => this.changeHandler(event)}
                  value={this.state.searchTerm}
               />
                 <button type="submit" className="btn btn-primary">Find Review</button>
           </form>

           <div>
              {this.state.reviews.map((review, index) => 
                 <MovieReviews 
                    key={index} 
                   review={review}
                />
              )}
           </div>
      </div>
      )
    }

}; 
export default SearchableMovieReviewsContainer;