import React from "react";
import CountriesComp from "../CountriesComp";
import { useNavigate } from "react-router-dom";
import "./headertest.scss";
import { useEffect } from "react";
import axios from "axios";
const HeaderTest = (props) => {
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const goToProfile = () => {
    axios.get("/getToken", { withCredentials: true }).then((res) => {
      if (res.data.type === "T") navigate(`/teacherView?id=${res.data._id}`);
      if (res.data.type === "C" || res.data.type === "I")
        navigate(`/studentView?id=${res.data._id}`);
    });
  };

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
          <div class="menu-item" onClick={() => goToProfile()}>
            Profile
          </div>
          <div
            class="menu-item"
            onClick={() =>
              (window.location.href = "https://www.cancham.org.eg/")
            }
          >
            About us
          </div>
        </div>
        <div class="user-settings">
          <div className="countriesMove">
            <CountriesComp />
          </div>
          <img
            class="user-profile "
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt=""
            onClick={goToProfile}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderTest;
