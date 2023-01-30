import React from "react";
import { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useRadioGroup } from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";

import { red } from "@mui/material/colors";

import PropTypes from "prop-types";

import "./AddUser.css";

const AddUser = (props) => {
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const postData = async (e) => {
    e.preventDefault();
    console.log(value);

    if (value === "Admin") {
      axios
        .post(`http://localhost:8000/adminstrator/admin`, {
          email,
          password,
        })
        .then((res) => {
          console.log(res.data);
          props.variant("Admin Created", "success");
        });
    }
    if (value === "Instructor") {
      axios
        .post(`http://localhost:8000/adminstrator/instructor`, {
          userName: email,
          password,
        })
        .then((res) => {
          console.log(res.data);
          props.variant("Instructor Created", "success");
        });
    }
    if (value === "Corporate Trainee") {
      axios
        .post(`http://localhost:8000/adminstrator/trainee`, {
          userName: email,
          password,
        })
        .then((res) => {
          console.log(res.data);
          props.variant("Corporate Trainee Created", "success");
        });
    }
  };
  return (
    <div className="adminProfile-profile1">
      <div className="adminProfile-bigoutline-default">
        <TextField
          id="outlined-basic"
          label="Email"
          required
          variant="outlined"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          InputProps={{ sx: { width: 300 } }}
        />
      </div>
      <div className="adminProfile-container2">
        <div className="adminProfile-bigoutline-default1"></div>
        <TextField
          id="outlined-basic"
          label="Password"
          required
          variant="outlined"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          InputProps={{ sx: { width: 300 } }}
        />
      </div>

      <div className="userRadio">
        <form onSubmit={postData}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue=""
              name="radio-buttons-group"
              value={value}
              onChange={handleChange}
              row
            >
              <FormControlLabel
                value="Admin"
                control={
                  <Radio
                    sx={{
                      color: red[800],
                      "&.Mui-checked": {
                        color: red[600],
                      },
                    }}
                  />
                }
                label="Admin"
              />
              <FormControlLabel
                value="Corporate Trainee"
                control={
                  <Radio
                    sx={{
                      color: red[800],
                      "&.Mui-checked": {
                        color: red[600],
                      },
                    }}
                  />
                }
                label="Corporate Trainee"
              />
              <FormControlLabel
                value="Instructor"
                control={
                  <Radio
                    sx={{
                      color: red[800],
                      "&.Mui-checked": {
                        color: red[600],
                      },
                    }}
                  />
                }
                label="Instructor"
              />
            </RadioGroup>
            <div className="adminProfile-button">
              <Button variant="outlined" color="error" type="submit">
                Create User
              </Button>
            </div>
          </FormControl>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
