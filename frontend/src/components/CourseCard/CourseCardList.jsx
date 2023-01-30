//import Course from "./CourseItem";
import classes from "./CourseCardList.module.css";
import CourseCard from "./CourseCard";
function CourseCardList(props) {
  return (
    <ul className={classes.list}>
      {props.course.map((course, index) => (
        <CourseCard
          key={course._id}
          id={course._id}
          image={course.thumbnail}
          courseName={course.courseName}
          price={course.price}
          subject={course.subject}
          instructorName={props.instructorName[index]}
          //rating={course.rating}
          totalHours={course.totalHours}
        />
      ))}
    </ul>
  );
}

export default CourseCardList;
