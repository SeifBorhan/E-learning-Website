import React from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";

import "./EditProfile.css";
import axios from "axios";
import { useState } from "react";
const EditPrivacyTrainee = (props) => {
  const [pass, setPass] = useState("");
  const [oldPass, setOldPass] = useState("");

  const postData = async (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:8000/viewTraineePassword?id=${props.id}`, {
        pass,
        oldPass,
      })
      .then((res) => {
        console.log(res.data);
        props.variant("Password changed successfuly", "success");

      });
  };
  return (
    <div className="edit-profile-profile1">
      <div className="edit-profile-bigoutline-default">
        <TextField
          id="outlined-basic"
          label="Old Password"
          onChange={(e) => setOldPass(e.target.value)}
          variant="outlined"
          InputProps={{ sx: { width: 300 } }}
          required
        />
      </div>
      <div className="edit-profile-container2">
        <div className="edit-profile-bigoutline-default1"></div>
        <TextField
          id="outlined-basic"
          label="New password"
          variant="outlined"
          onChange={(e) => setPass(e.target.value)}
          InputProps={{ sx: { width: 300 } }}
          required
        />
      </div>
      <div className="edit-profile-bigoutline-default2">
        <TextField
          id="outlined-basic"
          label="Confrim new password"
          variant="outlined"
          onChange={(e) => setPass(e.target.value)}
          InputProps={{ sx: { width: 300 } }}
          required
        />
      </div>
      <div className="submitProfile1">
        <Button
          variant="contained"
          color="error"
          onClick={postData}
          sx={({ height: 35 }, { width: 150 })}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default EditPrivacyTrainee;
