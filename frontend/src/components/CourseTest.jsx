import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import StarIcon from "@mui/icons-material/Star";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import "./CourseTest.css";
import { amber, yellow } from "@mui/material/colors";

const CourseTest = (props) => {
  let disc;

  const goToCourse = () => {
    window.location.href = `/outline?courseId=${props.id}`;
  };

  if (props.course.discount != 1) {
    disc = (
      <p className="oldprice">
        {parseInt(props.course.price * props.conversion)} &nbsp;{props.code}
      </p>
    );
  } else {
    disc = <br />;
  }
  return (
    <div className="profile-colmd4">
      <div className="profile-productcard" onClick={goToCourse}>
        <div className="profile-fixedheight">
          <img
            src={
              props.course.thumbnail
                ? props.course.thumbnail
                : "https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg"
            }
            className="profile-productcover151"
          />
          <div className="profile-productactions">
            <div className="profile-like">
              <ShoppingCartIcon
                className="profile-icnfavorite"
                sx={{ fontSize: 20 }}
              />
            </div>

            <div className="profile-like1">
              <VisibilityIcon
                className="profile-icnfavorite2"
                sx={{ fontSize: 20 }}
              />
            </div>
          </div>

          {props.i == 0 || props.i == 1 || props.i == 2 ? (
            <div className="profile-tag">
              <span className="profile-text">
                <span>Most Popular</span>
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="profile-frame3">
          <div className="profile-frame1">
            <div className="profile-frame11">
              <h5 className="profile-text06">
                <span>{props.course.courseName}</span>
              </h5>
            </div>
            <div className="profile-frame4">
              <StarIcon sx={{ color: amber[700], fontSize: 17 }} />
              <span className="profile-text04 small">
                <span> {parseInt(props.course.averageRating)}</span>
              </span>
            </div>
          </div>
          <span className="profile-text02 link">
            <span>
              By: {props.course.instructorID.firstName}{" "}
              {props.course.instructorID.lastName}
            </span>
          </span>
          <span className="profile-text08">
            <span>
              <span>
                {props.course.summary}
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>

              <br></br>
            </span>
          </span>
          <div className="profile-sales">
            <PersonIcon />
            <h6 className="profile-text15">
              <span>{props.course.subscribers.length} Enrollment</span>
            </h6>
          </div>
          <div className="profile-frame12">
            <div className="profile-frame13">
              <div className="profile-iconakariconscalendar">
                <AccessTimeIcon sx={{ fontSize: 17 }} />
              </div>
              <span className="profile-text21 small">
                <span>{props.course.totalHours} mins</span>
              </span>
            </div>
            <div className="profile-frame14">
              <CastForEducationIcon sx={{ fontSize: 17 }} />
              <span className="profile-text23 small">
                <span>{props.course.subtitles.length} Lessons</span>
              </span>
            </div>
          </div>
          {disc}
          <h5 className="profile-text19">
            <p className="newprice">
              {parseInt(
                props.course.price * props.course.discount * props.conversion
              )}
              &nbsp;
              {props.code}
            </p>
          </h5>
          <p>This offer is valid till: {props.course.discountDuration}!!</p>
        </div>
      </div>
    </div>
  );
};

export default CourseTest;
