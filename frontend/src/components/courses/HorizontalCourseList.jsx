import CourseTest from "../CourseTest";
import SRCourse from "../SRCourse";
import classes from "./CourseList.module.css";
function HorizontalCourseList(props) {
  return (
    <ul className={classes.list}>
      {props.course.map((course) => (
        <CourseTest
          key={course._id}
          id={course._id}
          image={course.thumbnail}
          courseName={course.courseName}
          price={course.price}
          subject={course.subject}
          //rating={course.rating}
          summary={course.summary}
          instructor={
            course.instructorID.firstName + " " + course.instructorID.lastName
          }
          discount={course.discount}
          discountDuration={course.discountDuration}
          totalHours={course.totalHours}
        />
      ))}
    </ul>
  );
}

export default HorizontalCourseList;
