import React from "react";
import { TextField } from "@mui/material";
import "./EditProfile.css";
import axios from "axios";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Loading from "./ui/Loading";
const EditProfile = (props) => {
  const [inst, setInstructor] = useState([]);
  const [close, setClose] = useState(true);
  const [loading, setLoading] = useState(true);
  const [firstName, setFName] = useState("");
  const [lastName, setLName] = useState("");
  const [photo, setPhoto] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");

  var fname = "kiko";
  useEffect(() => {
    setClose(false);
    const getInstructor = async (e) => {
      await axios.get("/getToken", { withCredentials: true }).then((res) => {
        setInstructor(res.data);
        console.log(res.data);
        setLoading(false);
      });
    };
    getInstructor();
  }, []);

  const postData = async (e) => {
    await axios
      .post("http://localhost:8000/instructorEditProfile", {
        inst: inst._id,
        firstName: firstName ? firstName : inst.firstName,
        lastName: lastName ? lastName : inst.lastName,
        email: email ? email : inst.email,
        bio: bio ? bio : inst.bio,
        photo: photo ? photo : inst.photo,
      })
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        window.location.reload();
      });
  };
  if (loading) return <Loading />;
  else
    return (
      <div className="edit-profile-profile1">
        <div className="edit-profile-bigoutline-default">
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            onChange={(e) => setFName(e.target.value)}
            defaultValue={inst.firstName + ""}
            InputProps={{ sx: { width: 300 } }}
          />
        </div>
        <div className="edit-profile-container2">
          <div className="edit-profile-bigoutline-default1"></div>
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            onChange={(e) => setLName(e.target.value)}
            defaultValue={inst.lastName}
            InputProps={{ sx: { width: 300 } }}
          />
        </div>
        <div className="edit-profile-bigoutline-default2">
          <TextField
            id="outlined-basic"
            label="Photo"
            variant="outlined"
            onChange={(e) => setPhoto(e.target.value)}
            defaultValue={inst.photo}
            InputProps={{ sx: { width: 300 } }}
          />
        </div>
        <div className="edit-profile-bigoutline-default3">
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            defaultValue={inst.email}
            InputProps={{ sx: { width: 300 } }}
          />
        </div>
        <div className="edit-profile-bigoutline-default31">
          <TextField
            id="outlined-basic"
            label="Biography"
            variant="outlined"
            onChange={(e) => setBio(e.target.value)}
            defaultValue={inst.bio}
            InputProps={{ sx: { width: 300 } }}
          />
        </div>
        <div className="submitProfile2">
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

export default EditProfile;
