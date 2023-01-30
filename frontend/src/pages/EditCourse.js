import { useEffect, useState } from "react";
import axios from "axios";
import SideBar from "../components/layout/SideBar";
import Card from "../components/ui/Card";
import { Button, TextField, Typography } from "@mui/material";

function EditCourse() {
  const [course, setCourse] = useState([]);
  const [subtitles, setSubtitles] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [link, setLink] = useState("");
  const [desc, setDesc] = useState("");
  const [subtitleid, setSubtitleId] = useState("");
  const [prev, setPrev] = useState(false);
  const [previewLink, setPreviewLink] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get("courseId");

    axios
      .get(`http://localhost:8000/courseEdit?courseId=${courseId}`)
      .then((res) => {
        setCourse(res.data);
        setSubtitles(res.data.subtitles);

        if (course.previewVideo === "") {
          setPrev(true);
        }
      });
  }, []);

  const onClick = async (id) => {
    setSubtitleId(id);
    if (clicked) {
      setClicked(false);
    } else {
      await axios
        .get(`http://localhost:8000/subtitles?id=${id}`)
        .then((res) => {
          setClicked(true);
        });
    }
  };

  const uploadVideo = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8000/uploadVideo", {
        vid: link,
        descr: desc,
        subID: subtitleid,
      })
      .then((res) => {});
  };

  const uploadPreviewVideo = async (e) => {
    e.preventDefault();
    const params = new URLSearchParams(window.location.search);

    await axios
      .post("http://localhost:8000/uploadPreview", {
        link: previewLink,
        cID: params.get("courseId"),
      })
      .then((res) => {});
  };

  const addVideoForm = (
    <>
      <div align="center">
        <Typography variant="h5">Upload a Video</Typography>
        <form onSubmit={uploadVideo}>
          <TextField
            style={{ width: "200px", margin: "5px" }}
            type="text"
            label="Video Link"
            variant="outlined"
            value={link}
            onChange={(e) => {
              setLink(e.target.value);
            }}
          />
          <br />
          <TextField
            style={{ width: "200px", margin: "5px" }}
            type="text"
            label="Description"
            variant="outlined"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <br />

          <Button variant="contained" color="primary" onClick={uploadVideo}>
            Upload a New Video
          </Button>
        </form>
      </div>
    </>
  );

  const addPreviewVideoForm = (
    <>
      <div align="center">
        <Typography variant="h5">Upload a Preview Video</Typography>
        <form onSubmit={uploadPreviewVideo}>
          <TextField
            style={{ width: "200px", margin: "5px" }}
            type="text"
            label="Preview Video Link"
            variant="outlined"
            value={previewLink}
            onChange={(e) => {
              setPreviewLink(e.target.value);
            }}
          />

          <br />

          <Button
            variant="contained"
            color="primary"
            onClick={uploadPreviewVideo}
          >
            Upload Preview Video
          </Button>
        </form>
      </div>
    </>
  );

  return (
    <>
      CourseName: {course.courseName} <br />
      Price: {course.price} <br />
      Subject: {course.subject} <br />
      Year of Upload: {course.yearOfUpload} <br />
      {/* Rating: {course.rating} <br /> */}
      Total Hours: {course.totalHours} <br />
      Summary: {course.summary}
      <br />
      {addPreviewVideoForm}
      {clicked && addVideoForm}
      <SideBar>
        <Card>Subtitles</Card>
        <br />
        <Card>
          {subtitles.map((subtitle) => (
            <p
              onClick={() => {
                onClick(subtitle._id);
              }}
            >
              {subtitle.name}
              {subtitle.duration}
            </p>
          ))}
        </Card>
      </SideBar>
    </>
  );
}

export default EditCourse;
