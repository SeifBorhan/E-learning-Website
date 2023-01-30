import React from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';  
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";

//import grade from '../../../backend/models/grade';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));





const TraineeViewGrade= () =>{
    const [grade,setGrade] = useState("");
    const params = new URLSearchParams(window.location.search);
    const traineeId = params.get("id");
    const exam = params.get("exam")
    const getGrade = async () => {
        await axios
          .get(`http://localhost:8000/t/viewGradetrainee?id=${traineeId}&exam=${exam}`)
          .then((res) => {
            setGrade(res.data);
            console.log(res.data);
           // console.log(grade);
          });
      };
      
    
    
      return(
        <div
           className="TraineeViewGrade">
            <Box sx={{marginBottom: 2}}>
            <Button variant="contained"
            onClick={getGrade}
            margin="normal"
            padding="normal"
            >View Grade</Button>
            {/* margin */}
            </Box>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Exercise</StyledTableCell>
            <StyledTableCell align="center">Grade</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
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
              <TableCell align="center">Exam</TableCell>
              <TableCell align="center">{grade}</TableCell>
              
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
        </div> 
           

    )
       
}

    
   
export default TraineeViewGrade;