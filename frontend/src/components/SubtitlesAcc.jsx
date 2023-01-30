import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./SubtitleAcc.css";
import SubtitleVideo from "./SubtitleVideo";
import SubtitleExam from "./SubtitleExam";

const SubtitlesAcc = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const [vids, setVids] = useState([]);
  const [exam, setExams] = useState({});
  const [course, setCourse] = useState("");
  const [loading, isLoading] = useState(true)
  const [trainee, setTrainee] = useState('')
  let i = 0;

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    axios.get(`http://localhost:8000/subtitles?id=${props.id}`).then((res) => {
      setVids(res.data.vids);
      if (res.data.exs)
        setExams(res.data.exs);
      else
        setExams(false)
      console.log(props.id)
      console.log(res.data.exs)
      isLoading(false)
    });
    axios.get(`http://localhost:8000/getToken`).then((res) => {
      setTrainee(res.data)
      console.log(res.data)
    });
  }, []);

  if (loading) return null
  else
    return (

      <div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          className="subtitle-accord"
          style={{ backgroundColor: "#f1f1f1" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                width: "70%",
                flexShrink: 0,
                fontSize: 13,
                fontStyle: "Bolder",
                fontWeight: 900,
              }}
            >
              Subtitle {props.number}:{props.subtitle.name}
            </Typography>
            <br />
            <Typography
              sx={{ color: "text.secondary", fontSize: 12 }}
              className="subtitle-accordText"
            >
              0 / {vids.length + (exam ? 1 : 0)} | {props.subtitle.duration}min
            </Typography>
          </AccordionSummary>
          <br />
          {vids.map((v) => {
            i++;
            return (
              <SubtitleVideo
                video={v}
                id={v._id}
                trainee={trainee}
                number={i}
                onClick={props.onClickVideo}
              />
            );
          })}
          {exam &&
            <SubtitleExam
              exam={exam}
              id={exam._id}
              number={i + 1}
              onClick={props.onClickExam}
            />
          }

        </Accordion>
      </div>
    );
};

export default SubtitlesAcc;
