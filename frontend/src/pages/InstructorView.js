import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AllCourses from "../components/courses/CourseList";
import "bootstrap/dist/css/bootstrap.css"; // or include from a CDN
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import Offcanvas from "react-bootstrap/Offcanvas";

import RangeSlider from "react-bootstrap-range-slider";
function InstructorView() {
  const [courses, setCourses] = useState([]);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  const [sub, setSubject] = useState("");
  const [pricee, setPrice] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [search, setSearch] = useState("");
  const params = new URLSearchParams(window.location.search);
  params.set("searchi", search);

  const instructorId = params.get("id");
  useEffect(() => {
    axios
      .get(`http://localhost:8000/instructorView?id=${instructorId}`)
      .then((res) => {
        setCourses(res.data);
      })
      .then();
  }, []);
  const postData = async (e) => {
    e.preventDefault();
    console.log(search);
    //const searchi = search;
    console.log(instructorId);
    await axios
      .get(
        `http://localhost:8000/instructorSearch?id=${instructorId}&search=${search}`
      )
      .then((res) => {
        setCourses(res.data);
        console.log(res.data);
        console.log(courses);
      });
  };

  const editBio = async (e)=>{
    e.preventDefault();
  await axios
  .get(
    `http://localhost:8000/viewContract?id=${instructorId}`, {params:{bio:bio}}
  )
  .then((res) => {
  }); 
}

const acceptContract = async (e)=>{
  e.preventDefault();
await axios
.get(
  `http://localhost:8000/viewContract?id=${instructorId}`
)
.then((res) => {
}); 
}
const editMail = async (e)=>{
  e.preventDefault();
await axios
.get(
  `http://localhost:8000/instructorEditMail?id=${instructorId}`, {params:{email:email}}
)
.then((res) => {
}); 
}


  const getFilters = async (e) => {
    e.preventDefault();

    console.log(sub, pricee);

    await axios
      .get(`http://localhost:8000/instructorFilter?id=${instructorId}`, {
        params: {
          pricee: pricee,
          sub: sub,
        },
      })
      .then((res) => {
        setCourses(res.data);
        console.log(res.data);
        console.log(courses);
      });
  };
  var dups = [];
  for (let i = 0; i < courses.length; i++) {
    dups[i] = courses[i].subject;
  }
  var deduped = Array.from(new Set(dups));

  return (
    <div>
      <Form onSubmit={postData} className="d-flex">
        <Form.Control
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </Form>

      <Button variant="primary" onClick={handleShow}>
        Filters
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={getFilters}>
            <Form.Select
              style={{ width: "auto" }}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            >
              <option>Subject</option>

              {deduped.map((subject) => (
                <option value={subject}>{subject}</option>
              ))}
            </Form.Select>
            <Form.Label>Price Upto : {pricee} </Form.Label>
            <RangeSlider
              min="0"
              max="5000"
              tooltip="off"
              value={pricee}
              onChange={(changeEvent) => setPrice(changeEvent.target.value)}
              style={{ width: "auto" }}
            />

            <Button
              variant="outline-primary"
              type="submit"
              onClick={handleClose}
            >
              Done
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>

      <Form onSubmit={editBio}>
      <Form.Control
          type="textbox"
          value={bio}
          onChange={(e) => {
            setBio(e.target.value);
          }}
          placeholder="Enter new Bio"
          className="me-2"
          aria-label="Search"
        />
         <Button
              variant="outline-primary"
              type="submit"
          >
              Edit Bio
            </Button>
          </Form>

          <Form onSubmit={editMail}>
      <Form.Control
          type="textbox"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter New Email"
          className="me-2"
          aria-label="Search"
        />
         <Button
              variant="outline-primary"
              type="submit"
          >
              Edit email
            </Button>
          </Form>


          <Form onSubmit={acceptContract}>
      <Form.Control
          type="label"
          
          placeholder="ACL academy will take 1% of all revenue and you will have privalages to create your own promos and set your own promo codes"
          className="me-2"
          aria-label="Search"
          readOnly
        />
         <Button
              variant="outline-primary"
              type="submit"
          >
              Accept Contract
            </Button>
          </Form>
          

      <AllCourses course={courses} />
    </div>
  );
}

export default InstructorView;
