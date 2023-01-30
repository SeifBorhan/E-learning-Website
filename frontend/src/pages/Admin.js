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

function Admin() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const [admins, setAdmins] = useState([]);
  const [corpTrainees, setcorpTrainee] = useState([]);
  const [instructors, setInstructor] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminForm, setAdminForm] = useState(false);
  const [instructorForm, setInstructorForm] = useState(false);
  const [traineeForm, setTraineeForm] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/adminstrator/").then((res) => {
      setAdmins(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8000/adminstrator/n").then((res) => {
      setInstructor(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8000/adminstrator/t").then((res) => {
      setcorpTrainee(res.data);
    });
  }, []);

  const postAdminForm = async (e) => {
    setAdminForm(true);
    setInstructorForm(false);
    setTraineeForm(false);
  };
  const postInstructorForm = async (e) => {
    setAdminForm(false);
    setInstructorForm(true);
    setTraineeForm(false);
  };
  const postTraineeForm = async (e) => {
    setAdminForm(false);
    setInstructorForm(false);
    setTraineeForm(true);
  };

  const createAdmin = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8000/adminstrator/", {
        email,
        password,
      })
      .then((res) => {
        setAdmins(res.data);
      });
  };
  const createInstructor = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8000/adminstrator/instructor", {
        userName: email,
        password,
      })
      .then((res) => {
        setInstructor(res.data);
      });
  };
  const createTrainee = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8000/adminstrator/trainee", {
        userName: email,
        password,
      })
      .then((res) => {
        setcorpTrainee(res.data);
      });
  };

  if (adminForm) {
    return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Admins</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Password</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {admins.map((admin) => (
                <TableRow
                  hover
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                      backgroundColor: "#f5f5f5",
                      width: "100%",
                    },
                  }}
                >
                  <TableCell align="center">{admin.email}</TableCell>
                  <TableCell align="center">{admin.password}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <div align="center">
          <Box
            sx={{ marginBottom: 2 }}
            alignitems="left"
            justifyContent="center"
          >
            <Button
              variant="contained"
              onClick={postAdminForm}
              margin="normal"
              padding="normal"
            >
              Add a New Admin
            </Button>
            {/* margin */}
          </Box>
        </div>
        <div align="center">
          <Typography variant="h5">Create New Admin</Typography>
          <form onSubmit={createAdmin}>
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />

            <Button variant="contained" color="primary" onClick={createAdmin}>
              Create Admin
            </Button>
          </form>
        </div>
        <br />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <StyledTableCell align="center">Insturctors</StyledTableCell>
              <TableRow>
                <StyledTableCell align="center">Username</StyledTableCell>
                <StyledTableCell align="center">Password</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {instructors.map((instructor) => (
                <TableRow
                  hover
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                      backgroundColor: "#f5f5f5",
                      width: "100%",
                    },
                  }}
                >
                  <TableCell align="center">{instructor.userName}</TableCell>
                  <TableCell align="center">{instructor.password}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <div align="center">
          <Box
            sx={{ marginBottom: 2 }}
            alignitems="left"
            justifyContent="center"
          >
            <Button
              variant="contained"
              onClick={postInstructorForm}
              margin="normal"
              padding="normal"
            >
              Add a New Instructor
            </Button>
            {/* margin */}
          </Box>
        </div>
        <br />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <StyledTableCell align="center">
                Corporate Trainees
              </StyledTableCell>
              <TableRow>
                <StyledTableCell align="center">Username</StyledTableCell>
                <StyledTableCell align="center">Password</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {corpTrainees.map((trainee) => (
                <TableRow
                  hover
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                      backgroundColor: "#f5f5f5",
                      width: "100%",
                    },
                  }}
                >
                  <TableCell align="center">{trainee.userName}</TableCell>
                  <TableCell align="center">{trainee.password}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <div align="center">
          <Box
            sx={{ marginBottom: 2 }}
            alignitems="left"
            justifyContent="center"
          >
            <Button
              variant="contained"
              onClick={postTraineeForm}
              margin="normal"
              padding="normal"
            >
              Add a New Corporate Trainee
            </Button>
            {/* margin */}
          </Box>
        </div>
      </>
    );
  }
  if (instructorForm) {
    return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <StyledTableCell align="center">Admins</StyledTableCell>
              <TableRow>
                <StyledTableCell align="center">Instructors</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Password</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {admins.map((admin) => (
                <TableRow
                  hover
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                      backgroundColor: "#f5f5f5",
                      width: "100%",
                    },
                  }}
                >
                  <TableCell align="center">{admin.email}</TableCell>
                  <TableCell align="center">{admin.password}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <div align="center">
          <Box
            sx={{ marginBottom: 2 }}
            alignitems="left"
            justifyContent="center"
          >
            <Button
              variant="contained"
              onClick={postAdminForm}
              margin="normal"
              padding="normal"
            >
              Add a New Admin
            </Button>
            {/* margin */}
          </Box>
        </div>

        <br />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <StyledTableCell align="center">Instructors</StyledTableCell>
              <TableRow>
                <StyledTableCell align="center">Username</StyledTableCell>
                <StyledTableCell align="center">Password</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {instructors.map((instructor) => (
                <TableRow
                  hover
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                      backgroundColor: "#f5f5f5",
                      width: "100%",
                    },
                  }}
                >
                  <TableCell align="center">{instructor.userName}</TableCell>
                  <TableCell align="center">{instructor.password}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <div align="center">
          <Box
            sx={{ marginBottom: 2 }}
            alignitems="left"
            justifyContent="center"
          >
            <Button
              variant="contained"
              onClick={postInstructorForm}
              margin="normal"
              padding="normal"
            >
              Add a New Instructor
            </Button>
            {/* margin */}
          </Box>
        </div>
        <br />
        <div align="center">
          <Typography variant="h5">Create New Instructor</Typography>
          <form>
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Username"
              variant="outlined"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />

            <Button
              variant="contained"
              color="primary"
              onClick={createInstructor}
            >
              Create Instructor
            </Button>
          </form>
        </div>
        <br />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <StyledTableCell align="center">
                Corporate Trainees
              </StyledTableCell>

              <TableRow>
                <StyledTableCell align="center">Username</StyledTableCell>
                <StyledTableCell align="center">Password</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {corpTrainees.map((trainee) => (
                <TableRow
                  hover
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                      backgroundColor: "#f5f5f5",
                      width: "100%",
                    },
                  }}
                >
                  <TableCell align="center">{trainee.userName}</TableCell>
                  <TableCell align="center">{trainee.password}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <div align="center">
          <Box
            sx={{ marginBottom: 2 }}
            alignitems="left"
            justifyContent="center"
          >
            <Button
              variant="contained"
              onClick={postTraineeForm}
              margin="normal"
              padding="normal"
            >
              Add a New Corporate Trainee
            </Button>
            {/* margin */}
          </Box>
        </div>
      </>
    );
  }
  if (traineeForm) {
    return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Admins </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Password</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {admins.map((admin) => (
                <TableRow
                  hover
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                      backgroundColor: "#f5f5f5",
                      width: "100%",
                    },
                  }}
                >
                  <TableCell align="center">{admin.email}</TableCell>
                  <TableCell align="center">{admin.password}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <div align="center">
          <Box
            sx={{ marginBottom: 2 }}
            alignitems="left"
            justifyContent="center"
          >
            <Button
              variant="contained"
              onClick={postAdminForm}
              margin="normal"
              padding="normal"
            >
              Add a New Admin
            </Button>
            {/* margin */}
          </Box>
        </div>

        <br />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <StyledTableCell align="center">Instructors</StyledTableCell>

              <TableRow>
                <StyledTableCell align="center">Username</StyledTableCell>
                <StyledTableCell align="center">Password</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {instructors.map((instructor) => (
                <TableRow
                  hover
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                      backgroundColor: "#f5f5f5",
                      width: "100%",
                    },
                  }}
                >
                  <TableCell align="center">{instructor.userName}</TableCell>
                  <TableCell align="center">{instructor.password}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <div align="center">
          <Box
            sx={{ marginBottom: 2 }}
            alignitems="left"
            justifyContent="center"
          >
            <Button
              variant="contained"
              onClick={postInstructorForm}
              margin="normal"
              padding="normal"
            >
              Add a New Instructor
            </Button>
            {/* margin */}
          </Box>
        </div>
        <br />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <StyledTableCell align="center">
                Corporate Trainees
              </StyledTableCell>

              <TableRow>
                <StyledTableCell align="center">Username</StyledTableCell>
                <StyledTableCell align="center">Password</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {corpTrainees.map((trainee) => (
                <TableRow
                  hover
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                      backgroundColor: "#f5f5f5",
                      width: "100%",
                    },
                  }}
                >
                  <TableCell align="center">{trainee.userName}</TableCell>
                  <TableCell align="center">{trainee.password}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <div align="center">
          <Box
            sx={{ marginBottom: 2 }}
            alignitems="left"
            justifyContent="center"
          >
            <Button
              variant="contained"
              onClick={postTraineeForm}
              margin="normal"
              padding="normal"
            >
              Add a New Corporate Trainee
            </Button>
            {/* margin */}
          </Box>
        </div>
        <br />
        <div align="center">
          <Typography variant="h5">Create New Corporate Trainee</Typography>
          <form>
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Username"
              variant="outlined"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />

            <Button variant="contained" color="primary" onClick={createTrainee}>
              Create Corporate Trainee
            </Button>
          </form>
        </div>
        <br />
      </>
    );
  }
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Admins</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Password</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {admins.map((admin) => (
              <TableRow
                hover
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    backgroundColor: "#f5f5f5",
                    width: "100%",
                  },
                }}
              >
                <TableCell align="center">{admin.email}</TableCell>
                <TableCell align="center">{admin.password}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />

      <div align="center">
        <Box sx={{ marginBottom: 2 }} alignitems="left" justifyContent="center">
          <Button
            variant="contained"
            onClick={postAdminForm}
            margin="normal"
            padding="normal"
          >
            Add a New Admin
          </Button>
          {/* margin */}
        </Box>
      </div>
      <br />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Instructors</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell align="center">Username</StyledTableCell>
              <StyledTableCell align="center">Password</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {instructors.map((instructor) => (
              <TableRow
                hover
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    backgroundColor: "#f5f5f5",
                    width: "100%",
                  },
                }}
              >
                <TableCell align="center">{instructor.userName}</TableCell>
                <TableCell align="center">{instructor.password}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />

      <div align="center">
        <Box sx={{ marginBottom: 2 }} alignitems="left" justifyContent="center">
          <Button
            variant="contained"
            onClick={postInstructorForm}
            margin="normal"
            padding="normal"
          >
            Add a New Instructor
          </Button>
          {/* margin */}
        </Box>
      </div>
      <br />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">
                Corporate Trainees
              </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell align="center">Username</StyledTableCell>
              <StyledTableCell align="center">Password</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {corpTrainees.map((trainee) => (
              <TableRow
                hover
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    backgroundColor: "#f5f5f5",
                    width: "100%",
                  },
                }}
              >
                <TableCell align="center">{trainee.userName}</TableCell>
                <TableCell align="center">{trainee.password}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <div align="center">
        <Box sx={{ marginBottom: 2 }} alignitems="left" justifyContent="center">
          <Button
            variant="contained"
            onClick={postTraineeForm}
            margin="normal"
            padding="normal"
          >
            Add a New Corporate Trainee
          </Button>
          {/* margin */}
        </Box>
        <Box sx={{ marginBottom: 2 }} alignitems="left" justifyContent="center">
          <Button
            variant="contained"
            onClick={() =>
              (window.location.href = "http://localhost:3000/ReportedProblems")
            }
            margin="normal"
            padding="normal"
          >
            View Reported Problems
          </Button>
          {/* margin */}
        </Box>
      </div>
      <br />
    </>
  );
}

export default Admin;
