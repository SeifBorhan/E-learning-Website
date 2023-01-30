import { useEffect, useState } from "react";
import axios from "axios";
import AllCourses from "../components/courses/CourseList";

function TraineeView() {
  const [courses, setCourses] = useState([]);

  const params = new URLSearchParams(window.location.search);

  const traineeId = params.get("id");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/traineeView?id=${traineeId}`)
      .then((res) => {
        setCourses(res.data.courses);
      });
  }, []);

  return (
    <>
      <AllCourses course={courses} />
    </>
  );
}

export default TraineeView;
