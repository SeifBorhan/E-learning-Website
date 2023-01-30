import React from "react";
import axios from "axios";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";

function ChangePass() {
  const [userName ,setUser] = useState("");
  const [pass ,setPass] = useState("");
  const navigate= useNavigate();
  const [mess,setMess]= useState("");
    const params = new URLSearchParams(window.location.search);

 
  const email= params.get("email");
  const postData = async (e) => {
    e.preventDefault();
   await axios
      .post("http://localhost:8000/changePass", {
    pass:pass,email:email
  }).then((res) => {
console.log(res)
if(res.data.mess=='') navigate('/Home')
else setMess(res.data.mess)
  });
   
 
  };
  return ( <>   
 
  
   <Form  onSubmit={postData}>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>New Pass</Form.Label>
        <Form.Control  type="pass" onChange={(e) => {
             setPass(e.target.value);
           }} placeholder="dont forget it this time :D" value={pass} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
 </Form>


</>
      );
}

export default ChangePass;

