import React, { useState } from "react";
import axios from "axios";
import "./CreateCourseModal.css";
import { TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";
import { Button } from "@mui/material";
import { useSnackbar } from "notistack";

const PromotionModal = (props) => {
  const [Close, setClose] = useState(false);
  const [months, setMonths] = useState("");
  const [weeks, setWeeks] = useState("");
  const [days, setDays] = useState("");
  const [discount, setDiscount] = useState("");
  const params = new URLSearchParams(window.location.search);
  const courseID = params.get("courseId");
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (message, variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };

  useEffect(() => {}, []);

  const close = () => {
    props.onClick(false);
  };
  const setPromotionModal = () => {
    setClose(false);
  };

  const postData = async () => {
    await axios
      .post(`http://localhost:8000/adminstrator/setDiscount`, {
        courseID,
        months,
        weeks,
        days,
        discount,
      })
      .then((res) => {
        console.log(res.data);
        props.onClick(false);
        props.variant("Promotion Created Successfully", "success");
        // window.location.href = `/instructorcourseoutline?courseId=${courseId}`;
      });
  };

  return (
    <div className="cont">
      <div className="create-course-container">
        <div className="create-course-profile222">
          <div className="create-course-group23">
            <div className="closeIcon" onClick={close}>
              <CloseIcon />
            </div>
            <span className="create-course-text Title_PoppinsLarge">
              <span>Add a Promotion</span>
            </span>
          </div>
          <div className="create-course-bigoutline-default">
            {" "}
            <TextField
              required
              id="outlined-required"
              label="Promotion Value"
              value={discount}
              onChange={(e) => {
                setDiscount(e.target.value);
              }}
              InputProps={{ sx: { width: 342 } }}
            />
          </div>
          <div className="moveDate">
            <TextField
              className="disc2"
              id="outlined-number"
              label="Days"
              type="number"
              value={days}
              onChange={(e) => {
                setDays(e.target.value);
              }}
              defaultValue={"0"}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className="moveDate">
            <TextField
              className="disc2"
              id="outlined-number"
              label="Weeks"
              type="number"
              value={weeks}
              onChange={(e) => {
                setWeeks(e.target.value);
              }}
              defaultValue={"0"}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className="moveDate">
            <TextField
              className="disc2"
              id="outlined-number"
              label="Months"
              value={months}
              onChange={(e) => {
                setMonths(e.target.value);
              }}
              type="number"
              defaultValue={"0"}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>

          <div className="definePromotionBTN1">
            <Button
              variant="contained"
              color="error"
              onClick={postData}
              sx={({ height: 35 }, { width: 200 })}
            >
              Define Promotion
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionModal;
