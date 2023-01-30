import React, { useState, useEffect } from "react";
import CourseCard from "../components/CourseCard/CourseCard1";
import CourseCardList from "../components/CourseCard/CourseCardList";
import PersonIcon from "@mui/icons-material/Person";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import ReportIcon from "@mui/icons-material/Report";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Offcanvas from "react-bootstrap/Offcanvas";
import LogoutIcon from "@mui/icons-material/Logout";
import EditProfileInstructor from "../components/EditProfileInstructor";
import RateReviewIcon from "@mui/icons-material/RateReview";
import LockIcon from "@mui/icons-material/Lock";
import axios from "axios";
import FilterListIcon from "@mui/icons-material/FilterList";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";
import Problem from "../components/Problems/Problem";
import PaidIcon from "@mui/icons-material/Paid";
import "../index.scss";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import EditPrivacy from "../components/EditPrivacy";
import SearchCourse from "../components/SearchCourse";
import CreateCourseModal from "../components/CreateCourseModal";
import ReviewCard from "../components/ReviewCard";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loading from "../components/ui/Loading";
import HeaderTest from "..//components/Header/headertest";

import { useSnackbar } from "notistack";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const StudentView = (props) => {
  const [coursesView, setCoursesView] = useState(false);
  const [profileView, setProfileView] = useState(true);
  const [ReviewsView, setReviewsView] = useState(false);
  const [privacyView, setPrivacyView] = useState(false);
  const [problemsView, setProblemsView] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [createCourseFlag, setCreateCourseFlag] = useState(false);
  const [instructor, setInstructor] = useState({});
  const [courses, setCourses] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [problems, setProblems] = useState([]);
  const [search, setSearch] = useState("");
  const [currencyCode, setCurrencyCode] = useState("");
  const [conversion, setConversion] = useState(0);
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (message, variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };

  const params = new URLSearchParams(window.location.search);

  const instructorId = params.get("id");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/instructorViewRate?id=${instructorId}`)
      .then((res) => {
        setReviews(res.data);
      });
    axios
      .get(`http://localhost:8000/viewProblems`, {
        params: { id: instructorId },
      })
      .then((res) => {
        setProblems(res.data);
      });
    axios.get("/getToken", { withCredentials: true }).then((res) => {
      console.log(res.data);
      console.log(document.cookie);
      setInstructor(res.data);
      setLoading(false);
    });
    axios.get("/getCurrency", { withCredentials: true }).then((res) => {
      setConversion(res.data.conversion);
      setCurrencyCode(res.data.code);
    });
  }, []);

  const postData = (e) => {
    e.preventDefault();

    axios
      .get(`http://localhost:8000/instructorSearchCourse`, {
        params: { search, instID: instructorId },
      })
      .then((res) => {
        setCourses(res.data);
        console.log(res.data);
      });
  };
  const logout = async (e) => {
    e.preventDefault();

    await axios.get(`/logout`, { withCredentials: true }).then((res) => {
      navigate("/login");
    });
  };

  const onClickCreateCourse = () => {
    setCreateCourseFlag(true);
  };

  const cc = <div></div>;

  const coursesViewSet = () => {
    axios
      .get(`http://localhost:8000/instructorView?id=${instructorId}`)
      .then((res) => {
        setCourses(res.data);
        setCoursesSubjects(res.data);
        setCoursesView(true);
      });

    setProfileView(false);
    setReviewsView(false);
    setPrivacyView(false);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const profileViewSet = () => {
    setCoursesView(false);
    setProfileView(true);
    setReviewsView(false);
    setPrivacyView(false);
    setProblemsView(false);
  };
  const reviewViewSet = () => {
    setCoursesView(false);
    setProfileView(false);
    setReviewsView(true);
    setPrivacyView(false);
    setProblemsView(false);
  };
  const privacyViewSet = () => {
    setCoursesView(false);
    setProfileView(false);
    setReviewsView(false);
    setPrivacyView(true);
    setProblemsView(false);
  };
  const problemViewSet = () => {
    setCoursesView(false);
    setProfileView(false);
    setReviewsView(false);
    setPrivacyView(false);
    setProblemsView(true);
  };

  const [ratingg, setRating] = useState(-1);
  const [sub, setSubject] = useState([]);
  const [pricee, setPrice] = useState([0, 0]);

  const [searched, setSearched] = useState(false);
  // var sub = []
  const handleChecked = (event, newValue) => {
    if (event.currentTarget.checked) {
      sub.push(event.currentTarget.value);
    } else {
      var index = sub.indexOf(event.target.value);
      if (index !== -1) {
        sub.splice(index, 1);
      }
    }
  };
  const closeCourseCardModal = (childData) => {
    setCreateCourseFlag(childData);
  };
  const getFilters = async (e) => {
    e.preventDefault();
    setSubject(sub);
    console.log(sub);
    console.log(pricee);
    await axios
      .post(`http://localhost:8000/filter`, {
        pricee: pricee,
        sub: sub,
        ratingg: "-1",
        courses: coursesSubject,
      })
      .then((res) => {
        setCourses(res.data);
        // setSearched(true);
        console.log(pricee, sub, ratingg, res.data);
      });
  };
  const [coursesSubject, setCoursesSubjects] = useState([]);

  var dups = [];

  for (let i = 0; i < coursesSubject.length; i++) {
    dups[i] = coursesSubject[i].subject;
  }
  var deduped = Array.from(new Set(dups));

  if (!loading) {
    if (coursesView) {
      return (
        <>
          <HeaderTest />
          <div className="trainee-view-container">
            {createCourseFlag && (
              <CreateCourseModal
                onClick={closeCourseCardModal}
                variant={handleClickVariant}
              />
            )}

            <div className="trainee-view-container01">
              <div className="trainee-view-frame2">
                <div className="trainee-view-container02"></div>
                <div className="trainee-view-container03"></div>
                <div className="trainee-view-group51">
                  <div className="trainee-view-container05">
                    <img
                      className="traineeProfilePicture"
                      src={instructor.photo}
                    ></img>
                  </div>
                  <div className="trainee-view-group50">
                    <span className="trainee-view-text">
                      {instructor.firstName} {instructor.lastName}
                    </span>
                  </div>
                </div>
                <div className="trainee-view-group5410">
                  <span className="trainee-view-text03010">
                    {parseInt(instructor.salary * conversion)} {currencyCode}
                  </span>
                  <div className="iconProfileTrainee">
                    <PaidIcon />
                  </div>
                </div>
                <div className="trainee-view-group54">
                  <span
                    className="trainee-view-text03"
                    onClick={profileViewSet}
                  >
                    Profile
                  </span>
                  <div className="iconProfileTrainee">
                    <PersonIcon />
                  </div>
                </div>
                <div className="trainee-view-group53">
                  <span
                    className="trainee-view-text04"
                    style={{ color: "red" }}
                    onClick={coursesViewSet}
                  >
                    Courses
                  </span>
                  <div className="iconCoursesTrainee">
                    <ViewCarouselIcon />
                  </div>
                </div>
                <div className="trainee-view-group52">
                  <span className="trainee-view-text05" onClick={reviewViewSet}>
                    Reviews
                  </span>
                  <div className="iconProblemsTrainee">
                    <RateReviewIcon />
                  </div>
                </div>
                <div className="trainee-view-group58">
                  <div className="trainee-view-group57">
                    <span className="trainee-view-text06">
                      <span onClick={privacyViewSet}>Privacy</span>
                    </span>
                  </div>
                  <div className="privacyIcon">
                    <LockIcon />
                  </div>
                </div>
                <div className="logoutGroup">
                  <div className="trainee-view-group57">
                    <span className="trainee-view-text06">
                      <span onClick={problemViewSet}>Problem</span>
                    </span>
                  </div>
                  <div className="iconLogoutTrainee">
                    <ReportIcon />
                  </div>
                </div>
                <div className="logoutGroup1">
                  <div className="trainee-view-group57">
                    <span className="trainee-view-text06">
                      <span>Logout</span>
                    </span>
                  </div>
                  <div className="iconLogoutTrainee">
                    <LogoutIcon />
                  </div>
                </div>
              </div>
              <div className="searchCourse1">
                <form onSubmit={postData}>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      type="input"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      onSubmit={postData}
                      inputProps={{ "aria-label": "search" }}
                      sx={{ width: 485 }}
                    />
                  </Search>
                </form>
                <div className="createCourseBTN">
                  <Stack direction="row" spacing={2}>
                    <Button
                      startIcon={<AddIcon sx={{ color: "black" }} />}
                      onClick={onClickCreateCourse}
                    >
                      <span className="colorText">course</span>
                    </Button>
                  </Stack>
                  <div className="teacher-view-filter-icon">
                    <Stack direction="row" spacing={2}>
                      <Button
                        startIcon={<FilterListIcon sx={{ color: "black" }} />}
                        onClick={handleShow}
                      >
                        <span className="colorText">filter</span>
                      </Button>
                    </Stack>
                  </div>
                </div>
              </div>
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Filters</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <p style={{ fontWeight: "bold" }}>Subjects</p>

                  {deduped.map((subject) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          aria-label={subject}
                          value={subject}
                          onChange={handleChecked}
                          sx={{
                            color: red[700],
                            "&.Mui-checked": {
                              color: red[700],
                            },
                          }}
                        />
                      }
                      label={subject}
                    />
                  ))}
                  <p style={{ fontWeight: "bold" }}>Price Limit</p>

                  <Slider
                    track={false}
                    max="3000"
                    step="100"
                    size="small"
                    value={pricee}
                    onChange={(event, newValue) => {
                      setPrice(newValue);
                    }}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    sx={{ color: red[700] }}
                  />
                  <Button
                    onClick={getFilters}
                    variant="contained"
                    sx={{ backgroundColor: red[700] }}
                  >
                    Done
                  </Button>
                </Offcanvas.Body>
              </Offcanvas>
              <div className="trainee-view-container11">
                {courses.map((c) => {
                  return <CourseCard course={c} rating={c.rating} id={c._id} />;
                })}
              </div>
              <div className="trainee-view-frame3">
                <div className="trainee-view-container12">
                  <img
                    className="traineeProfilePicture2"
                    src={instructor.photo}
                  ></img>
                </div>
                <div className="trainee-view-group16">
                  <span className="trainee-view-text08">
                    <span>Welcome,</span>
                  </span>
                  <span className="trainee-view-text10">
                    <span>
                      {instructor.firstName} {instructor.lastName}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
    if (profileView) {
      return (
        <>
          <HeaderTest />
          <div className="trainee-view-container">
            <div className="trainee-view-container01">
              <div className="trainee-view-frame2">
                <div className="trainee-view-container02"></div>
                <div className="trainee-view-container03"></div>
                <div className="trainee-view-group51">
                  <div className="trainee-view-container05">
                    <img
                      className="traineeProfilePicture"
                      src={instructor.photo}
                    ></img>
                  </div>
                  <div className="trainee-view-group50">
                    <span className="trainee-view-text">
                      {instructor.firstName} {instructor.lastName}
                    </span>
                  </div>
                </div>
                <div className="trainee-view-group5410">
                  <span className="trainee-view-text03010">
                    {parseInt(instructor.salary * conversion)} {currencyCode}
                  </span>
                  <div className="iconProfileTrainee">
                    <PaidIcon />
                  </div>
                </div>
                <div className="trainee-view-group54">
                  <span
                    className="trainee-view-text03"
                    style={{ color: "red" }}
                    onClick={profileViewSet}
                  >
                    Profile
                  </span>
                  <div className="iconProfileTrainee">
                    <PersonIcon />
                  </div>
                </div>
                <div className="trainee-view-group53">
                  <span
                    className="trainee-view-text04"
                    onClick={coursesViewSet}
                  >
                    Courses
                  </span>
                  <div className="iconCoursesTrainee">
                    <ViewCarouselIcon />
                  </div>
                </div>
                <div className="trainee-view-group52">
                  <span className="trainee-view-text05" onClick={reviewViewSet}>
                    Reviews
                  </span>
                  <div className="iconProblemsTrainee">
                    <RateReviewIcon />
                  </div>
                </div>
                <div className="trainee-view-group58">
                  <div className="trainee-view-group57">
                    <span className="trainee-view-text06">
                      <span onClick={privacyViewSet}>Privacy</span>
                    </span>
                  </div>
                  <div className="privacyIcon">
                    <LockIcon />
                  </div>
                </div>
                <div className="logoutGroup">
                  <div className="trainee-view-group57">
                    <span className="trainee-view-text06">
                      <span onClick={problemViewSet}>Problem</span>
                    </span>
                  </div>
                  <div className="iconLogoutTrainee">
                    <ReportIcon />
                  </div>
                </div>
                <div className="logoutGroup1">
                  <div className="trainee-view-group57">
                    <span className="trainee-view-text06">
                      <span onClick={logout}>Logout</span>
                    </span>
                  </div>
                  <div className="iconLogoutTrainee">
                    <LogoutIcon />
                  </div>
                </div>
              </div>
              <div className="traineeViewEditProfile">
                <EditProfileInstructor />
              </div>
              <div className="trainee-view-frame3">
                <div className="trainee-view-container12">
                  <img
                    className="traineeProfilePicture2"
                    src={instructor.photo}
                  ></img>
                </div>
                <div className="trainee-view-group16">
                  <span className="trainee-view-text08">
                    <span>Welcome,</span>
                  </span>
                  <span className="trainee-view-text10">
                    <span>
                      {instructor.firstName} {instructor.lastName}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
    if (ReviewsView) {
      return (
        <>
          <HeaderTest />
          <div className="trainee-view-container">
            <div className="trainee-view-container01">
              <div className="trainee-view-frame2">
                <div className="trainee-view-container02"></div>
                <div className="trainee-view-container03"></div>
                <div className="trainee-view-group51">
                  <div className="trainee-view-container05">
                    <img
                      className="traineeProfilePicture"
                      src={instructor.photo}
                    ></img>
                  </div>
                  <div className="trainee-view-group50">
                    <span className="trainee-view-text">
                      {instructor.firstName} {instructor.lastName}
                    </span>
                  </div>
                </div>
                <div className="trainee-view-group5410">
                  <span className="trainee-view-text03010">
                    {parseInt(instructor.salary * conversion)} {currencyCode}
                  </span>
                  <div className="iconProfileTrainee">
                    <PaidIcon />
                  </div>
                </div>
                <div className="trainee-view-group54">
                  <span
                    className="trainee-view-text03"
                    onClick={profileViewSet}
                  >
                    Profile
                  </span>
                  <div className="iconProfileTrainee">
                    <PersonIcon />
                  </div>
                </div>
                <div className="trainee-view-group53">
                  <span
                    className="trainee-view-text04"
                    onClick={coursesViewSet}
                  >
                    Courses
                  </span>
                  <div className="iconCoursesTrainee">
                    <ViewCarouselIcon />
                  </div>
                </div>
                <div className="trainee-view-group52">
                  <span
                    className="trainee-view-text05"
                    style={{ color: "red" }}
                    onClick={reviewViewSet}
                  >
                    Reviews
                  </span>
                  <div className="iconProblemsTrainee">
                    <RateReviewIcon />
                  </div>
                </div>
                <div className="trainee-view-group58">
                  <div className="trainee-view-group57">
                    <span className="trainee-view-text06">
                      <span onClick={privacyViewSet}>Privacy</span>
                    </span>
                  </div>
                  <div className="privacyIcon">
                    <LockIcon />
                  </div>
                </div>
                <div className="logoutGroup">
                  <div className="trainee-view-group57">
                    <span className="trainee-view-text06">
                      <span onClick={problemViewSet}> Problem</span>
                    </span>
                  </div>
                  <div className="iconLogoutTrainee">
                    <ReportIcon />
                  </div>
                </div>
                <div className="logoutGroup1">
                  <div className="trainee-view-group57">
                    <span className="trainee-view-text06">
                      <span onClick={logout}>Logout</span>
                    </span>
                  </div>
                  <div className="iconLogoutTrainee">
                    <LogoutIcon />
                  </div>
                </div>
              </div>
              <div className="trainee-view-container1111">
                {reviews.map((review) => {
                  return <ReviewCard review={review} />;
                })}
              </div>
              <div className="trainee-view-frame3">
                <div className="trainee-view-container12">
                  <img
                    className="traineeProfilePicture2"
                    src={instructor.photo}
                  ></img>
                </div>
                <div className="trainee-view-group16">
                  <span className="trainee-view-text08">
                    <span>Welcome,</span>
                  </span>
                  <span className="trainee-view-text10">
                    <span>
                      {instructor.firstName} {instructor.lastName}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
    if (privacyView) {
      return (
        <>
          <HeaderTest />
          <div className="trainee-view-container">
            <div className="trainee-view-container01">
              <div className="trainee-view-frame2">
                <div className="trainee-view-container02"></div>
                <div className="trainee-view-container03"></div>
                <div className="trainee-view-group51">
                  <div className="trainee-view-container05">
                    <img
                      className="traineeProfilePicture"
                      src={instructor.photo}
                    ></img>
                  </div>
                  <div className="trainee-view-group50">
                    <span className="trainee-view-text">
                      {instructor.firstName} {instructor.lastName}
                    </span>
                  </div>
                </div>
                <div className="trainee-view-group5410">
                  <span className="trainee-view-text03010">
                    {parseInt(instructor.salary * conversion)} {currencyCode}
                  </span>
                  <div className="iconProfileTrainee">
                    <PaidIcon />
                  </div>
                </div>
                <div className="trainee-view-group54">
                  <span
                    className="trainee-view-text03"
                    onClick={profileViewSet}
                  >
                    Profile
                  </span>
                  <div className="iconProfileTrainee">
                    <PersonIcon />
                  </div>
                </div>
                <div className="trainee-view-group53">
                  <span
                    className="trainee-view-text04"
                    onClick={coursesViewSet}
                  >
                    Courses
                  </span>
                  <div className="iconCoursesTrainee">
                    <ViewCarouselIcon />
                  </div>
                </div>
                <div className="trainee-view-group52">
                  <span className="trainee-view-text05" onClick={reviewViewSet}>
                    Reviews
                  </span>
                  <div className="iconProblemsTrainee">
                    <RateReviewIcon />
                  </div>
                </div>
                <div className="trainee-view-group58">
                  <div className="trainee-view-group57">
                    <span className="trainee-view-text06">
                      <span style={{ color: "red" }} onClick={privacyViewSet}>
                        Privacy
                      </span>
                    </span>
                  </div>
                  <div className="privacyIcon">
                    <LockIcon />
                  </div>
                </div>
                <div className="logoutGroup">
                  <div className="trainee-view-group57">
                    <span className="trainee-view-text06">
                      <span onClick={problemViewSet}>Problem</span>
                    </span>
                  </div>
                  <div className="iconLogoutTrainee">
                    <ReportIcon />
                  </div>
                </div>
                <div className="logoutGroup1">
                  <div className="trainee-view-group57">
                    <span className="trainee-view-text06">
                      <span onClick={logout}>Logout</span>
                    </span>
                  </div>
                  <div className="iconLogoutTrainee">
                    <LogoutIcon />
                  </div>
                </div>
              </div>
              <div className="traineeViewEditProfile">
                <EditPrivacy
                  instructorId={instructorId}
                  variant={handleClickVariant}
                />
              </div>
              <div className="trainee-view-frame3">
                <div className="trainee-view-container12">
                  <img
                    className="traineeProfilePicture2"
                    src={instructor.photo}
                  ></img>
                </div>
                <div className="trainee-view-group16">
                  <span className="trainee-view-text08">
                    <span>Welcome,</span>
                  </span>
                  <span className="trainee-view-text10">
                    <span>
                      {instructor.firstName} {instructor.lastName}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
    if (problemsView) {
      return (
        <>
          <HeaderTest />
          <div className="trainee-view-container">
            <div className="trainee-view-container01">
              <div className="trainee-view-frame2">
                <div className="trainee-view-container02"></div>
                <div className="trainee-view-container03"></div>
                <div className="trainee-view-group51">
                  <div className="trainee-view-container05">
                    <img
                      className="traineeProfilePicture"
                      src={instructor.photo}
                    ></img>
                  </div>
                  <div className="trainee-view-group50">
                    <span className="trainee-view-text">
                      {instructor.firstName} {instructor.lastName}
                    </span>
                  </div>
                </div>
                <div className="trainee-view-group5410">
                  <span className="trainee-view-text03010">
                    {parseInt(instructor.salary * conversion)} {currencyCode}
                  </span>
                  <div className="iconProfileTrainee">
                    <PaidIcon />
                  </div>
                </div>
                <div className="trainee-view-group54">
                  <span
                    className="trainee-view-text03"
                    onClick={profileViewSet}
                  >
                    Profile
                  </span>
                  <div className="iconProfileTrainee">
                    <PersonIcon />
                  </div>
                </div>
                <div className="trainee-view-group53">
                  <span
                    className="trainee-view-text04"
                    onClick={coursesViewSet}
                  >
                    Courses
                  </span>
                  <div className="iconCoursesTrainee">
                    <ViewCarouselIcon />
                  </div>
                </div>
                <div className="trainee-view-group52">
                  <span className="trainee-view-text05" onClick={reviewViewSet}>
                    Reviews
                  </span>
                  <div className="iconProblemsTrainee">
                    <RateReviewIcon />
                  </div>
                </div>
                <div className="trainee-view-group58">
                  <div className="trainee-view-group57">
                    <span className="trainee-view-text06">
                      <span onClick={privacyViewSet}>Privacy</span>
                    </span>
                  </div>
                  <div className="privacyIcon">
                    <LockIcon />
                  </div>
                </div>
                <div className="logoutGroup">
                  <div className="trainee-view-group57">
                    <span className="trainee-view-text06">
                      <span style={{ color: "red" }} onClick={problemViewSet}>
                        Problem
                      </span>
                    </span>
                  </div>
                  <div className="iconLogoutTrainee">
                    <ReportIcon />
                  </div>
                </div>
                <div className="logoutGroup1">
                  <div className="trainee-view-group57">
                    <span className="trainee-view-text06">
                      <span onClick={logout}>Logout</span>
                    </span>
                  </div>
                  <div className="iconLogoutTrainee">
                    <LogoutIcon />
                  </div>
                </div>
              </div>
              <div className="traineeViewEditProfile1">
                {problems.map((problem) => {
                  console.log(problem);
                  return <Problem problem={problem} />;
                })}
              </div>
              <div className="trainee-view-frame3">
                <div className="trainee-view-container12">
                  <img
                    className="traineeProfilePicture2"
                    src={instructor.photo}
                  ></img>
                </div>
                <div className="trainee-view-group16">
                  <span className="trainee-view-text08">
                    <span>Welcome,</span>
                  </span>
                  <span className="trainee-view-text10">
                    <span>
                      {instructor.firstName} {instructor.lastName}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  } else {
    return <Loading />;
  }
};

export default StudentView;
