import * as React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSnackbar } from "notistack";
import Button from "@mui/material/Button";

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

export default function SignInSide() {
  const [userName, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const [mess, setMess] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const postData = async (e) => {
    e.preventDefault();
    console.log(userName, pass);

    await axios
      .post(
        "/login",
        {
          userName,
          pass,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        console.log(res.data.mess);
        console.log(document.cookie);
        if (res.data.instructor && res.data.instructor.contract == false) navigate(`/AcceptContract?id=${res.data.instructor._id}`)
        else if (res.data.mess == "") {
          navigate(`/welcome`);
        } else handleClickVariant("Username or Password Incorrect", "error");
      });
  };

  const handleClickVariant = (message, variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://cancham.org.eg//upload/cancham.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "rgb(198, 40, 40)" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                value={userName}
                onChange={(e) => {
                  setUser(e.target.value);
                }}
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={pass}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <div className="signUpButton">
                <Button
                  variant="contained"
                  color="error"
                  onClick={postData}
                  sx={({ height: 35 }, { width: 540 })}
                >
                  login
                </Button>
              </div>
              <Grid container>
                <Grid item xs>
                  <Link
                    onClick={() => (window.location.href = "/passforgotten")}
                    variant="body2"
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    onClick={() => (window.location.href = "/signup")}
                    variant="body2"
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
