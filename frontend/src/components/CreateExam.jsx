import React, { useState } from "react";
import axios from "axios";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

import "./CreateExam.css";
const CssTextField = styled(TextField)({});
let questionsArray = Array.from(Array(4), () => new Array(6));
const CreateExam = (props) => {
  const [question, setQuestion] = useState("");
  const [choice1, setChoice1] = useState("");
  const [choice2, setChoice2] = useState("");
  const [choice3, setChoice3] = useState("");
  const [choice4, setChoice4] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [i, setI] = useState(0);
  const params = new URLSearchParams(window.location.search);
  const courseId = params.get("courseId");
  const postData = async () => {
    if (i === 4) {
      props.onClickExam(`Exam Added Successfully`, "success");
      props.onClick(false);
      await axios
        .post(
          `http://localhost:8000/new-exam?subid=${props.subid}&courseid=${courseId}`,
          { questionsArray }
        )
        .then((res) => {});
    } else {
      props.onClickExam(
        `Please enter all 4 questions, ${4 - i} questions remaining`,
        "error"
      );
    }
  };

  const addNewQuestion = () => {
    if (i != 4) {
      questionsArray[i] = [
        question,
        choice1,
        choice2,
        choice3,
        choice4,
        correctAnswer,
      ];
      setI(i + 1);
      setQuestion("");
      setChoice1("");
      setChoice2("");
      setChoice3("");
      setChoice4("");
      setCorrectAnswer("");
      props.onClickExam("Question added successfully", "success");
      console.log(questionsArray);
    } else {
      props.onClickExam("Cannot enter more than 4 questions", "error");
    }
  };

  const close = () => {
    props.onClick(false);
  };

  return (
    <div className="cont">
      <div className="create-exam-container">
        <div className="create-exam-frame1">
          <div className="closeIconExamModal" onClick={close}>
            <CloseIcon />
          </div>
          <div className="create-exam-container01">
            <TextField
              required
              id="standard-required"
              label="Question"
              defaultValue=""
              value={question}
              onChange={(e) => {
                setQuestion(e.target.value);
              }}
              variant="standard"
              className="stretchInputField"
              InputProps={{ sx: { height: 40 } }}
            />
          </div>
          <div className="create-exam-container02">
            <TextField
              required
              id="standard-required"
              label="Required"
              defaultValue="Choice1"
              value={choice1}
              onChange={(e) => {
                setChoice1(e.target.value);
              }}
              variant="standard"
              className="stretchInputField"
              InputProps={{ sx: { height: 40 } }}
            />
          </div>
          <div className="create-exam-container03">
            <span className="create-exam-text">{props.text}</span>
          </div>
          <div className="create-exam-container04">
            <TextField
              required
              id="standard-required"
              label="Required"
              defaultValue="Choice2"
              value={choice2}
              onChange={(e) => {
                setChoice2(e.target.value);
              }}
              variant="standard"
              className="stretchInputField"
              InputProps={{ sx: { height: 40 } }}
            />
          </div>
          <div className="create-exam-container05">
            <span className="create-exam-text1">{props.text1}</span>
          </div>
          <div className="create-exam-container06">
            <TextField
              required
              id="standard-required"
              label="Required"
              defaultValue="Choice3"
              value={choice3}
              onChange={(e) => {
                setChoice3(e.target.value);
              }}
              variant="standard"
              className="stretchInputField"
              InputProps={{ sx: { height: 40 } }}
            />
          </div>
          <div className="create-exam-container07">
            <span className="create-exam-text2">{props.text2}</span>
          </div>
          <div className="create-exam-container08">
            <TextField
              required
              id="standard-required"
              label="Required"
              defaultValue="Choice4"
              value={choice4}
              onChange={(e) => {
                setChoice4(e.target.value);
              }}
              variant="standard"
              className="stretchInputField"
              InputProps={{ sx: { height: 40 } }}
            />
          </div>
          <div className="correctAnswer">
            <div className="create-exam-container07">
              <span className="create-exam-text41">{props.text4}</span>
            </div>
            <div className="shiftTextField">
              <div className="create-exam-container11">
                <TextField
                  required
                  id="standard-required"
                  label="Required"
                  defaultValue="Answer"
                  variant="standard"
                  value={correctAnswer}
                  onChange={(e) => {
                    setCorrectAnswer(e.target.value);
                  }}
                  className="stretchInputField"
                  InputProps={{ sx: { height: 40 } }}
                />
              </div>
            </div>
          </div>
          <div className="create-exam-container09">
            <span className="create-exam-text3">{props.text3}</span>
          </div>
          <span className="create-exam-text4">Question</span>
          <span className="create-exam-text5">(Max 4)</span>
          <span className="create-exam-text6">Choices</span>
          <div className="create-exam-container101">
            <Button
              variant="outlined"
              color="error"
              onClick={addNewQuestion}
              sx={({ height: 35 }, { width: 200 })}
            >
              Add New question
            </Button>
          </div>
          <div className="create-exam-container10">
            <Button
              variant="contained"
              color="error"
              onClick={postData}
              sx={({ height: 35 }, { width: 200 })}
            >
              Add Exam
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

CreateExam.defaultProps = {
  text3: "(d)",
  text2: "(c)",
  text1: "(b)",
  text: "(a)",
  text4: "Correct Answer",
};

CreateExam.propTypes = {
  text3: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
};

export default CreateExam;
