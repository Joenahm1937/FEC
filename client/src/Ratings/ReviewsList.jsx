import { data } from "jquery";
import React from "react";
import { useState } from "react";
import ReviewTile from "./ReviewTile.jsx";

var ReviewsList = ({reviews, shownReviews, addReview}) => {

  var addBtn = shownReviews != reviews.length ? <button onClick={addReview}>More Reviews</button> : null;
  return (
  <div className="ReviewBox">
    <h4>Review List</h4>
    {reviews.slice(0, shownReviews).map(review => {
      return (
        <ReviewTile
          id={`Tile ${review.review_id}`}
          key={review.review_id}
          starRating={review.rating}
          dateWritten={conformDate(review.date)}
          summary={review.summary}
          body={review.body}
          images={review.photos}
          recommend={review.recommend}
          name={review.reviewer_name}
          response={review.response}
          helpfulness={review.helpfulness}
        />
      )})
    }
    { addBtn }
  </div>
  )
}

var conformDate = (date) => {
  var months = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December",
  }
  var d = date.substring(0, 10);
  var [year, month, day] = d.split("-");
  return `${months[month]} ${day[0] !== 0 ? day : day[1]}, ${year}`
}

export default ReviewsList;