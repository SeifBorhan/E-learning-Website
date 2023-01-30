import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import "./CreateCourseModal.css";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";
import { useSnackbar } from "notistack";

const RefundCourse = (props) => {
  const params = new URLSearchParams(window.location.search);
  const courseId = params.get("courseId");
  const [traineeId, setTraineeId] = useState("");
  let tid;
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (message, variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };

  const close = () => {
    props.onClick(false);
  };
  useEffect(() => {
    axios.get("/getToken", { withCredentials: true }).then((res) => {
      setTraineeId(res.data._id);
      tid = res.data._id;
      console.log(traineeId);
    });
  }, []);

  const postData = async () => {
    handleClickVariant("Refund Requested", "success");
    props.onClick(false);

    await axios
      .get(
        `http://localhost:8000/refundReq?id=${traineeId}&courseID=${courseId}`,
        {
          withCredentials: true,
        }
      )
      .then(() => {});
  };

  return (
    <div className="cont">
      <div className="create-course-container">
        <div className="create-course-profileRequest">
          <div className="create-course-group23">
            <div className="closeIcon" onClick={close}>
              <CloseIcon />
            </div>
            <span className="create-course-textRequest Title_PoppinsLarge">
              <span>Do you want to request a refund?</span>
            </span>
          </div>
          <div className="submitCourseRequest">
            <Button
              variant="contained"
              color="error"
              onClick={postData}
              sx={({ height: 45 }, { width: 200 })}
            >
              Yes
            </Button>
          </div>
          <div className="submitCourseRequest1">
            <Button
              variant="outlined"
              color="error"
              onClick={close}
              sx={({ height: 45 }, { width: 200 })}
            >
              No
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundCourse;
