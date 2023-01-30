import { useState } from "react";
import Card from "../ui/Card.jsx";
import classes from "./CourseItem.module.css";
import Button from "react-bootstrap/esm/Button";
function Course(props) {
  const [showMessage, setShowMessage] = useState(false);
  const x = true;

  function onMouseEnter() {
    setShowMessage(true);
  }
  function onMouseLeave() {
    setShowMessage(false);
  }
  function onClick() {
    if (x) {
      window.location.href = `/course?courseId=${props.id}`;
    } else {
      window.location.href = `/courseEdit?courseId=${props.id}`;
    }
  }

  return (
    <>
      <li className={classes.item}>
        <Card
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
        >
          <div className={classes.image}>
            <img src={props.image} alt={props.title} />
          </div>
          <div className={classes.content}>
            <h3>{props.courseName}</h3>
            <h4>{props.subject}</h4>
            <h5>{props.price}</h5>
            <p>{props.rating}</p>
            <p>{props.totalHours}</p>
          </div>
        </Card>

        <Button
          variant="outline-primary"
          type="submit"
          onClick={() =>
            (window.location.href = `/courseRatings?id=${props.id}`)
          }
        >
          View Ratings
        </Button>
      </li>
      {showMessage && <h1>{props.courseName} is HoveredOn</h1>}
    </>
  );
}

export default Course;
