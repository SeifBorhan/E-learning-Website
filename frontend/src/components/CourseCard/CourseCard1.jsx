import classes from "./CourseCard1.module.css";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import ReviewsAndRatings from "../ReviewsAndRatings";

function CourseCard(props) {
  const [value, setValue] = useState(0);
  const [ratings, setRatings] = useState(false);

  let isRating = false;

  const handleClose = (childData) => {
    setRatings(childData);
  };

  const goToCourse = () => {
    if (!isRating) {
      window.location.href = `http://localhost:3000/instructorcourseoutline?courseId=${props.id}`;
    }
  };

  const onClickViewRatings = () => {
    isRating = true;
    setRatings(true);
  };

  return (
    <>
      {ratings && (
        <ReviewsAndRatings rating={props.rating} onClick={handleClose} />
      )}
      <div className={classes.body}>
        <div className={classes["courses-container"]}>
          <div className={classes.course} onClick={goToCourse}>
            <div className={classes["course-preview"]}>
              <h6>Course</h6>
              <h2 style={{ color: "#fff" }}>{props.course.courseName}</h2>
              <a>
                <i className="fas fa-chevron-righ"></i>
              </a>
            </div>
            <div className={classes["course-info"]}>
              <div className={classes.pushText2}>
                <h6>{props.course.subject}</h6>
                <h2>{props.course.courseName}</h2>
              </div>
            </div>
            <div className={classes.rateStyle} onClick={onClickViewRatings}>
              <Rating
                name="read-only"
                precision={0.5}
                value={props.course.averageRating}
                readOnly
              />{" "}
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CourseCard;
