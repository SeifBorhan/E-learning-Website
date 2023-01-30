import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import { WavingText } from "../components/ui/WavingText";
import { useEffect } from "react";
import "../index.scss";
import axios from "axios";
import SRCourse from "../components/SRCourse";
import HorizontalCourseList from "../components/courses/HorizontalCourseList";
import Slider from "@mui/material/Slider";
import RangeSlider from "react-bootstrap-range-slider";
import { red } from "@mui/material/colors";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button, Rating, Typography } from "@mui/material";
import HeaderTest from "../components/Header/headertest";
import NavBar from "../components/NavBar/navBar";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 3,
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});
function BpCheckbox(props) {
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" },
      }}
      disableRipple
      color="default"
      value={props.subject}
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
    />
  );
}
const SearchResults = (props) => {
  const [courses, setCourses] = useState([]);
  const [ratingg, setRating] = useState(-1);
  const [sub, setSubject] = useState([]);
  const [pricee, setPrice] = useState([0, 0]);
  const [coursesSubjects, setCoursesSubjects] = useState([]);
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState(false);
  var subs = [];

  useEffect(() => {
    setCourses(props.courses);
    setCoursesSubjects(props.courses);
  }, []);

  const postData = async (e) => {
    e.preventDefault();

    await axios
      .get(`http://localhost:8000/searchresults?search=${search}`)
      .then((res) => {
        setCourses(res.data);
        setCoursesSubjects(res.data);
        setSearched(true);
        console.log(res.data);
      });
  };
  const getFilters = async (e) => {
    e.preventDefault();
    setSubject(subs);
    await axios
      .post(`/filter`, {
        pricee: pricee,
        sub: sub,
        ratingg: ratingg,
        courses: coursesSubjects,
      })
      .then((res) => {
        setCourses(res.data);
        // setSearched(true);
        console.log(pricee, sub, ratingg, res.data);
      });
  };
  const handleChecked = (event, newValue) => {
    if (event.currentTarget.checked) {
      sub.push(event.currentTarget.value);
    } else {
      var index = sub.indexOf(event.target.value);
      if (index !== -1) {
        sub.splice(index, 1);
      }
    }
    console.log(sub);
  };
  var dups = [];

  for (let i = 0; i < coursesSubjects.length; i++) {
    dups[i] = coursesSubjects[i].subject;
  }
  var deduped = Array.from(new Set(dups));
  return (
    <>
      {props.notLoggedIn && <NavBar />}
      {!props.notLoggedIn && <HeaderTest />}{" "}
      <div className="search-results-container">
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
        <form onSubmit={getFilters}>
          <div className="search-results-container3">
            <div className="search-results-frame8">
              <span className={"search-results-text06"}>
                {deduped.map((subject) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        aria-label={subject}
                        value={subject}
                        onChange={handleChecked}
                        sx={{
                          color: red[700],
                          "&.Mui-checked": {
                            color: red[700],
                          },
                        }}
                      />
                    }
                    label={subject}
                  />
                ))}
              </span>

              <span className="search-results-text14">Filters</span>
              <div className="search-results-text15" style={{ width: "auto" }}>
                <Typography component="legend">Price Range</Typography>
                <Slider
                  track={false}
                  max="3000"
                  step="100"
                  size="small"
                  value={pricee}
                  onChange={(event, newValue) => {
                    setPrice(newValue);
                  }}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                  sx={{ color: red[700] }}
                />
              </div>
              <span className="search-results-text16">
                <Typography component="legend">Rating</Typography>
                <Rating
                  name="simple-controlled"
                  value={ratingg}
                  onChange={(event, newValue) => {
                    setRating(newValue);
                  }}
                  sx={{ color: red[700] }}
                />
              </span>
              <span className="search-results-text17">
                <Typography component="legend">Subjects</Typography>
              </span>
            </div>
            <div class="filButton">
              <Button variant="contained" color="error" type="submit">
                Submit
              </Button>
            </div>
          </div>
        </form>
        <div className="pushCourse">
          {/* <HorizontalCourseList /> */}
          {courses.map((course) => {
            return (
              <SRCourse
                course={course}
                id={course._id}
                code={props.code}
                conversion={props.conversion}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
