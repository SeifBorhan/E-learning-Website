import React from "react";
import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SearchBar(props) {
  const [Search, setSearch] = useState("");
  const [courses1, setCourses1] = useState([]);

  const postData = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8000/searchresults", {
        Search: Search,
      })
      .then((res) => {
        setCourses1(res.data.courses);
        console.log(courses1);
      });
  };
  return (
    <Form
      onSubmit={postData}
      onChange={(e) => {
        setSearch(e.target.value);
      }}
      className="d-flex"
    >
      <Form.Control
        type="text"
        value={Search}
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
  );
}

export default SearchBar;
