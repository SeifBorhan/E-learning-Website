import React, { useState } from "react";
import "./ReviewsAndRatings.css";
import { TextField } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { Rating } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";
import ReviewCard from "./ReviewCard";
var i = 0;
const ReviewsAndRatings = (props) => {
  const [Close, setClose] = useState(false);

  const close = () => {
    props.onClick(false);
  };
  var reviews;
  const ratings = props.rating;
  console.log(ratings);

  for (let r of props.rating) {
    reviews += <ReviewCard review={r} key={r._id} />;
  }
  if (!Close) {
    return (
      <div className="cont">
        <div className="reviewrating-container">
          <div className="closeIconrev" onClick={close}>
            <CloseIcon />
          </div>
          <div className="reviewrating-profile1">
            {props.rating.map((r) => {
              return <ReviewCard review={r} key={r._id} />;
            })}

            {/* <ReviewCard review={props.rating[0]} key={props.rating[0]._id} /> */}
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default ReviewsAndRatings;
