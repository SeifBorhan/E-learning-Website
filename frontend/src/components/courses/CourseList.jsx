import CourseTest from "../CourseTest";
import classes from "./CourseList.module.css";
function AllCourses(props) {
  var i = 0;
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
          rating={course.averageRating}
          summary={course.summary}
          i={i++}
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

export default AllCourses;
