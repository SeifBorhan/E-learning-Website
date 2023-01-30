import React, { useState } from "react";
import "../index.scss";
import Rating from "@mui/material/Rating";

const SRCourse = (props) => {
  const [value, setValue] = useState(0);

  let disc;
  const goToCourse = () => {
    window.location.href = `/outline?courseId=${props.id}`;
  };

  if (props.course.discount != 1) {
    disc = (
      <p className="oldprice">
        {props.code}
        {parseInt(props.course.price * props.conversion)}
      </p>
    );
  } else {
    disc = <br />;
  }
  return (
    <div>
      <div className="search-results-container4">
        <div className="search-results-container5">
          <div className="search-results-jobslist" onClick={goToCourse}>
            <div className="search-results-frame01">
              <h1>{props.course.courseName}</h1>
              <span className="search-results-text19">
                {props.course.summary}
              </span>
            </div>
            <img
              class="search-results-container6"
              src={props.course.thumbnail}
            ></img>
            <span className="search-results-text20">{disc}</span>
            <span className="search-results-text21">
              {props.code}
              {parseInt(
                props.course.price * props.course.discount * props.conversion
              )}
            </span>
            <span className="search-results-text22">
              Duration: {props.course.totalHours} min
            </span>
            <div className="search-results-icon">
              <Rating
                name="read-only"
                value={parseInt(props.course.averageRating)}
                readOnly
              />{" "}
            </div>
            <span className="search-results-tx">
              ({props.course.rating.length})
            </span>
            <span className="search-results-text24">
              By: {props.course.instructorID.firstName}{" "}
              {props.course.instructorID.lastName}
            </span>
            <span className="search-results-text25">
              ({props.course.subject})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SRCourse;
