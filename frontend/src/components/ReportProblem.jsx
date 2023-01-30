import React from "react";
import { useState, useEffect } from "react";
import { Select, MenuItem, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./ReportProblem.css";
import axios from "axios";
import { Button } from "@mui/material";

const ReportProblem = (props) => {
  const [age, setAge] = React.useState("Choose a type");
  const [problem, setProblem] = React.useState("");

  const params = new URLSearchParams(window.location.search);
  const courseId = params.get("courseId");

  const [traineeId, setTraineeId] = useState([]);

  useEffect(() => {
    axios.get("/getToken").then((res) => {
      setTraineeId(res.data._id);
    });
  }, []);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChange1 = (event) => {
    setProblem(event.target.value);
  };
  const close = () => {
    props.onClick(false);
  };

  const postData = async () => {
    await axios
      .post(`http://localhost:8000/reportProblem`, {
        type: age,
        id: traineeId,
        description: problem,
        courseID: courseId,
        status: "unresolved",
      })
      .then((res) => {
        props.variant("Problem Reported Successfully", "success");
        props.onClick(false);
      });
  };

  return (
    <div className="report-problem-container">
      <div className="report-problem-group6749">
        <div className="report-problem-group6748">
          <div className="report-problem-container1">
            <div className="closeIcon1" onClick={close}>
              <CloseIcon />
            </div>
            <span className="report-problem-text">Report a Problem</span>
          </div>
          <div className="report-problem-container2">
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
              style={{ width: 370 }}
            >
              <MenuItem value={"Technical"}>Technical</MenuItem>
              <MenuItem value={"Financial"}>Financial</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </div>
          <span className="report-problem-text1">Problem Type</span>
          <div className="report-problem-container3">
            <TextField
              id="outlined-multiline-static"
              multiline
              label="What is Wrong ?"
              rows={14}
              value={problem}
              onChange={handleChange1}
              style={{ width: 800 }}
            />
          </div>
          <span className="report-problem-text2">Tell us</span>
          <div className="report-problem-group6747">
            <Button
              variant="contained"
              color="error"
              onClick={postData}
              sx={({ height: 45 }, { width: 200 })}
            >
              Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportProblem;
