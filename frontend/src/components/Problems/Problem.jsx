import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ButtonR from "@mui/material/Button";
import AlarmIcon from "@mui/icons-material/Alarm";
import Add from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import "../AdminProblem/AdminProblem.css";
import axios from "axios";

function Problem(props) {
  const [createCourseFlag, setCreateCourseFlag] = useState(false);
  const [comment, setComment] = useState("");

  const postData = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/addComment", {
        comment,
        problemID: props.problem._id,
      })
      .then((res) => {
        window.location.reload();
      });
  };
  const onClickCreateCourse = () => {
    setCreateCourseFlag(true);
  };
  return (
    <div className="col6">
      <div class="d-flex justify-content-center row">
        <div className="col6">
          <div class="bg-white comment-section">
            <div class="d-flex flex-row user p-2">
              <div class="d-flex flex-column ml-2">
                <span>
                  {props.problem.type + " " + "(" + props.problem.status + ")"}{" "}
                </span>
              </div>
            </div>
            <div class="mt-2 p-2">
              <p class="comment-content">{props.problem.description}</p>
            </div>

            <div className="commentProblem">
              <TextField
                id="outlined-multiline-static"
                label="Comment"
                multiline
                onChange={(e) => setComment(e.target.value)}
                rows={1}
                InputProps={{ sx: { width: 550 } }}
              />
              <div className="createCourseBTN101">
                <Stack direction="row" spacing={2}>
                  <Button
                    startIcon={<AddIcon sx={{ color: "black" }} />}
                    onClick={postData}
                  >
                    <span className="colorText">Comment</span>
                  </Button>
                </Stack>
              </div>
            </div>
            {props.problem.comments.map((c) => {
              return <div className="student-view-comment">{c}</div>;
            })}
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Problem;
