import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import TestimonialCard31 from "../components/TestimonalCard31";
import axios from "axios";
import HeaderTest from "../components/Header/headertest";
import TurnedInIcon from "@mui/icons-material/TurnedIn";

import { useSnackbar } from "notistack";

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
import "../index.scss";
import Loading from "../components/ui/Loading";
import OutlineSubtitle from "../components/OutlineSubtitle";
import OutlineSubtitleContent from "../components/OutlineSubtitleContent";
import RequestAccessModal from "../components/RequestAccessModal";
import NavBar from "../components/NavBar/navBar";

const Outline = (props) => {
  const [course, setCourse] = useState([0]);
  const [subtitles, setSubtitles] = useState([0]);
  const [instructor, setInstructor] = useState([0]);
  const [ratings, setRatings] = useState([0]);
  const [trainee, setTrainee] = useState([0]);
  const [creditCardFlag, setCreditCardFlag] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showVideos, setShowVideos] = useState(false);
  const [traineeType, setTraineeType] = useState("");
  const [requestAccessFlag, setRequestAccessFlag] = useState(false);
  const [currencyCode, setCurrencyCode] = useState("");
  const [notLoggedIn, setNotLoggedIn] = useState(false);
  const [conversion, setConversion] = useState(0);

  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (message, variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };

  let disc;
  let newPrice;
  const params = new URLSearchParams(window.location.search);
  const courseId = params.get("courseId");
  useEffect(() => {
    axios
      .get(`http://localhost:8000/course?courseId=${courseId}`)
      .then((res) => {
        setCourse(res.data.courses);
        setSubtitles(res.data.courses.subtitles);
        setInstructor(res.data.courses.instructorID);
        setRatings(res.data.ratings);
        axios.get("/getToken", { withCredentials: true }).then((res) => {
          if (res.data.message === "You are not logged in.") {
            setNotLoggedIn(true);
          }
          if (res.data.type === "I") {
            setTraineeType("I");
          } else if (res.data.type === "C") {
            setTraineeType("C");
          } else {
            setTraineeType("T");
          }
          setLoading(false);
        });
      });

    axios.get("/getCurrency", { withCredentials: true }).then((res) => {
      setConversion(res.data.conversion);
      setCurrencyCode(res.data.code);
      console.log(res.data.conversion);
    });
  }, []);

  const buyNowHandle = (childData) => {
    setCreditCardFlag(childData);
  };

  const requestAccesHandle = (childData) => {
    setRequestAccessFlag(childData);
  };
  const showVideosHandle = () => {
    setShowVideos(!showVideos);
  };
  if (!loading) {
    return (
      <>
        {notLoggedIn && <NavBar />}
        {!notLoggedIn && <HeaderTest />}
        <div className="outline-outline-container">
          <div className="outline-outline-container1">
            {requestAccessFlag && (
              <RequestAccessModal
                onClick={requestAccesHandle}
                variant={handleClickVariant}
              />
            )}
            {creditCardFlag && (
              <CC
                course={course}
                onClick={buyNowHandle}
                variant={handleClickVariant}
                conversion={conversion}
                currencyCode={currencyCode}
              />
            )}
            <div className="outline-container01">
              <div className="outline-frame1">
                <div className="outline-container02"></div>
                <div className="outline-container03">
                  <iframe
                    width="928"
                    height="360"
                    src={course.previewVideo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    className="prevVid"
                  ></iframe>
                </div>
                <span className="outline-text">
                  <span>{course.courseName}.</span>
                </span>
                <span className="outline-text02">
                  <span>
                    <span>{course.summary}</span>
                  </span>
                </span>
                {traineeType != "T" &&
                  !notLoggedIn &&
                  (traineeType === "C" ? (
                    <div className="signUpButton1">
                      <Button
                        variant="contained"
                        color="error"
                        onClick={requestAccesHandle}
                        sx={({ height: 35 }, { width: 400 })}
                      >
                        Get Access
                      </Button>
                    </div>
                  ) : (
                    <div className="signUpButton1">
                      <Button
                        variant="contained"
                        color="error"
                        onClick={buyNowHandle}
                        sx={({ height: 35 }, { width: 400 })}
                      >
                        Buy Now for&nbsp;{" "}
                        {course.discount === 1 ? (
                          ""
                        ) : (
                          <s> {parseInt(course.price * conversion)}&nbsp;</s>
                        )}
                        {parseInt(course.price * course.discount * conversion)}
                        &nbsp;
                        {currencyCode}
                      </Button>
                    </div>
                  ))}
                <div className="outline-container05">
                  <img
                    className="traineeProfilePicture101"
                    src="https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU="
                  ></img>
                </div>
                <div className="outline-container06">
                  <img
                    className="traineeProfilePicture102"
                    src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg"
                  ></img>
                </div>
                <div className="outline-container07">
                  <img
                    className="traineeProfilePicture103"
                    src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                  ></img>
                </div>
                <span className="outline-text09">
                  <span className="outline-text10">
                    Join over
                    <span
                      dangerouslySetInnerHTML={{
                        __html: " ",
                      }}
                    />
                  </span>
                  <span className="outline-text11">
                    {course.subscribers.length}+
                  </span>
                  <span> students</span>
                </span>
              </div>
            </div>
          </div>
          <div className="outline-outline-container2">
            <div className="outline-outline-container3">
              <div className="outline-outline-container4">
                <span className="outline-text25">
                  <span>What you’ll learn in {course.totalHours} minutes.</span>
                </span>
              </div>
              <div className="outline-outline-container5">
                <span className="outline-text27">
                  <span>{course.summary}</span>
                </span>
              </div>
              <div className="outline-outline-container6">
                {subtitles.map((s) => {
                  return (
                    <div>
                      <OutlineSubtitle s={s} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="outline-outline-container7">
            <div className="outline-container32">
              <div className="outline-frame3">
                <span className="outline-text64">
                  <span>
                    Hi, I am {course.instructorID.firstName}, your course
                    instructor.
                  </span>
                </span>
                <span className="outline-text66">
                  <span>
                    <span>{course.summary}</span>
                  </span>
                </span>
                <div className="outline-instructor">
                  <img src={course.instructorID.photo} />
                </div>
              </div>
            </div>
          </div>
          <div className="outline-outline-container8">
            {" "}
            <Footer />
          </div>
        </div>
      </>
    );
  } else {
    return <Loading />;
  }
};

export default Outline;
