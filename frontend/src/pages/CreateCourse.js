import React from "react";
import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function CreateCourse(props) {
  const [courseName, setCourseName] = useState("");
  const [price, setPrice] = useState("");
  const [subject, setSubject] = useState("");
  const [totalHours, setHours] = useState("");
  const [summary, setSummary] = useState("");
  const [subtitles, setSubtitle] = useState("");

  const [message, setMessage] = useState("");

  const postData = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8000/createCourse", {
        courseName,
        price,
        subject,
        totalHours,
        summary,
        subtitles,
      })
      .then((res) => {
        setMessage(res.data);
      });
  };
  return (
    <>
      {" "}
      <Form onSubmit={postData}>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Course Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setCourseName(e.target.value);
            }}
            placeholder="Course Name"
            value={courseName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            placeholder="price"
            value={price}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            placeholder="subject"
            value={subject}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Total Hours</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setHours(e.target.value);
            }}
            placeholder="Approximately"
            value={totalHours}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Summary</Form.Label>
          <Form.Control
            type="textbox"
            onChange={(e) => {
              setSummary(e.target.value);
            }}
            placeholder="something catchy!"
            value={summary}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Subtitles</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setSubtitle(e.target.value);
            }}
            placeholder="subtitles"
            value={subtitles}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {message}
    </>
  );
}

export default CreateCourse;
