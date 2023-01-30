import React from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import axios from "axios";
import Loading from "../components/ui/Loading";

import "./EditProfile.css";
import { useState } from "react";

const EditProfile = (props) => {
  const [trainee, setTrainee] = useState({});
  const [loading, setLoading] = useState(true);

  const params = new URLSearchParams(window.location.search);

  const traineeId = params.get("id");
  useEffect(() => {
    axios
      .get(`http://localhost:8000/getTraineeDetails?id=${traineeId}`)
      .then((res) => {
        setTrainee(res.data);
        setLoading(false);
      });
  }, []);

  if (!loading) {
    return (
      <div className="edit-profile-profile1">
        <div className="edit-profile-bigoutline-default">
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            disabled
            defaultValue={trainee.firstName}
            InputProps={{ sx: { width: 300 } }}
          />
        </div>
        <div className="edit-profile-container2">
          <div className="edit-profile-bigoutline-default1"></div>
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            disabled
            defaultValue={trainee.lastName}
            InputProps={{ sx: { width: 300 } }}
          />
        </div>
        <div className="edit-profile-bigoutline-default2">
          <TextField
            id="outlined-basic"
            label="Email"
            disabled
            variant="outlined"
            defaultValue={trainee.email}
            InputProps={{ sx: { width: 300 } }}
          />
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default EditProfile;
