import React from "react";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import axios from "axios";
import AllCourses from "../components/courses/CourseList";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Offcanvas from "react-bootstrap/Offcanvas";
import RangeSlider from "react-bootstrap-range-slider";
import CourseCard from "../components/CourseCard/CourseCard";
import TestimonialCard1 from "../components/Header/testimonial-card1";
import "../index.scss";
import InstructorCourses from "../components/ui/InstructorCourses";
import { WavingText } from "../components/ui/WavingText";
import Footer from "../components/ui/Footer";
import CourseTest from "../components/CourseTest";
import Loading from "../components/ui/Loading";
import SearchResult from "./SearchResult";
import HeaderTest from "../components/Header/headertest";
import { useSnackbar } from "notistack";
import NavBar from "../components/NavBar/navBar";

const Welcome = (props) => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (message, variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };
  const [notLoggedIn, setNotLoggedIn] = useState(false);
  let j = -1;
  var i = 0;
  const [currencyCode, setCurrencyCode] = useState("");
  const [conversion, setConversion] = useState(0);
  useEffect(() => {
    axios.get("/Home").then((res) => {
      setCourses(
        res.data.sort((a, b) => {
          if (
            a.subscribers &&
            b.subscribers &&
            a.subscribers.length > b.subscribers.length
          )
            return a;
          else if (
            a.subscribers &&
            b.subscribers &&
            a.subscribers.length > b.subscribers.length
          )
            return b;
          else return a;
        })
      );
    });
    axios.get("/getToken", { withCredentials: true }).then((res) => {
      if (res.data.message === "You are not logged in.") {
        setNotLoggedIn(true);
        setCurrencyCode(document.cookie.substring(5, 8));
      }
      setLoading(false);
    });
    axios.get("/getToken", { withCredentials: true }).then((res) => {
      if (res.data.userName !== undefined) {
        handleClickVariant(`Welcome  ${res.data.userName} !`, "success");
      } else {
        handleClickVariant(`Welcome our beloved visitor !`, "success");
      }
    });
    axios.get("/getCurrency", { withCredentials: true }).then((res) => {
      setCurrencyCode(res.data.code);
      setConversion(res.data.conversion);
      console.log(res.data.code, res.data.conversion);
    });
  }, []);

  const postData = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios.get(`/searchresults?search=${search}`).then((res) => {
      setCourses(res.data);
      setSearched(true);
      setLoading(false);
    });
  };
  if (!loading) {
    if (!searched) {
      return (
        <>
          {notLoggedIn && <NavBar />}

          {!notLoggedIn && <HeaderTest />}

          <div className="welcome-outline-container">
            <Helmet>
              <title>ACLademy</title>
              <meta property="og:title" content="Bronze Scary Sardine" />
            </Helmet>
            <div className="welcome-outline-container1">
              <div className="home-banner">
                <h1 className="home-text">
                  <WavingText name="Canadian" />
                </h1>
                <h1 className="home-textt1">
                  <WavingText name="Chamber" />
                </h1>
                <h1 className="home-textt2">
                  <WavingText name="of" />
                </h1>
                <h1 className="home-textt3">
                  <WavingText name="Commerce" />
                </h1>
                <h1 className="home-text01">
                  <span className="home-text02">Build Your Successful</span>
                  <br className="home-text03"></br>
                  <span>      Future With Us</span>
                </h1>
                <span className="home-text05">
                  Find Your Preferred Courses &amp; Improve Your Skills
                </span>
                <form onSubmit={postData}>
                  <div class="scale">
                    <div class="container">
                      <input
                        class="input"
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => {
                          setSearch(e.target.value);
                        }}
                      />
                      <div class="search"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="welcome-outline-container2">
              <div className="home-stats">
                <div className="home-stat">
                  <h1 className="home-text06">
                    <span>50</span>
                    <span>+</span>
                  </h1>
                  <span className="home-text09">Courses</span>
                  <span className="home-text10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                </div>
                <div className="home-stat1">
                  <h1 className="home-text11">
                    <span>369</span>
                  </h1>
                  <span className="home-text13">Courses</span>
                  <span className="home-text14">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                </div>
                <div className="home-stat2">
                  <h1 className="home-text15">
                    <span>500</span>
                    <span>+</span>
                  </h1>
                  <span className="home-text18">Hours</span>
                  <span className="home-text19">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                </div>
                <div className="home-stat3">
                  <h1 className="home-text20">24/7</h1>
                  <span className="home-text21">Support</span>
                  <span className="home-text22">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                </div>
              </div>
            </div>
            <div className="welcome-outline-container3">
              <div className="welcome-outline-container4">
                {courses.map((course) => {
                  j++;
                  return (
                    <CourseTest
                      course={course}
                      i={j}
                      id={course._id}
                      code={currencyCode}
                      conversion={conversion}
                    />
                  );
                })}
              </div>
            </div>
            <div className="welcome-outline-container5">
              <div className="home-container2">
                <h1 className="home-text23">
                  <span>What they’re saying</span>
                  <br></br>
                </h1>
                <span className="home-text26">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.
                    Integer in dignissim tortor.
                  </span>
                </span>
                <div className="home-container3">
                  <TestimonialCard1
                    picture_src="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
                    rootClassName="rootClassName2"
                  ></TestimonialCard1>
                  <TestimonialCard1 rootClassName="rootClassName"></TestimonialCard1>
                  <TestimonialCard1
                    picture_src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
                    rootClassName="rootClassName1"
                  ></TestimonialCard1>
                </div>
              </div>
            </div>
            <div className="welcome-outline-container6">
              {" "}
              <Footer />
            </div>
          </div>
        </>
      );
    } else {
      return (
        <SearchResult
          courses={courses}
          code={currencyCode}
          conversion={conversion}
          notLoggedIn={notLoggedIn}
        />
      );
    }
  }
  if (loading) {
    return <Loading />;
  }
};

export default Welcome;
