import React from 'react';
import fullStarImg from '../images/Full.png';
import halfStarImg from '../images/Half.png';
import emptyStarImg from '../images/Empty.png';
import '../styles/RatingStars.css';

const RatingStars = ({ rating }) => {
    const stars = [];
    const maxRating = 5;
    // Calculate the score per half star
    const scorePerHalfStar = maxRating / (5 * 2);
    // Calculate the total number of half stars
    const totalHalfStars = Math.round(rating / scorePerHalfStar);
  
    // Loop through the total number of stars
    for (let i = 0; i < 5; i++) {
        if (totalHalfStars > i * 2 + 1) {
          stars.push(<img src={fullStarImg} alt="Full Star" className="rating-star" key={i} />);
        } else if (totalHalfStars === i * 2 + 1) {
          stars.push(<img src={halfStarImg} alt="Half Star" className="rating-star" key={i} />);
        } else {
          stars.push(<img src={emptyStarImg} alt="Empty Star" className="rating-star" key={i} />);
        }
      }
    
      return <div className="rating-container">{stars}</div>;
};
  
export default RatingStars;