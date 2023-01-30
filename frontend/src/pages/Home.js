import { useState, useEffect } from "react";
import axios from "axios";
import AllCourses from "../components/courses/CourseList";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Offcanvas from "react-bootstrap/Offcanvas";
import RangeSlider from "react-bootstrap-range-slider";
import CourseCard from "../components/CourseCard/CourseCard";
import ReviewsAndRatings from "../components/ReviewsAndRatings";

function Home() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [sub, setSubject] = useState("");
  const [pricee, setPrice] = useState(-1);
  const [ratingg, setRating] = useState(-1);
  var dups = [];

  for (let i = 0; i < courses.length; i++) {
    dups[i] = courses[i].subject;
  }
  var deduped = Array.from(new Set(dups));

  const getFilters = async (e) => {
    e.preventDefault();

    console.log(sub, pricee);

    await axios
      .get(`http://localhost:8000/filter`, {
        params: {
          pricee: pricee,
          sub: sub,
          ratingg: ratingg,
        },
      })
      .then((res) => {
        setCourses(res.data);
        console.log(res.data);
        console.log(courses);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/Home")
      .then((res) => {
        setCourses(res.data);
      })
      .then();
  }, []);

  const postData = async (e) => {
    e.preventDefault();
    console.log(search);
    await axios
      .get(`http://localhost:8000/searchresults?search=${search}`)
      .then((res) => {
        setCourses(res.data);
        console.log(res.data);
      });
  };

  return (
    <body>
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
            <Form.Label>Price Upto : {pricee === -1 ? 0 : pricee} </Form.Label>
            <RangeSlider
              min="0"
              max="5000"
              tooltip="off"
              value={pricee}
              onChange={(changeEvent) => setPrice(changeEvent.target.value)}
              style={{ width: "auto", color: "teal" }}
            />
            <Form.Label>Rating: {ratingg === -1 ? 0 : ratingg} </Form.Label>
            <RangeSlider
              min="0"
              max="5"
              tooltip="off"
              value={ratingg}
              onChange={(changeEvent) => setRating(changeEvent.target.value)}
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

      <section>{<AllCourses course={courses} />}</section>
    </body>
  );
}

export default Home;
