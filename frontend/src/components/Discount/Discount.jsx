import React, { Component } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import TextField from "@mui/material/TextField";
import SellIcon from "@mui/icons-material/Sell";
import { useState, useEffect } from "react";
import Multiselect from "multiselect-react-dropdown";
import axios from "axios";
import "./Discount.css";
import { useSnackbar } from "notistack";

function Discount(props) {
  const [courses, setCourses] = useState([]);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);
  const [weeks, setWeeks] = useState(0);
  const [courseNames, setCourseNames] = useState([]);
  const [discount, setDiscount] = useState(0);
  const { enqueueSnackbar } = useSnackbar();

  var subs = [];
  const handleClickVariant = (message, variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };
  useEffect(() => {
    axios.get("http://localhost:8000/adminstrator/getCourses").then((res) => {
      setCourses(res.data);
      // for (let course of res.data) {
      //   console.log(course.courseName)
      //   subs.push(course.courseName)
      // }
      // setCourses(subs);
    });
  }, []);
  const postDiscount = () => {
    var arr = [];
    for (let c of courseNames) {
      arr.push(c.courseName);
    }
    setCourseNames(arr);
    console.log(weeks, days, months, courseNames, discount, dis);
    axios
      .post("http://localhost:8000/adminstrator/setDiscounts", {
        months,
        weeks,
        days,
        courseNames,
        discount,
      })
      .then((res) => {
        console.log(res.data);
        handleClickVariant("Promotion added successfully", "success");
      });
  };
  const handleRemove = (event, newValue) => {
    console.log(courseNames, event, newValue);

    courseNames.splice(newValue, 1);

    console.log(courseNames);
  };
  const handleSelect = (event, newValue) => {
    courseNames.push(newValue);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 350,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const [dis, setDis] = React.useState(false);
  const [value, setValue] = React.useState("female");
  const handleChange = (event) => {
    setValue(event.target.value);
    if (value === "All Courses") setDis(false);

    if (value === "Specific Courses") setDis(true);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="error">
        Set Promotion
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="kimo">Set Promotion</div>
          <div>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
                row
              >
                <FormControlLabel
                  value="All Courses"
                  control={<Radio color="error" />}
                  label="All Courses"
                />
                <FormControlLabel
                  value="Specific Courses"
                  control={<Radio color="error" />}
                  label="Specific Courses"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div>
            <Multiselect
              // onKeyPressFn={function noRefCheck() { }}
              onRemove={handleRemove}
              onSearch={function noRefCheck() {}}
              onSelect={handleSelect}
              disable={dis}
              displayValue="courseName"
              options={courses}
            />
          </div>
          <div>
            <TextField
              className="disc2"
              id="outlined-number"
              label="Months"
              type="number"
              value={months}
              onChange={(e) => setMonths(e.target.value)}
              defaultValue={"0"}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              className="disc2"
              id="outlined-number"
              label="Weeks"
              type="number"
              value={weeks}
              onChange={(e) => setWeeks(e.target.value)}
              defaultValue={"0"}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              className="disc2"
              id="outlined-number"
              label="Days"
              type="number"
              value={days}
              onChange={(e) => setDays(e.target.value)}
              defaultValue={"0"}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              className="disc2"
              id="outlined-number"
              label="Discount"
              type="number"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              defaultValue={"0"}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className="disc">
            <Button
              variant="contained"
              color="error"
              fullWidth
              onClick={postDiscount}
            >
              Set Promotion <SellIcon />{" "}
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Discount;
