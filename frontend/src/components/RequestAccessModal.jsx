import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "./CreateCourseModal.css";
import { Button, TextField } from "@mui/material";
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

const RequestAccessModal = (props) => {
  const params = new URLSearchParams(window.location.search);
  const courseId = params.get("courseId");
  const [traineeId, setTraineeId] = useState("");

  const close = () => {
    props.onClick(false);
  };
  useEffect(() => {
    axios.get("/getToken", { withCredentials: true }).then((res) => {
      setTraineeId(res.data._id);
      console.log(res.data._id);
    });
  }, []);

  const postData = async () => {
    await axios
      .post(
        `http://localhost:8000/traineeSendRequest?id=${traineeId}&course=${courseId}`
      )
      .then((res) => {
        console.log(res.data);
        props.variant("Course Request Sent Successfully", "success");
        close();
      });
  };

  return (
    <div className="cont">
      <div className="create-course-container">
        <div className="create-course-profileRequest">
          <div className="create-course-group23">
            <div className="closeIcon" onClick={close}>
              <CloseIcon />
            </div>
            <span className="create-course-textRequest Title_PoppinsLarge">
              <span>Do you want to request access to this course?</span>
            </span>
          </div>
          <div className="submitCourseRequest">
            <Button
              variant="contained"
              color="error"
              onClick={postData}
              sx={({ height: 45 }, { width: 200 })}
            >
              Yes
            </Button>
          </div>
          <div className="submitCourseRequest1">
            <Button
              variant="outlined"
              color="error"
              onClick={close}
              sx={({ height: 45 }, { width: 200 })}
            >
              No
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestAccessModal;
