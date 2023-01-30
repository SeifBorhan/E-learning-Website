import React from "react";
import axios from "axios";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

import NavDropdown from 'react-bootstrap/NavDropdown';

function Register(props) {
  const [userName, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const handleClick = () => setCheckbox(!checkbox)
  const [mess, setMess] = useState("");
  const postData = async (e) => {
    e.preventDefault();
    if (checkbox == false) console.log('sign up will not continue')
    await axios
      .post("http://localhost:8000/register", {
        fName, lName, userName, email, pass, country, gender
      }).then((res) => {
        setMess(res.data);
      });

  };

  const contract = <a onClick={() => window.location.href = 'http://localhost:3000/RefundPaymentPolicy'} >refund/payment policy</a>
  return (<>
    {mess}

    <Form onSubmit={postData} >
      <Form.Group className="mb-3" controlId="">
        <Form.Label>First name</Form.Label>
        <Form.Control type="input" onChange={(e) => {
          setFName(e.target.value);
        }} placeholder="First" value={fName} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="input" onChange={(e) => {
          setLName(e.target.value);
        }} placeholder="Last" value={lName} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Country</Form.Label>
        <CountryDropdown
          value={country}
          onChange={(val) => setCountry(val)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" onChange={(e) => {
          setEmail(e.target.value);
        }} placeholder="Email" value={email} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" onChange={(e) => {
          setPass(e.target.value);
        }} placeholder="Password" value={pass} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Username</Form.Label>
        <Form.Control type="input" onChange={(e) => {
          setUser(e.target.value);
        }} placeholder="Username" value={userName} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Select onChange={(e) => {
          setGender(e.target.value);
        }}>
          <option>Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="" >
        <Form.Check
          type='checkbox'
          label={contract}
          onClick={handleClick
          }
          checked={checkbox}
        />

      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </>
  );
}

export default Register;

