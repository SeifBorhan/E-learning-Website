import React from "react";
import { useState } from "react";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import OutlineSubtitleContent from "../components/OutlineSubtitleContent";
import OutlineContentExam from "./OutlineContentExam";

const OutlineSubtitle = (props) => {
  const [showVideos, setShowVideos] = useState(false);

  const showVideosHandle = () => {
    setShowVideos(!showVideos);
  };
  return (
    <>
      <div className="outline-topic">
        <div className="outline-container15"></div>
        <div className="outline-content" onClick={showVideosHandle}>
          <div className="outline-container16"></div>
          <div className="outline-container17"></div>
          <span className="outline-text32">
            <span>{props.s.videos.length} videos</span>
          </span>
          <span className="outline-text34">
            <span>{props.s.duration} min</span>
          </span>
        </div>
        <div className="outline-container18">
          <TurnedInIcon fontSize="large" />
        </div>
        <span className="outline-text36">
          <span>{props.s.name}</span>
        </span>
        <span className="outline-text38">
          <span>
            Who are you developing for? How will they use your design? Building
            user personas can answer these.
          </span>
        </span>
      </div>
      {showVideos &&
        props.s.videos.map((v) => {
          return (
            <div className="pushOutlineContent">
              <OutlineSubtitleContent video={v} />
            </div>
          );
        })}
      <div className="pushOutlineContent">
        {showVideos && props.s.exam && (
          <OutlineContentExam exam={props.s.exam} />
        )}
      </div>
    </>
  );
};

export default OutlineSubtitle;
