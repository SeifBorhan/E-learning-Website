import React from "react";
import { TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import axios from "axios";
import "./CC.css";
import { useState, useEffect } from "react";
import { useSnackbar } from "notistack";

const CC = (props) => {
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [CVV, setCVV] = useState("");
  const [PAN, setPAN] = useState("");
  const [traineeId, setTraineeId] = useState("");
  const [traineeType, setTraineeType] = useState("");
  const [currencyCode, setCurrencyCode] = useState("");

  let dig4 = "";
  const params = new URLSearchParams(window.location.search);
  const courseID = params.get("courseId");

  useEffect(() => {
    axios.get("/getToken").then((res) => {
      setTraineeId(res.data._id);
      setTraineeType(res.data.type);
      setCurrencyCode(document.cookie.substring(5, 8));
    });
  }, []);

  if (PAN.length === 16) {
    dig4 =
      PAN.charAt(12) +
      "" +
      PAN.charAt(13) +
      "" +
      PAN.charAt(14) +
      "" +
      PAN.charAt(15);
  }

  const handleCLoseCC = () => {
    props.onClick(false);
  };

  const handleChangeCVV = (event) => {
    setCVV(event.target.value);
  };
  const handleChangeName = (event) => {
    setCardName(event.target.value);
  };

  const handleChangePAN = (event) => {
    setPAN(event.target.value);
  };
  const handleChangeED = (event) => {
    setExpiryDate(event.target.value);
  };

  const postData = async (e) => {
    e.preventDefault();

    await axios
      .post(`http://localhost:8000/payForACourse?id=${traineeId}`, {
        courseID,
        price: props.course.price * props.course.discount,
      })
      .then((res) => {
        props.variant("Course Bought Successfully", "success");
        props.onClick(false);
      });
  };
  return (
    <div className="cont">
      <div className="c-c-container">
        <div className="c-c-container1">
          <div className="closeIconCC" onClick={handleCLoseCC}>
            <CloseIcon />
          </div>
          <div className="c-c-group5">
            <div className="c-c-group1">
              <span className="c-c-text">
                <span>{PAN.substring(13, 18)}</span>
              </span>
              <span className="c-c-text02">
                <span>Card holder</span>
              </span>
              <span className="c-c-text04">
                <span>Expires</span>
              </span>
              <span className="c-c-text06">
                <span>{expiryDate}</span>
              </span>
              <span className="c-c-text08">
                <span>{cardName}</span>
              </span>
              <span className="c-c-text10">{PAN.substring(0, 4)} </span>
              <span className="c-c-text11">{props.text1}</span>
              <span className="c-c-text12">{PAN.substring(4, 8)}</span>
              <span className="c-c-text13">{PAN.substring(9, 13)}</span>
            </div>
          </div>
        </div>

        <div className="c-c-container2">
          <span className="c-c-text14">
            <span>CREDIT CARD NUMBER</span> <br />
            <span
              onChange={(e) => {
                setPAN(e.target.value);
              }}
            />
          </span>
          <span className="c-c-text16">
            <span>
              Total:{" "}
              {parseInt(
                props.course.price * props.course.discount * props.conversion
              )}{" "}
              {props.currencyCode}
            </span>
          </span>

          <span className="c-c-text20">
            <span>CARD HOLDER NAME</span> <br />
            <span
              onChange={(e) => {
                setCardName(e.target.value);
              }}
            />
          </span>
          <span className="c-c-text22">
            <span>CVV</span>
          </span>
          <div className="c-c-container3" onClick={postData}>
            <span className="c-c-text24">
              <span>Proceed to pay</span>
            </span>
          </div>
          <span className="c-c-text26">
            <TextField
              required
              id="standard-required"
              value={CVV}
              onChange={handleChangeCVV}
              variant="standard"
              size="small"
              inputProps={{ maxLength: 3 }}
            />
          </span>
          <span>
            {" "}
            <span className="expiryDate">EXPIRY DATE</span>
          </span>
          <span className="c-c-text28">
            <TextField
              required
              id="standard-required"
              value={expiryDate}
              onChange={handleChangeED}
              variant="standard"
              size="small"
              inputProps={{ maxLength: 5 }}
            />
          </span>
          <span className="c-c-text30">
            <TextField
              required
              id="standard-required"
              value={cardName}
              onChange={handleChangeName}
              variant="standard"
              size="small"
            />
          </span>
          <span className="c-c-text32">
            <TextField
              required
              id="standard-required"
              value={PAN}
              onChange={handleChangePAN}
              variant="standard"
              size="small"
              inputProps={{ maxLength: 17 }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

CC.defaultProps = {
  text: "xxxx",
  text1: "VISA",
  text2: "xxxx",
  text21: "xxxx",
};

CC.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text21: PropTypes.string,
};

export default CC;
