import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/ui/Footer";
import SvgIcon from "@mui/material/SvgIcon";
import "../index.scss";
import SubtitlesAcc from "../components/SubtitlesAcc";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";
import ErrorIcon from "@mui/icons-material/Error";
import ReportProblem from "../components/ReportProblem";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import Exam from "../components/Exam/Exam";
import { TextField } from "@mui/material";
import YouTube from "react-youtube";
import jsPDF from "jspdf";
import RefundCourse from "../components/RefundCourse";
import HeaderTest from "../components/Header/headertest";
import { useSnackbar } from "notistack";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
const VideoPage = (props) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);
  const [createCourseFlag, setCreateCourseFlag] = useState(false);
  const [requestRefundFlag, setRequestRefundFlag] = useState(false);
  const params = new URLSearchParams(window.location.search);
  const courseId = params.get("courseId");
  const [subs, setSubs] = useState([]);
  const [course, setCourse] = useState("");
  const [vidFlag, setVideoFlag] = useState(false);
  const [examFlag, setExamFlag] = useState(false);
  const [video, setVideo] = useState({});
  const [exam, setExam] = useState({});
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState("");
  const [progress, setProgress] = useState(false);
  const [traineeId, setTraineeId] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (message, variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };
  let tid;

  let i = 0;

  const downloadPDFFile = () => {
    let doc = new jsPDF("landscape", "px", "a4", false);
    doc.text(notes, 20, 20);
    doc.save("My Notes.pdf");
  };

  useEffect(() => {
    axios.get("/getToken", { withCredentials: true }).then((res) => {
      setTraineeId(res.data.type);
      tid = res.data._id;
      console.log(res.data._id);
      axios
        .get(`http://localhost:8000/course?courseId=${courseId}`)
        .then((res) => {
          setCourse(res.data);
          setSubs(res.data.subtitles);
          setLoading(false);
          axios
            .get(
              `http://localhost:8000/viewProgress?id=${courseId}&traineeId=${tid}`
            )
            .then((res) => {
              if (parseInt(res.data) < 50) {
                setProgress(true);
              }
            });
        });
    });
  }, []);

  const handleCallback = (childData) => {
    setVideo(childData);
    setVideoFlag(true);
    setExamFlag(false);
  };

  const handleCallback1 = (childData) => {
    setExam(childData);
    setExamFlag(true);
    setVideoFlag(false);
  };

  const handleCallback3 = (childData) => {
    setCreateCourseFlag(childData);
  };

  const handleClose = (childData) => {
    setRequestRefundFlag(childData);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const onClickCreateCourse = () => {
    setCreateCourseFlag(true);
  };

  const refundCo = () => {
    setRequestRefundFlag(true);
  };

  const navigateHome = () => {
    navigate(`/welcome`);
  };

  if (loading) return null;
  else
    return (
      <>
        <HeaderTest />
        {createCourseFlag && (
          <ReportProblem
            onClick={handleCallback3}
            variant={handleClickVariant}
          />
        )}
        {requestRefundFlag && (
          <RefundCourse onClick={handleClose} variant={handleClickVariant} />
        )}
        <div className="video-page-container">
          <div className="video-page-container1">
            <div className="video-page-container2">
              {subs.map((s) => {
                i++;
                return (
                  <SubtitlesAcc
                    subtitle={s}
                    id={s._id}
                    number={i}
                    onClickVideo={handleCallback}
                    onClickExam={handleCallback1}
                  />
                );
              })}
            </div>
            <div className="createCourseBTN202">
              <Button
                startIcon={<ErrorIcon sx={{ color: "black" }} />}
                onClick={onClickCreateCourse}
              >
                <span className="colorText">Report a problem</span>
              </Button>
            </div>
            {(traineeId === "I" ? true : false) && progress && (
              <div className="createCourseBTN202" onClick={refundCo}>
                <Button
                  startIcon={<CurrencyExchangeIcon sx={{ color: "black" }} />}
                >
                  <span className="colorText">Refund</span>
                </Button>
              </div>
            )}
          </div>
          <div className="video-page-container3">
            <span className="arrowIconVC">
              {(vidFlag || examFlag) && <ArrowForwardIcon fontSize="small" />}
            </span>
            <span className="video-page-text2">
              {vidFlag && video.name} {examFlag && "Exam"}
            </span>
            <span className="homeIconVC">
              <HomeIcon fontSize="small" />
            </span>
            <span className="video-page-text3" onClick={navigateHome}>
              Home
            </span>
          </div>
          <div className="video-page-container4">
            {vidFlag &&
              (video.videoID ? (
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoID}`}
                  className="video-page-iframe"
                ></iframe>
              ) : (
                <iframe src={video.link} className="video-page-iframe"></iframe>
              ))}
            <div className="examSolving">
              {examFlag && (
                <Exam exam={exam} id={exam._id} variant={handleClickVariant} />
              )}
            </div>
          </div>
          {vidFlag && (
            <>
              {" "}
              <div className="notesStyle">
                <TextField
                  id="outlined-multiline-static"
                  label="Write done something for later"
                  multiline
                  rows={8}
                  value={notes}
                  onChange={(e) => {
                    setNotes(e.target.value);
                  }}
                  sx={{ width: 865 }}
                />
              </div>
              <div className="downloadNotesButton">
                <Button
                  variant="contained"
                  color="error"
                  onClick={downloadPDFFile}
                  sx={({ height: 35 }, { width: 200 })}
                >
                  Download Notes
                </Button>
              </div>
            </>
          )}
        </div>
      </>
    );
};

export default VideoPage;
