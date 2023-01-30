import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography, TextField } from "@mui/material";

function InstructorChangePassword() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const [instructors, setInstructors] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
 // const [message, setMessage] = useState("");
  const params = new URLSearchParams(window.location.search);
  const instructorId = params.get("id");
  const updatePassword = async (e) => {
    e.preventDefault();
    if(password===confirmpassword){

   
    await axios
      .patch(`http://localhost:8000/intructorViewPeronalData?id=${instructorId}`,{
        password
      })
      .then((res) => {
        setInstructors(res.data);
        console.log(res.data);
       // console.log(grade);
       setErrorMessage("Password changed successfully")
      });
    }
    else{
      setErrorMessage("Password do not match!")
    }
  };
  return(
    <>
    
    <><div align="center">
    </div><div align="center">
        <Typography variant="h5">Change Password</Typography>
        <form onSubmit={updatePassword}>
          <TextField
            style={{ width: "200px", margin: "5px" }}
            type="text"
            label="New Password"
            variant="outlined"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            } } />
          <br />
          <TextField
            style={{ width: "200px", margin: "5px" }}
            type="text"
            label="Confirm Password"
            variant="outlined"
            value={confirmpassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            } } />
          <br />

          <Button variant="contained" color="primary" onClick={updatePassword}>
            Change password
          </Button>
          {errorMessage && (<div> {errorMessage} </div>)}
        </form>
      </div></>
      </>
  )
  

}
export default InstructorChangePassword;

