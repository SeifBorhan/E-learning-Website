import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./CreateCourseModal.css";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";

const CreateVideoModal = (props) => {
  const [descrip, setDescrip] = useState("");
  const [vname, setVname] = useState("");
  const [vURL, setVURL] = useState("");
  const params = new URLSearchParams(window.location.search);
  const courseId = params.get("courseId");

  const close = () => {
    props.onClick(false);
  };
  useEffect(() => {}, []);

  const postData = async () => {
    console.log(props.subid);
    await axios
      .post(`http://localhost:8000/uploadVideo?courseId=${courseId}`, {
        vid: vURL,
        vname: vname,
        descr: descrip,
        subID: props.subid,
      })
      .then((res) => {
        window.location.href = `/instructorcourseoutline?courseId=${courseId}`;
      });
  };

  return (
    <div className="cont">
      <div className="create-course-container">
        <div className="create-course-profile222">
          <div className="create-course-group23">
            <div className="closeIcon" onClick={close}>
              <CloseIcon />
            </div>
            <span className="create-course-text Title_PoppinsLarge">
              <span>Add New Video</span>
            </span>
          </div>
          <div className="create-course-bigoutline-default">
            {" "}
            <TextField
              required
              id="outlined-required"
              label="Video Name"
              value={vname}
              onChange={(e) => {
                setVname(e.target.value);
              }}
              InputProps={{ sx: { width: 342 } }}
            />
          </div>
          <div className="curl">
            {" "}
            <TextField
              required
              id="outlined-required"
              label="Video URL"
              value={vURL}
              onChange={(e) => {
                setVURL(e.target.value);
              }}
              InputProps={{ sx: { width: 342 } }}
            />
          </div>
          <div className="create-course-container21">
            <TextField
              required
              id="outlined-required"
              label="Description"
              multiline
              value={descrip}
              onChange={(e) => {
                setDescrip(e.target.value);
              }}
              rows={3}
              InputProps={{ sx: { width: 342 } }}
            />
          </div>
          <div className="submitCourse205">
            <Button
              variant="contained"
              color="error"
              onClick={postData}
              sx={({ height: 35 }, { width: 200 })}
            >
              Submit
            </Button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default CreateVideoModal;
