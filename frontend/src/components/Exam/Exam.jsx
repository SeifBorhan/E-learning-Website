import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Loading from "../ui/Loading";

import "./Exam.css";

let grade = 0;

function Exam(props) {
  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [value3, setValue3] = React.useState("");
  const [value4, setValue4] = React.useState("");

  const [dis, setDis] = React.useState(false);
  const [questions, setQuestions] = useState([]);
  const [error1, setError1] = React.useState(false);
  const [error2, setError2] = React.useState(false);
  const [error3, setError3] = React.useState(false);
  const [error4, setError4] = React.useState(false);

  const [helperText1, setHelperText1] = React.useState("Choose wisely");
  const [helperText2, setHelperText2] = React.useState("Choose wisely");
  const [helperText3, setHelperText3] = React.useState("Choose wisely");
  const [helperText4, setHelperText4] = React.useState("Choose wisely");

  const [loading, setLoading] = useState(true);

  const [trainee, setTrainee] = useState([]);
  const [traineeId, setTraineeId] = useState([]);

  const [g, setGrade] = useState();

  useEffect(() => {
    axios.get(`http://localhost:8000/exam?id=${props.id}`).then((res) => {
      setQuestions(res.data);
      setLoading(false);
    });
    axios.get("http://localhost:8000/getToken").then((res) => {
      setTrainee(res.data);
      setTraineeId(res.data._id);
    });
  }, []);

  const handleRadioChange1 = (event) => {
    setValue1(event.target.value);

    setError1(false);
  };
  const handleRadioChange2 = (event) => {
    setValue2(event.target.value);

    setError2(false);
  };
  const handleRadioChange3 = (event) => {
    setValue3(event.target.value);

    setError3(false);
  };
  const handleRadioChange4 = (event) => {
    setValue4(event.target.value);
    setError4(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (value1 === questions[0].correctanswer) {
      console.log(questions[0].correctanswer);
      setHelperText1("You got it!");
      setError1(false);
      grade++;
    } else {
      console.log(questions[0].correctanswer);
      console.log(value1);
      setHelperText1(
        `Sorry, wrong answer! The correct answer is ${questions[0].correctanswer}`
      );
      setError1(true);
    }
    if (value2 === questions[1].correctanswer) {
      setHelperText2("You got it!");
      setError2(false);
      grade++;
    } else {
      setHelperText2(
        `Sorry, wrong answer! The correct answer is ${questions[1].correctanswer}`
      );
      setError2(true);
    }
    if (value3 === questions[2].correctanswer) {
      setHelperText3("You got it!");
      setError3(false);
      grade++;
    } else {
      setHelperText3(
        `Sorry, wrong answer! The correct answer is ${questions[2].correctanswer}`
      );
      setError3(true);
    }
    if (value4 === questions[3].correctanswer) {
      setHelperText4("You got it!");
      setError4(false);
      grade++;
    } else {
      setHelperText4(
        `Sorry, wrong answer! The correct answer is ${questions[3].correctanswer}`
      );
      setError4(true);
    }
    props.variant("Your Answers are submitted successfuly", "success");

    setGrade(grade);
    grade = 0;

    setDis(true);
  };

  if (!loading) {
    return (
      <div className="quizzzz">
        <form onSubmit={handleSubmit}>
          <FormControl
            sx={{ m: 3 }}
            error1={error1}
            variant="standard"
            disabled={dis}
          >
            <FormLabel id="demo-error-radios">
              1.{questions[0].question}
            </FormLabel>

            <RadioGroup
              aria-labelledby="demo-error-radios"
              name="quiz"
              value={value1}
              onChange={handleRadioChange1}
            >
              <FormControlLabel
                value={questions[0].choice1}
                control={<Radio color="error" />}
                label={questions[0].choice1}
              />
              <FormControlLabel
                value={questions[0].choice2}
                control={<Radio color="error" />}
                label={questions[0].choice2}
              />
              <FormControlLabel
                value={questions[0].choice3}
                control={<Radio color="error" />}
                label={questions[0].choice3}
              />
              <FormControlLabel
                value={questions[0].choice4}
                control={<Radio color="error" />}
                label={questions[0].choice4}
              />
            </RadioGroup>

            <FormHelperText>{helperText1}</FormHelperText>
          </FormControl>
          <br />

          <FormControl
            sx={{ m: 3 }}
            error2={error2}
            variant="standard"
            disabled={dis}
          >
            <FormLabel id="demo-error-radios">
              2.{questions[1].question}
            </FormLabel>

            <RadioGroup
              aria-labelledby="demo-error-radios"
              name="quiz"
              value={value2}
              onChange={handleRadioChange2}
            >
              <FormControlLabel
                value={questions[1].choice1}
                control={<Radio color="error" />}
                label={questions[1].choice1}
              />
              <FormControlLabel
                value={questions[1].choice2}
                control={<Radio color="error" />}
                label={questions[1].choice2}
              />
              <FormControlLabel
                value={questions[1].choice3}
                control={<Radio color="error" />}
                label={questions[1].choice3}
              />
              <FormControlLabel
                value={questions[1].choice4}
                control={<Radio color="error" />}
                label={questions[1].choice4}
              />
            </RadioGroup>

            <FormHelperText>{helperText2}</FormHelperText>
          </FormControl>
          <br />

          <FormControl
            sx={{ m: 3 }}
            error3={error3}
            variant="standard"
            disabled={dis}
          >
            <FormLabel id="demo-error-radios">
              3.{questions[2].question}
            </FormLabel>

            <RadioGroup
              aria-labelledby="demo-error-radios"
              name="quiz"
              value={value3}
              onChange={handleRadioChange3}
            >
              <FormControlLabel
                value={questions[2].choice1}
                control={<Radio color="error" />}
                label={questions[2].choice1}
              />
              <FormControlLabel
                value={questions[2].choice2}
                control={<Radio color="error" />}
                label={questions[2].choice2}
              />
              <FormControlLabel
                value={questions[2].choice3}
                control={<Radio color="error" />}
                label={questions[2].choice3}
              />
              <FormControlLabel
                value={questions[2].choice4}
                control={<Radio color="error" />}
                label={questions[2].choice4}
              />
            </RadioGroup>

            <FormHelperText>{helperText3}</FormHelperText>
          </FormControl>
          <br />

          <FormControl
            sx={{ m: 3 }}
            error4={error4}
            variant="standard"
            disabled={dis}
          >
            <FormLabel id="demo-error-radios">
              4.{questions[3].question}
            </FormLabel>

            <RadioGroup
              aria-labelledby="demo-error-radios"
              name="quiz"
              value={value4}
              onChange={handleRadioChange4}
            >
              <FormControlLabel
                value={questions[3].choice1}
                control={<Radio color="error" />}
                label={questions[3].choice1}
              />
              <FormControlLabel
                value={questions[3].choice2}
                control={<Radio color="error" />}
                label={questions[3].choice2}
              />
              <FormControlLabel
                value={questions[3].choice3}
                control={<Radio color="error" />}
                label={questions[3].choice3}
              />
              <FormControlLabel
                value={questions[3].choice4}
                control={<Radio color="error" />}
                label={questions[3].choice4}
              />
            </RadioGroup>

            <FormHelperText>{helperText4}</FormHelperText>
          </FormControl>
          <br />
          <div>Your grade for this exam is {g}/4</div>

          <Button
            sx={{ mt: 1, mr: 1 }}
            type="submit"
            variant="outlined"
            color="error"
          >
            Check Answer
          </Button>
        </form>
      </div>
    );
  } else {
    return <Loading />;
  }
}

export default Exam;
