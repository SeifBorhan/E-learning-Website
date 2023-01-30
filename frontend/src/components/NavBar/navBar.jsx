import React from "react";
import CountriesComp from "../CountriesComp";
import "./navBar.css";
import { useEffect } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const navBar = (props) => {
  return (
    <div class="f">
      <div class="header">
        <div class="header-left">
          <div class="moveLogo">
            <div class="logo">
              {" "}
              <a>
                <img
                  alt="logo"
                  src="https://www.cancham.org.eg/upload/logo.png"
                  loading="lazy"
                  className="header-image"
                  onClick={() => (window.location.href = "/welcome")}
                />
              </a>
            </div>
          </div>
        </div>
        <div class="header-menu">
          <div
            class="menu-item"
            onClick={() => (window.location.href = "/welcome")}
          >
            Home
          </div>
          <div
            class="menu-item"
            onClick={() =>
              (window.location.href = "https://www.cancham.org.eg/")
            }
          >
            About Us
          </div>
        </div>
        <div class="user-settings">
          <div className="countriesMovekimo">
            <CountriesComp />
          </div>

          <div className="lo">
            <Button
              variant="contained"
              color="error"
              onClick={() => (window.location.href = "/login")}
            >
              Login
            </Button>
          </div>

          <div className="si">
            <Button
              variant="outlined"
              color="error"
              onClick={() => (window.location.href = "/signup")}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navBar;
