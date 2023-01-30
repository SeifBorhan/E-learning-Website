import React, { useState, useEffect } from "react";
import CourseCard from "../components/CourseCard/CourseCard";
import CourseCardList from "../components/CourseCard/CourseCardList";
import PersonIcon from "@mui/icons-material/Person";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import ReportIcon from "@mui/icons-material/Report";
import LogoutIcon from "@mui/icons-material/Logout";
import EditProfile from "../components/EditProfile";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LockIcon from "@mui/icons-material/Lock";
import EditPrivacyTrainee from "../components/EditPrivacyTrainee";
// import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { useNavigate } from "react-router-dom";
import Ratings from "../components/Ratings";
import HeaderTest from "../components/Header/headertest";
import axios from "axios";

import "../index.scss";
import Problem from "../components/Problems/Problem";
import Loading from "../components/ui/Loading";
import { useSnackbar } from "notistack";

const StudentView = (props) => {
  const [coursesView, setCoursesView] = useState(false);
  const [profileView, setProfileView] = useState(true);
  const [problemsView, setProblemsView] = useState(false);
  const [privacyView, setPrivacyView] = useState(false);
  const [walletView, setWalletView] = useState(false);
  const navigate = useNavigate();
  const [showRate, setShowRate] = useState(false);
  const [trainee, setTrainee] = useState({});
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [problems, setProblems] = useState([]);
  const [currencyCode, setCurrencyCode] = useState("");
  const [conversion, setConversion] = useState(0);
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (message, variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };

  const params = new URLSearchParams(window.location.search);

  const traineeId = params.get("id");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/traineeView?id=${traineeId}`)
      .then((res) => {
        setCourses(res.data.courses);
      });
    axios
      .get(`http://localhost:8000/getTraineeDetails?id=${traineeId}`)
      .then((res) => {
        setTrainee(res.data);
        setLoading(false);
      });
    axios
      .get(`http://localhost:8000/viewProblems`, {
        params: { id: traineeId },
      })
      .then((res) => {
        setProblems(res.data);
        setLoading(false);
      });
    axios.get("/getCurrency", { withCredentials: true }).then((res) => {
      setConversion(res.data.conversion);
      setCurrencyCode(res.data.code);
    });
  }, []);

  const logout = async (e) => {
    e.preventDefault();

    await axios.get(`/logout`, { withCredentials: true }).then((res) => {
      navigate("/login");
    });
  };
  const coursesViewSet = () => {
    setCoursesView(true);
    setProfileView(false);
    setProblemsView(false);
    setPrivacyView(false);
    setWalletView(false);
  };
  const profileViewSet = () => {
    setCoursesView(false);
    setProfileView(true);
    setProblemsView(false);
    setPrivacyView(false);
    setWalletView(false);
  };
  const problemViewSet = () => {
    setCoursesView(false);
    setProfileView(false);
    setProblemsView(true);
    setPrivacyView(false);
    setWalletView(false);
  };
  const privacyViewSet = () => {
    setCoursesView(false);
    setProfileView(false);
    setProblemsView(false);
    setPrivacyView(true);
    setWalletView(false);
  };
  const walletViewSet = () => {
    setCoursesView(false);
    setProfileView(false);
    setProblemsView(false);
    setPrivacyView(false);
    setWalletView(true);
  };
  if (!loading) {
    if (coursesView) {
      return (
        <>
          <HeaderTest />
          {showRate && <Ratings />}
          <div className="trainee-view-container">
            <div className="trainee-view-container01">
              <div className="trainee-view-frame2">
                <div className="trainee-view-container02"></div>
                <div className="trainee-view-container03"></div>
                <div className="trainee-view-group51">
                  <div className="trainee-view-container05">
                    <img
                      className="traineeProfilePicture"
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    ></img>
                  </div>
                  <div className="trainee-view-group50">
                    <span className="trainee-view-text">
                      {trainee.firstName} {trainee.lastName}
                    </span>
                  </div>
                  {trainee.type === "I" ? (
                    <div className="trainee-view-group541">
                      <span className="trainee-view-text0301">
                        {parseInt(trainee.wallet * conversion)} {currencyCode}
                      </span>
                      <div className="iconProfileTrainee317">
                        <AccountBalanceWalletIcon />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
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
                  <span
                    className="trainee-view-text05"
                    onClick={problemViewSet}
                  >
                    Problems
                  </span>
                  <div className="iconProblemsTrainee">
                    <ReportIcon />
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
                      <span onClick={logout}>Logout</span>
                    </span>
                  </div>
                  <div className="iconLogoutTrainee">
                    <LogoutIcon />
                  </div>
                </div>
              </div>
              <div className="trainee-view-container111">
                {courses.map((c) => {
                  console.log(c);
                  return (
                    <CourseCard course={c} id={c._id} traineeId={traineeId} />
                  );
                })}
              </div>
              <div className="trainee-view-frame3">
                <div className="trainee-view-container12">
                  <img
                    className="traineeProfilePicture2"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  ></img>
                </div>
                <div className="trainee-view-group16">
                  <span className="trainee-view-text08">
                    <span>Welcome,</span>
                  </span>
                  <span className="trainee-view-text10">
                    <span>
                      {trainee.firstName} {trainee.lastName}
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
          {" "}
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
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    ></img>
                  </div>
                  <div className="trainee-view-group50">
                    <span className="trainee-view-text">
                      {trainee.firstName} {trainee.lastName}
                    </span>
                  </div>
                  {trainee.type === "I" ? (
                    <div className="trainee-view-group541">
                      <span className="trainee-view-text0301">
                        {parseInt(trainee.wallet * conversion)} {currencyCode}
                      </span>
                      <div className="iconProfileTrainee317">
                        <AccountBalanceWalletIcon />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
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
                  <span
                    className="trainee-view-text05"
                    onClick={problemViewSet}
                  >
                    Problems
                  </span>
                  <div className="iconProblemsTrainee">
                    <ReportIcon />
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
                      <span onClick={logout}>Logout</span>
                    </span>
                  </div>
                  <div className="iconLogoutTrainee">
                    <LogoutIcon />
                  </div>
                </div>
              </div>
              <div className="traineeViewEditProfile">
                <EditProfile />
              </div>
              <div className="trainee-view-frame3">
                <div className="trainee-view-container12">
                  <img
                    className="traineeProfilePicture2"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  ></img>
                </div>
                <div className="trainee-view-group16">
                  <span className="trainee-view-text08">
                    <span>Welcome,</span>
                  </span>
                  <span className="trainee-view-text10">
                    <span>
                      {trainee.firstName} {trainee.lastName}
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
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    ></img>
                  </div>
                  <div className="trainee-view-group50">
                    <span className="trainee-view-text">
                      {trainee.firstName} {trainee.lastName}
                    </span>
                  </div>
                  {trainee.type === "I" ? (
                    <div className="trainee-view-group541">
                      <span className="trainee-view-text0301">
                        {parseInt(trainee.wallet * conversion)} {currencyCode}
                      </span>
                      <div className="iconProfileTrainee317">
                        <AccountBalanceWalletIcon />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
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
                    onClick={problemViewSet}
                  >
                    Problems
                  </span>
                  <div className="iconProblemsTrainee">
                    <ReportIcon />
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
                      <span onClick={logout}>Logout</span>
                    </span>
                  </div>
                  <div className="iconLogoutTrainee">
                    <LogoutIcon />
                  </div>
                </div>
              </div>
              <div className="trainee-view-container111">
                {problems.map((problem) => {
                  console.log(problem);
                  return <Problem problem={problem} />;
                })}{" "}
              </div>
              <div className="trainee-view-frame3">
                <div className="trainee-view-container12">
                  <img
                    className="traineeProfilePicture2"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  ></img>
                </div>
                <div className="trainee-view-group16">
                  <span className="trainee-view-text08">
                    <span>Welcome,</span>
                  </span>
                  <span className="trainee-view-text10">
                    <span>
                      {trainee.firstName} {trainee.lastName}
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
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    ></img>
                  </div>
                  <div className="trainee-view-group50">
                    <span className="trainee-view-text">
                      {trainee.firstName} {trainee.lastName}
                    </span>
                  </div>
                  {trainee.type === "I" ? (
                    <div className="trainee-view-group541">
                      <span className="trainee-view-text0301">
                        {parseInt(trainee.wallet * conversion)} {currencyCode}
                      </span>
                      <div className="iconProfileTrainee317">
                        <AccountBalanceWalletIcon />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
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
                    onClick={problemViewSet}
                  >
                    Problems
                  </span>
                  <div className="iconProblemsTrainee">
                    <ReportIcon />
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
                      <span onClick={logout}>Logout</span>
                    </span>
                  </div>
                  <div className="iconLogoutTrainee">
                    <LogoutIcon />
                  </div>
                </div>
              </div>
              <div className="traineeViewEditProfile">
                <EditPrivacyTrainee
                  id={trainee._id}
                  variant={handleClickVariant}
                />
              </div>
              <div className="trainee-view-frame3">
                <div className="trainee-view-container12">
                  <img
                    className="traineeProfilePicture2"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  ></img>
                </div>
                <div className="trainee-view-group16">
                  <span className="trainee-view-text08">
                    <span>Welcome,</span>
                  </span>
                  <span className="trainee-view-text10">
                    <span>
                      {trainee.firstName} {trainee.lastName}
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
