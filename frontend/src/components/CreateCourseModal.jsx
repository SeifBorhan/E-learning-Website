import React, { useState } from "react";
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
import axios from "axios";
import { redirect } from "react-router-dom";
const CreateCourseModal = (props) => {
  const [Close, setClose] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");
  const [year, setYear] = useState("");
  const [subject, setSubject] = useState("");
  const [summary, setSummary] = useState("");
  const [instructor, setInstructor] = useState("");
  const [pv, setPv] = useState("");
  const [message, setMessage] = useState("");

  const closeIt = () => {
    props.onClick(false);
  };
  const postData = async (e) => {
    e.preventDefault();

    console.log(courseName, price, photo, year, subject, summary);
    await axios
      .post("http://localhost:8000/createCourse", {
        courseName,
        price,
        photo,
        year,
        subject,
        summary,
        pv,
        instructor,
      })
      .then((res) => {
        setMessage(res.data._id);
        window.location.reload();
        props.variant("Course Created Successfully", "success");
      });
  };
  useEffect(() => {
    setClose(false);
    const getInstructor = async (e) => {
      await axios.get("/getToken", { withCredentials: true }).then((res) => {
        setInstructor(res.data);
        console.log(res.data);
      });
    };
    getInstructor();
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
              <div className="closeIcon" onClick={closeIt}>
                <CloseIcon />
              </div>
              <span className="create-course-text Title_PoppinsLarge">
                <span>Add New Course</span>
              </span>
            </div>
            <div className="create-course-bigoutline-default">
              {" "}
              <TextField
                required
                id="outlined-required"
                label="Course Name"
                onChange={(e) => setCourseName(e.target.value)}
                InputProps={{ sx: { width: 342 } }}
              />
            </div>
            <div className="create-course-container2">
              <TextField
                required
                id="outlined-required"
                label="Subject"
                onChange={(e) => setSubject(e.target.value)}
                InputProps={{ sx: { width: 342 } }}
              />
            </div>
            <div className="create-course-bigoutline-default2">
              <TextField
                required
                id="outlined-required"
                label="Thumbnail Photo"
                onChange={(e) => setPhoto(e.target.value)}
                InputProps={{ sx: { width: 342 } }}
              />
            </div>
            <div className="create-course-bigoutline-select">
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Price
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  label="Price"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </FormControl>
            </div>
            <div className="create-course-bigoutline-default3">
              <TextField
                required
                id="outlined-required"
                label="Year of Upload"
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
            <div className="create-course-bigoutline-default4">
              <TextField
                required
                id="outlined-required"
                label="Summary"
                onChange={(e) => setSummary(e.target.value)}
                InputProps={{ sx: { width: 342 } }}
              />
            </div>
            <div className="submitCourse">
              <Button
                variant="contained"
                color="error"
                onClick={postData}
                sx={({ height: 35 }, { width: 150 })}
              >
                Submit
              </Button>
            </div>
            <div className="create-course-group71">
              <div className="create-course-bigoutline-default5">
                <TextField
                  required
                  id="outlined-required"
                  label="Preview Video"
                  value={pv}
                  onChange={(e) => setPv(e.target.value)}
                  InputProps={{ sx: { width: 342 } }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default CreateCourseModal;
