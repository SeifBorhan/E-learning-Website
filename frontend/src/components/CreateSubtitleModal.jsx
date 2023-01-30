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
import { useSnackbar } from "notistack";

const CreateSubtitleModal = (props) => {
  const [Close, setClose] = useState(false);
  const [subname, setSubname] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (message, variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };

  useEffect(() => {
    setClose(false);
  }, []);
  const close = () => {
    props.onClick(false);
  };
  const params = new URLSearchParams(window.location.search);
  const courseId = params.get("courseId");

  const postData = async () => {
    await axios
      .post(`http://localhost:8000/createSubtitle?id=${courseId}`, {
        subtitleName: subname,
      })
      .then((res) => {
        handleClickVariant("Subtitle Created", "success");
        window.location.href = `/instructorcourseoutline?courseId=${courseId}`;
      });
  };
  if (!Close) {
    return (
      <div className="cont">
        <div className="create-course-container">
          <div className="create-course-profile111">
            <div className="create-course-group23">
              <div className="closeIcon" onClick={close}>
                <CloseIcon />
              </div>
              <span className="create-course-text Title_PoppinsLarge">
                <span>Add New Subtitle</span>
              </span>
            </div>
            <div className="create-course-bigoutline-default">
              {" "}
              <TextField
                required
                id="outlined-required"
                label="Subtitle Name"
                value={subname}
                onChange={(e) => {
                  setSubname(e.target.value);
                }}
                InputProps={{ sx: { width: 342 } }}
              />
            </div>
            <div className="submitCourse1">
              <Button
                variant="contained"
                color="error"
                onClick={postData}
                sx={({ height: 35 }, { width: 200 })}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default CreateSubtitleModal;
