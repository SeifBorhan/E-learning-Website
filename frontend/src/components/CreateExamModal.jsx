import React, { useState } from "react";

import "./CreateCourseModal.css";
import { TextField } from "@mui/material";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";

const CreateExamModal = (props) => {
  const [Close, setClose] = useState(false);
  useEffect(() => {
    setClose(false);
  }, []);
  const close = () => {
    setClose(true);
  };
  if (!Close) {
    return (
      <div className="cont">
        <div className="create-course-container">
          <div className="create-course-profile1">
            <div className="create-course-group23">
              <div className="closeIcon" onClick={close}>
                <CloseIcon />
              </div>
              <span className="create-course-text Title_PoppinsLarge">
                <span>Add New Exam</span>
              </span>
            </div>
            <div className="create-course-bigoutline-default">
              {" "}
              <TextField
                required
                id="standard-required"
                label="Question"
                defaultValue=""
                variant="standard"
                className="stretchInputField"
                InputProps={{ sx: { height: 40 } }}
              />
            </div>
            <div className="create-course-container2">
              <TextField
                required
                id="standard-required"
                label="Choice 1"
                defaultValue=""
                variant="standard"
                className="stretchInputField"
                InputProps={{ sx: { height: 40 } }}
              />
            </div>
            <div className="create-course-bigoutline-default2">
              <TextField
                required
                id="standard-required"
                label="Choice2"
                defaultValue=""
                variant="standard"
                className="stretchInputField"
                InputProps={{ sx: { height: 40 } }}
              />
            </div>
            <div className="create-course-bigoutline-select">
              <TextField
                required
                id="standard-required"
                label="Choice 4"
                defaultValue=""
                variant="standard"
                className="stretchInputField"
                InputProps={{ sx: { height: 40 } }}
              />
            </div>

            <div className="create-course-bigoutline-default4">
              <TextField
                required
                id="standard-required"
                label="Correct Answer"
                defaultValue=""
                variant="standard"
                className="stretchInputField"
                InputProps={{ sx: { height: 40 } }}
              />
            </div>
            <div className="submitCourse">
              <span className="submitCourseText">Submit</span>
            </div>
            <div className="create-course-group71">
              <div className="create-course-bigoutline-default5">
                <TextField
                  required
                  id="standard-required"
                  label="Choice 3"
                  defaultValue=""
                  variant="standard"
                  className="stretchInputField"
                  InputProps={{ sx: { height: 40 } }}
                />
              </div>
            </div>
          </div>
          <span className="create-exam-text4">Question</span>
          <span className="create-exam-text5">(Max 4)</span>
          <span className="create-exam-text6">Choices</span>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default CreateExamModal;
