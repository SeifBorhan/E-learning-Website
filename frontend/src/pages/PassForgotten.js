import React from "react";
import axios from "axios";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

import NavDropdown from 'react-bootstrap/NavDropdown';

function PassForgotten(props) {
  const [email ,setEmail] = useState("");
   const [mess ,setMess] = useState("");

  const [courses1, setCourses1] = useState([]);

  const postData = async (e) => {
    e.preventDefault();

   await axios
      .get("http://localhost:8000/forgetPass", {params: {
    email:email
  }}).then((res)=>{
    setMess(res.data.mess)
    console.log(mess);
  })

  };
  return ( <>  
      {mess}
  
    <Form onSubmit={postData}>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>email</Form.Label>
        <Form.Control type="email" onChange={(e) => {
             setEmail(e.target.value);
           }} placeholder="Course Name" value={email} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
 </Form>
</>
      );
}

export default PassForgotten;

