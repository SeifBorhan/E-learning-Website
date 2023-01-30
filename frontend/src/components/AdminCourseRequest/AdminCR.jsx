import classes from "./AdminCR.css";
import axios from "axios";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useSnackbar } from "notistack";
import Loading from "../ui/Loading";
function AdminCR(props) {
  const [loading, setLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (message, variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };
  console.log(props.cr);
  const acceptRequest = async () => {
    await axios
      .post(`http://localhost:8000/adminstrator/handleReq`, {
        handle: "accept",
        reqID: props.id,
      })
      .then((res) => {
        window.location.reload();
        handleClickVariant("Course request accepted", "success");
      });
  };
  const rejectRequest = async () => {
    await axios
      .post(`http://localhost:8000/adminstrator/handleReq`, {
        handle: "reject",
        reqID: props.id,
      })
      .then((res) => {
        window.location.reload();
        handleClickVariant("Course request rejected", "error");
      });
  };

  if (props.cr.course.courseName != null) {
    return (
      <div className="body">
        <div className="coursesR-container">
          <div className="courseR">
            <div className="courseR-preview"></div>
            <div className="courseR-info">
              <div className="pushText2R">
                <h2>{props.cr.course.courseName}</h2>
              </div>
              <div className="pushTextR3">
                <h6>
                  {props.cr.user.firstName} {props.cr.user.lastName}{" "}
                  {props.cr.user.userName}
                </h6>
                <h2>{props.cr.user.company}</h2>
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
  } else {
    return null;
  }
}
export default AdminCR;
