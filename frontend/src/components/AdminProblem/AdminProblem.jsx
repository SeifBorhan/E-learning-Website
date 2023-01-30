import React from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import TextField from "@mui/material/TextField";
import ButtonR from "@mui/material/Button";
import AlarmIcon from "@mui/icons-material/Alarm";
import Add from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import "./AdminProblem.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

function AdminProblem(props) {
  const [name, setName] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (message, variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };
  console.log(props);
  const navigate = useNavigate();

  const solveProblem = async () => {
    handleClickVariant("Problem marked as Solved", "success");

    await axios
      .post(`http://localhost:8000/adminstrator/markProblem`, {
        mark: "resolved",
        problemID: props.id,
      })
      .then((res) => {});
  };
  const pendProblem = async () => {
    await axios
      .post(`http://localhost:8000/adminstrator/markProblem`, {
        mark: "pending",
        problemID: props.id,
      })
      .then((res) => {
        handleClickVariant("Problem marked as Pending", "info");
      });
  };

  return (
    <div className="col6">
      <div class="d-flex justify-content-center row">
        <div className="col6">
          <div class="bg-white comment-section">
            <div class="d-flex flex-row user p-2">
              <div class="d-flex flex-column ml-2">
                <span class="name font-weight-bold">{name}</span>
                <span>{props.problem.type}</span>
              </div>
            </div>
            <div class="mt-2 p-2">
              <p class="comment-content">{props.problem.description}</p>
            </div>
            <div class="d-flex justify-content-between p-3 border-top">
              <div class="d-flex align-items-center border-left px-3 comments">
                <ButtonR
                  variant="contained"
                  color="success"
                  onClick={solveProblem}
                >
                  Mark As Solved
                </ButtonR>{" "}
                {props.problem.status != "pending" && (
                  <IconButton
                    color="error"
                    aria-label="add an alarm"
                    onClick={pendProblem}
                  >
                    <AlarmIcon />
                    Mark As Pending
                  </IconButton>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminProblem;
