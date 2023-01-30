import classes from "./ReqRefund.css";
import axios from "axios";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useSnackbar } from "notistack";

function ReqRefund(props) {
  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (message, variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };
  const acceptRequest = async () => {
    await axios
      .post(`http://localhost:8000/adminstrator/handleRefundReq`, {
        handle: "accept",
        reqID: props.id,
      })
      .then((res) => {
        window.location.reload();
      });
  };
  const rejectRequest = async () => {
    await axios
      .post(`http://localhost:8000/adminstrator/handleRefundReq`, {
        handle: "reject",
        reqID: props.id,
      })
      .then((res) => {
        window.location.reload();
      });
  };

  return (
    <div className="body">
      <div className="coursesR-container">
        <div className="courseR">
          <div className="courseR-preview"></div>
          <div className="courseR-info">
            <div className="pushTextR2">
              <h6>{props.rr.course.subject}</h6>
              <h2>{props.rr.course.courseName}</h2>
            </div>
            <div className="pushTextR3">
              <h2>
                {props.rr.user.firstName} {props.rr.user.lastName}
              </h2>
            </div>
            <div className="ar">
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={acceptRequest}
                >
                  Accept
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={rejectRequest}
                >
                  Reject
                </Button>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ReqRefund;
