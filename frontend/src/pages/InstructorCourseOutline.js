import React, { useEffect, useState } from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import TestimonialCard31 from "../components/TestimonalCard31";
import axios from "axios";
import Accordion from "../components/Subtitle";
import "../index.scss";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useSnackbar } from "notistack";
import ReportProblem from "../components/ReportProblem";
import ErrorIcon from "@mui/icons-material/Error";

import Stack from "@mui/material/Stack";

import {
  amber,
  blue,
  deepOrange,
  green,
  red,
  yellow,
} from "@mui/material/colors";
import Footer from "../components/ui/Footer";
import CC from "../components/CC";
import CreateSubtitleModal from "../components/CreateSubtitleModal";
import PromotionModal from "../components/PromotionModal";
import HeaderTest from "../components/Header/headertest";

const InstructorCourseOutline = (props) => {
  const [course, setCourse] = useState([]);
  const [subtitles, setSubtitles] = useState([]);
  const [instructor, setInstructor] = useState({});
  const [ratings, setRatings] = useState([]);
  const [creditCardFlag, setCreditCardFlag] = useState(false);
  const [videoModal, setVideoModal] = useState(false);
  const [pormflag, setPromFlag] = useState(false);
  const [loading, setLoading] = useState(true);
  const [createCourseFlag, setCreateCourseFlag] = useState(false);

  let disc;
  let newPrice;

  const { enqueueSnackbar } = useSnackbar();
  const onClickCreateCourse = () => {
    setCreateCourseFlag(true);
  };
  const handleClickVariant = (message, variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };

  useEffect(async () => {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get("courseId");

    await axios
      .get(`http://localhost:8000/course?courseId=${courseId}`)
      .then((res) => {
        setCourse(res.data.courses);
        setSubtitles(res.data.subtitles);
        setInstructor(res.data.courses.instructorID);
        console.log(res.data.courses);
        setRatings(res.data.courses.rating);
        setLoading(false);
      });
  }, []);

  const handleCallback3 = (childData) => {
    setCreateCourseFlag(childData);
  };

  const onClickCreateSubtitle = () => {
    setCreditCardFlag(true);
  };

  const setSubt = (childData) => {
    setCreditCardFlag(childData);
  };

  const setPromotionModal = (childData) => {
    setPromFlag(childData);
  };

  return (
    <>
      <HeaderTest />
      <div className="course-outline-container">
        {createCourseFlag && (
          <ReportProblem
            onClick={handleCallback3}
            variant={handleClickVariant}
          />
        )}
        {creditCardFlag && (
          <CreateSubtitleModal onClick={setSubt} variant={handleClickVariant} />
        )}
        {pormflag && (
          <PromotionModal
            onClick={setPromotionModal}
            variant={handleClickVariant}
          />
        )}

        <div className="course-outline-container11">
          <div className="course-outline-group14">
            <div className="createCourseBTN2020">
              <Button
                startIcon={<ErrorIcon sx={{ color: "black" }} />}
                onClick={onClickCreateCourse}
              >
                <span className="colorText">Report a problem</span>
              </Button>
            </div>
            <div className="course-outline-group7">
              <Accordion subtitles={subtitles} />
            </div>
          </div>
          <h1 className="course-outline-text093">COURSE OUTLINE</h1>
          <div className="createSubtitleBTN">
            <Stack direction="row" spacing={2}>
              <Button
                startIcon={<AddIcon sx={{ color: "black" }} />}
                onClick={onClickCreateSubtitle}
              >
                <span className="colorText">Subtitle</span>
              </Button>
            </Stack>
          </div>
          <div className="definePromotionBTN">
            <Button
              variant="contained"
              color="error"
              onClick={setPromotionModal}
              sx={({ height: 35 }, { width: 200 })}
            >
              Define Promotion
            </Button>
          </div>
        </div>

        <div className="course-outline-container14">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default InstructorCourseOutline;
