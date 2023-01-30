import { useState, useEffect, useRef } from "react";
import axios from "axios";
import SideBar from "../components/layout/SideBar";
import Card from "../components/ui/Card";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Rating,
} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Course() {
  const [course, setCourse] = useState([]);
  const [subtitles, setSubtitles] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [videos, setVideos] = useState([]);
  const [exam, setExam] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [vid, setVid] = useState([]);
  const [b, setB] = useState(false);
  const [eid, setEid] = useState([]);
  const [submited, setSubmited] = useState(false);
  const [value, setValue] = useState(0);

  const review = useRef();

  let answers = [];
  let g = 0;

  const rateVal = async (event) => {
    event.preventDefault();
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get("courseId");
    var container = courseId;
    const enteredReview = review.current.value;
    const id = "638519fe55611a69746ab409";

    await axios.patch("http://localhost:8000/trainee-view", {
      value,
      container,
      enteredReview,
      id,
    });
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get("courseId");

    axios
      .get(`http://localhost:8000/course?courseId=${courseId}`)
      .then((res) => {
        setCourse(res.data);
        setSubtitles(res.data.subtitles);
      });
  }, []);

  const onClick = async (id) => {
    if (clicked) {
      setClicked(false);
    } else {
      await axios
        .get(`http://localhost:8000/subtitles?id=${id}`)
        .then((res) => {
          setClicked(true);
          setVideos(res.data.vids);
          setExam(res.data.exs);
        });
    }
  };
  const onClick2 = async (id) => {
    await axios.get(`http://localhost:8000/video?id=${id}`).then((res) => {
      setVid(res.data);
      setQuestions([]);
      setB(false);
    });
  };
  const onClick3 = async (id) => {
    await axios.get(`http://localhost:8000/exam?id=${id}`).then((res) => {
      setQuestions(res.data);
      setB(true);
      setVid([]);
    });
  };

  const handleRadioChange = async (e) => {
    answers[parseInt(e.target.name)] = e.target.value;
  };

  const handleSubmit = async (e) => {
    let i = 0;
    questions.map((q) => {
      if (q.correctanswer === answers[(i += 1)]) {
        g += 1;
      }
    });
    //User id should be passed from the cookie ---> to be added
    await axios
      .post("http://localhost:8000/grade", {
        grade: `${g}`,
        eid: eid,
      })
      .then((res) => {
        setSubmited(true);
      });
  };

  let x = 0;
  const v = (
    <>
      <iframe
        width="928"
        height="522"
        src={vid.link}
        title=""
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div>{vid.description}</div>
    </>
  );

  const qu = questions.map((q) => (
    <>
      <br />
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">
          ({(x = x + 1)}) {q.question}
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name={x}
          onChange={handleRadioChange}
        >
          <FormControlLabel
            value={q.choice1}
            name={x}
            control={<Radio />}
            label={q.choice1}
          />
          <FormControlLabel
            value={q.choice2}
            name={x}
            control={<Radio />}
            label={q.choice2}
          />
          <FormControlLabel
            value={q.choice3}
            name={x}
            control={<Radio />}
            label={q.choice3}
          />
          <FormControlLabel
            value={q.choice4}
            name={x}
            control={<Radio />}
            label={q.choice4}
          />
        </RadioGroup>
        <br />
      </FormControl>
      <br />
      {submited && <p>Correct Answer:</p>} {submited && q.correctanswer}
    </>
  ));

  const but = (
    <Box sx={{ marginBottom: 2 }} alignitems="left" justifyContent="center">
      <Button
        variant="contained"
        onClick={handleSubmit}
        margin="normal"
        padding="normal"
      >
        Submit
      </Button>
    </Box>
  );

  return (
    <>
      <section>
        <h6>Rate This Course</h6>
        <Card>
          <Card>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <div>
                {" "}
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </div>

              <form onSubmit={rateVal}>
                {value === 0 ? (
                  <div />
                ) : (
                  <div>
                    <input
                      type="text"
                      id="review"
                      placeholder="please enter a review"
                      ref={review}
                    />

                    <div type="submit">
                      <button type="submit"> add </button>
                    </div>
                  </div>
                )}
              </form>
            </Box>
          </Card>
        </Card>
      </section>
      CourseName: {course.courseName} <br />
      Price: {course.price} <br />
      Subject: {course.subject} <br />
      Year of Upload: {course.yearOfUpload} <br />
      {/* Rating: {course.rating} <br /> */}
      Total Hours: {course.totalHours} <br />
      Summary: {course.summary}
      <br />
      <div>
        {questions && qu}
        {b && but}
        {vid && v}
      </div>
      <SideBar>
        <Card>Subtitles</Card>
        <br />
        <Card>
          {subtitles.map((subtitle) => (
            <p
              onClick={() => {
                onClick(subtitle._id);
              }}
            >
              {subtitle.name}
              {subtitle.duration}
            </p>
          ))}
        </Card>
        {clicked &&
          videos &&
          videos.map((video) => (
            <>
              <Card
                onClick={() => {
                  onClick2(video._id);
                }}
              >
                <div>
                  <p>{video._id}</p>
                </div>
              </Card>
            </>
          ))}
        <Card
          onClick={() => {
            onClick3(exam._id);
            setEid(exam._id);
          }}
        >
          <div>
            <p>{clicked && exam && exam._id}</p>
          </div>
        </Card>{" "}
      </SideBar>
    </>
  );
}
export default Course;
