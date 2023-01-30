import Accordion from "../components/Subtitle";
import { React, useEffect, useState } from "react";
import axios from "axios";

import "../index.scss";

const SubtitleView = (props) => {
  const params = new URLSearchParams(window.location.search);
  const courseId = params.get("courseId");
  const [subs, setSubs] = useState([]);
  const [course, setCourse] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:8000/course?courseId=${courseId}`)
      .then((res) => {
        setCourse(res.data);
        setSubs(res.data.subtitles);
      });
  }, []);
  return (
    <div className="subtitle-view-container">
      <div className="subtitle-view-container1">
        <h1 className="subtitle-view-text">
          <span>{course.courseName}</span>
        </h1>
      </div>
      <div className="subtitle-view-container2">
        <div className="subtitle-view-container3">
          <h1 className="subtitle-view-text3">Subtitles</h1>
        </div>
        <Accordion subtitles={subs} />
      </div>
    </div>
  );
};

export default SubtitleView;
