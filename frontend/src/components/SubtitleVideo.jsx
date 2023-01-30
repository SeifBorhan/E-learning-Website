import React from "react";
import { red } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import "./SubtitleVideo.css";
import { fontWeight } from "@mui/system";
import axios from "axios";
import { useState, useEffect } from "react";

const { video } = require("../pages/VideoPage");
const SubtitleVideo = (props) => {
  const [trainee, setTrainee] = useState({});
  const label = { inputProps: { "aria-label": "Checkbox demo" } };



  const onTrigger = () => {
    props.onClick(props.video);
    console.log(trainee)
    if (trainee)
      axios.get(`/video?id=${props.id}`, { withCredentials: true }).then((res) => {
        console.log(res.data)
      });
  };
  return (
    <div className="containerSubtitleVideo" onClick={onTrigger}>
      <div>
        <Checkbox
          {...label}
          // defaultChecked
          sx={{
            color: "black",
            "&.Mui-checked": {
              color: "black",
            },
          }}
        />
      </div>
      <span className="containerSubtitleVideoText">
        {props.number}. {props.video.name}
      </span>
      <div className="containerSubtitleVideoIcon">
        <PlayCircleIcon fontSize="xsmall" />{" "}
        <span className="containerSubtitleVideoIconText">
          {props.video.duration}min
        </span>
      </div>
    </div>
  );
};

export default SubtitleVideo;
