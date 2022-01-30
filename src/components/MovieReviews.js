
import React from "react";

const MovieReviews = (props) => {
  console.log(props.review.multimedia)
  return(
    <div className="review-list">
        <ul style={{listStyleType: "none"}}>
          <li className="review">
             <h2>{props.review.display_title} {props.review.mpaa_rating}</h2>
             {/* <img src={props.review.multimedia.src} alt={props.review.display_title}/> */}
             <a href={props.review.link.url} target="_blank" rel="noopener noreferrer"><h3>{props.review.link.suggested_link_text}</h3></a>
             <br />
          </li>
        </ul>
    </div>
  )
};

MovieReviews.defaultProps = {
  src: "not available"
};

export default MovieReviews;
