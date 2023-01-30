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
function InstructorViewRating () {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
    const [ratings, setRatings] = useState("");
    const [review, setReview] = useState("");
    const [rate, setRate] = useState("");
    const params = new URLSearchParams(window.location.search);
     const instructorId = params.get("id");
    const getReview = async () => {
    await axios
      .get(`http://localhost:8000/instructorViewRate?id=${instructorId}`)
      .then((res) => {
        setRatings(res.data);
       // setReview(review);
       // setRate(rate);
        console.log(res.data);
       // console.log(grade);
      });
  };
  return(
    <div
           className="InstructorViewRating">
            <Box sx={{marginBottom: 2}}>
            <Button variant="contained"
            onClick={getReview}
            margin="normal"
            padding="normal"
            >View Rating</Button>
            {/* margin */}
            </Box>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Review</StyledTableCell>
            <StyledTableCell align="center">Rate</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {ratings && ratings.map((x) => (
            <TableRow
            hover
            sx={{
                "&:hover":{
                cursor: "pointer",
                backgroundColor: "#f5f5f5",
                width: "100%"
                }
            }}
              >
              <TableCell align="center">{x.review}</TableCell>
              <TableCell align="center">{x.rate}</TableCell>
              
            </TableRow>
        ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div> 
           
  )
}
export default InstructorViewRating;