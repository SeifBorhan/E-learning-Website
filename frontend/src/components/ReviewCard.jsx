import React from "react";

import PropTypes from "prop-types";
import Rating from "@mui/material/Rating";

import "./ReviewCard.css";

const ReviewCard = (props) => {
  const [value, setValue] = React.useState(2);
  console.log(props.review)
  return (


    <div className="review-card-testimonial-card">
      <span className="review-card-text">{props.review.review ? props.review.review : ''}</span>
      <div className="review-card-profile">
        <img
          alt={props.review.traineeID.photo}
          src={props.review.traineeID.photo}
          className="review-card-image"
        />
        <div className="review-card-container">
          <span className="review-card-text1">{props.review.traineeID.userName}</span>
          <span className="review-card-text2">
            <Rating name="read-only" value={props.review.rate ? props.review.rate : 5} defaultValue={5} readOnly />
          </span>
        </div>
        <div className="review-card-container1"> </div>
      </div>
    </div>
  );
};

// ReviewCard.defaultProps = {
//   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum. Nam pellentesque nulla leo, sagittis vehicula sem commodo nec. Integer egestas, quam eu convallis ultrices, est nisl rutrum tellus, sed posuere velit nisi sit amet ante. In a augue porttitor, porta sapien sed, faucibus felis.",
//   image_src:
//     "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&ixlib=rb-1.2.1&w=200",
//   image_alt: "John Doe",
//   text1: "John Doe",
//   text2: "Software Engineer",
// };

// ReviewCard.propTypes = {
//   text: PropTypes.string,
//   image_src: PropTypes.string,
//   image_alt: PropTypes.string,
//   text1: PropTypes.string,
//   text2: PropTypes.string,
// };

export default ReviewCard;
