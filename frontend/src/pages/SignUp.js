import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "../index.scss";
import { useState } from "react";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate, redirect } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSnackbar } from "notistack";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://cancham.org.eg">
        Canadian Chamber of Commerce
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const [userName, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const handleClick = () => setCheckbox(!checkbox);
  const [mess, setMess] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (message, variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };
  const postData = async (e) => {
    e.preventDefault();
    console.log(fName, lName, userName, email, pass, gender);
    if (checkbox == false)
      handleClickVariant("You have to read and accept our policies", "error");
    else
      await axios
        .post("http://localhost:8000/register", {
          fName,
          lName,
          userName,
          email,
          pass,
          gender,
        })
        .then((res) => {
          setMess(res.data);
          if (res.data.mess) navigate("/login");
          else setMess(res.data.mess);
        });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "rgb(198, 40, 40)" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  onChange={(e) => {
                    setFName(e.target.value);
                  }}
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  onChange={(e) => {
                    setLName(e.target.value);
                  }}
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  onChange={(e) => {
                    setUser(e.target.value);
                  }}
                  type="Username"
                  label="Username"
                  name="Username"
                  autoComplete="Username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <FormControl fullWidth>
                    <InputLabel
                      id="demo-simple-select-label"
                      onClick={(e) => setGender(e.target.value)}
                    >
                      Gender
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Gender"
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <MenuItem value={"Male"}>Male</MenuItem>
                      <MenuItem value={"Female"}>Female</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkbox}
                      onClick={handleClick}
                      color="primary"
                    />
                  }
                />
                I agree to the{" "}
                <Link
                  onClick={() =>
                    (window.location.href =
                      "https://www.termsandconditionsgenerator.com/live.php?token=VTkyKvJYh3fVjzi7lZonVsdKVfoHUYLD")
                  }
                  variant="body2"
                >
                  refund/payment policy and terms of service.
                </Link>
              </Grid>
            </Grid>
            <div className="signUpButton">
              <Button
                variant="contained"
                color="error"
                onClick={postData}
                sx={({ height: 35 }, { width: 400 })}
              >
                sign up
              </Button>
            </div>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  onClick={() => (window.location.href = "/login")}
                  variant="body2"
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
