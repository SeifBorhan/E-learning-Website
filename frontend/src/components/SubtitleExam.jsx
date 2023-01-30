import React from "react";
import { red } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import "./SubtitleVideo.css";
import { fontWeight } from "@mui/system";

const SubtitleExam = (props) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const onTrigger = () => {
    props.onClick(props.exam);
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
      <span className="containerSubtitleVideoText">{props.number}. Exam</span>
      <div className="containerSubtitleVideoIcon">
        <span className="containerSubtitleVideoIconText"></span>
      </div>
    </div>
  );
};

export default SubtitleExam;
