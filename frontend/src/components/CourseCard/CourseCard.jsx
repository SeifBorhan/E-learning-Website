import classes from "./CourseCard.module.css";
import Rating from "@mui/material/Rating";
import { useState, useEffect } from "react";
import { LinearProgress } from "@mui/material";
import ReviewsAndRatings from "../ReviewsAndRatings";
import Ratings from "../Ratings";
import axios from "axios";
import Loading from "../ui/Loading";
import RatingInst from "../RatingInst";
import { useSnackbar } from "notistack";

function CourseCard(props) {
  const [value, setValue] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [rateFlag, setRateFlag] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [instRateFlag, setInstRateFlag] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (message, variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };

  let isRating = false;

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/viewProgress?id=${props.id}&traineeId=${props.traineeId}`
      )
      .then((res) => {
        setProgress(parseInt(res.data));
        setLoading(false);
      });
  }, []);

  const rateCourse = () => {
    isRating = true;
    setRateFlag(true);
  };
  const handleCallback3 = (childData) => {
    setRateFlag(childData);
    setInstRateFlag(childData);
  };

  const rateInstructor = () => {
    isRating = true;
    setInstRateFlag(true);
  };

  const goToCourse = () => {
    if (!isRating) {
      window.location.href = `http://localhost:3000/subtitleview?courseId=${props.id}`;
    }
  };

  if (!loading) {
    return (
      <div className={classes.body}>
        {rateFlag && (
          <Ratings
            onClick={handleCallback3}
            id={props.id}
            variant={handleClickVariant}
          />
        )}
        {instRateFlag && (
          <RatingInst
            onClick={handleCallback3}
            id={props.course.instructorID._id}
            variant={handleClickVariant}
          />
        )}
        <div className={classes["courses-container"]}>
          <div className={classes.course} onClick={goToCourse}>
            <div className={classes["course-preview"]}>
              <h6>Course</h6>
              <h2 style={{ color: "#fff" }}>{props.course.courseName}</h2>
              <a
                className={classes.pushTextInstructor}
                onClick={rateInstructor}
                style={{ color: "rgb(64, 209, 209)" }}
              >
                {`By: ${
                  props.course.instructorID.firstName +
                  " " +
                  props.course.instructorID.lastName
                }`}{" "}
                <i className="fas fa-chevron-righ"></i>
              </a>
            </div>
            <div className={classes["course-info"]}>
              <div className={classes["progress-container"]}>
                <div className={classes.progress}>
                  <LinearProgress
                    variant="determinate"
                    value={progress ? progress : 0}
                    color="error"
                  />
                </div>
                <span className={classes["progress-text"]}>
                  {progress ? progress : 0}% Complete
                </span>
              </div>
              <div className={classes.pushText2}>
                <h6>{props.course.subject}</h6>
                <h2>{props.course.courseName}</h2>
              </div>
            </div>
            <div className={classes.rateStyle} onClick={rateCourse}>
              <Rating
                name="read-only"
                value={value}
                readOnly
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />{" "}
              <br />
              <div className={classes.pushText}>Rate this course</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
}
export default CourseCard;
