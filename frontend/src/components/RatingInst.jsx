import React, { useState } from "react";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Rating from "@mui/material/Rating";
import { TextField } from "@mui/material";
import axios from "axios";

import "./Ratings.css";

const RatingInst = (props) => {
  const [review, setReview] = useState("");
  const [rate, setRate] = useState(0);

  const params = new URLSearchParams(window.location.search);
  const traineeId = params.get("id");
  const close = () => {
    props.onClick(false);
  };
  const postData = async () => {
    await axios
      .post(`http://localhost:8000/rateInstructor?id=${traineeId}`, {
        rating: rate,
        instructor: props.id,
        enteredReview: review,
      })
      .then((res) => {
        props.onClick(false);
        props.variant("Review Submitted Successfuly", "success");

      });
  };

  return (
    <div class="cont">
      <div class="card">
        <div class="row">
          <div class="col-10">
            <div className="closeIconRate" onClick={close}>
              <CloseIcon />
            </div>
            <div class="comment-box ml-2">
              <h4>Write Your Review</h4>
              <div>
                <Rating
                  name="simple-controlled"
                  value={rate}
                  defaultValue="0"
                  onChange={(event, newValue) => {
                    setRate(newValue);
                  }}
                />
              </div>
              <div class="textf">
                <TextField
                  id="outlined-multiline-static"
                  label="Review"
                  multiline
                  rows={4}
                  InputProps={{ sx: { width: 300 } }}
                  value={review}
                  onChange={(e) => {
                    setReview(e.target.value);
                  }}
                />
              </div>

              <div class="comment-btns mt-2">
                <div class="row">
                  <div class="col-6">
                    <div class="btnSub">
                      <Button
                        variant="contained"
                        color="error"
                        onClick={postData}
                        sx={({ height: 25 }, { width: 150 })}
                      >
                        Submit Review
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingInst;
