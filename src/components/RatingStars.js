import React from 'react';
import fullStarImg from '../images/Full.png'; // 全星图像路径
import halfStarImg from '../images/Half.png';
import emptyStarImg from '../images/Empty.png'; // 空星图像路径
import '../styles/RatingStars.css'; // 引入样式文件

const RatingStars = ({ rating }) => {
    const stars = [];
    const maxRating = 5; // 最大评分值
    const scorePerHalfStar = maxRating / (5 * 2); // 每半星的分数，这里是5个星星，每个星星2半星
    const totalHalfStars = Math.round(rating / scorePerHalfStar); // 总共的半星数量
  
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
  
export default RatingStars; // 导出RatingStars组件