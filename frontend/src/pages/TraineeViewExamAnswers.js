import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";

//import grade from '../../../backend/models/grade';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const TraineeViewExamAnswers = () => {
  const [questions, setQuestions] = useState("");
  const params = new URLSearchParams(window.location.search);
  const CourseId = params.get("course");
  const exam = params.get("exam");
  const getExamAnswers = async () => {
    await axios
      .get(
        `http://localhost:8000/t/viewAnswerstrainee?exam=${exam}&course=${CourseId}`
      )
      .then((res) => {
        setQuestions(res.data);
        // setReview(review);
        // setRate(rate);
        console.log(res.data);
        // console.log(grade);
      });
  };
  return (
    <div className="TraineeViewExamAnswers">
      <Box sx={{ marginBottom: 2 }}>
        <Button
          variant="contained"
          onClick={getExamAnswers}
          margin="normal"
          padding="normal"
        >
          View Exam Solution
        </Button>
        {/* margin */}
      </Box>
      {questions &&
        questions.map((x) => (
          <div>
            <p>
              <br />
              Question: {x.question}
              <br />
              Choice 1: {x.choice1}
              <br />
              Choice 2: {x.choice2}
              <br />
              Choice 3: {x.choice3}
              <br />
              Choice 4: {x.choice4}
              <br />
              Correct Answer: {x.correctanswer}
              <br />
            </p>
          </div>
        ))}
    </div>
  );
};

export default TraineeViewExamAnswers;
