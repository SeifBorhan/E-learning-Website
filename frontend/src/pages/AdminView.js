import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminCR from "../components/AdminCourseRequest/AdminCR";
import PersonIcon from "@mui/icons-material/Person";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import ReportIcon from "@mui/icons-material/Report";
import LogoutIcon from "@mui/icons-material/Logout";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import "../index.scss";
import AddUser from "../components/Add User/AddUser";
import AdminProblem from "../components/AdminProblem/AdminProblem";
import ReqRefund from "../components/ReqRefund/ReqRefund";
import { useNavigate } from "react-router-dom";
import Discount from "../components/Discount/Discount";
import { useSnackbar } from "notistack";
const AdminView = (props) => {
  const [crView, setcrView] = useState(false);
  const [addUserView, setAddUserView] = useState(true);
  const [problemsView, setProblemsView] = useState(false);
  const [rrView, setrrView] = useState(false);
  const [problems, setProblems] = useState({});
  const [admin, setAdmin] = useState("");
  const [corp, setCorp] = useState("");
  const [inst, setInst] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [courseReqs, setCourseReqs] = useState([]);
  const [refundReqs, setRefundReqs] = useState([]);
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (message, variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };

  useEffect(() => {
    axios.get(`http://localhost:8000/adminstrator/courseReqs`).then((res) => {
      setCourseReqs(res.data);
    });

    axios.get(`http://localhost:8000/adminstrator/refundReqs`).then((res) => {
      setRefundReqs(res.data);
    });
    axios
      .get(`http://localhost:8000/adminstrator/viewProblemsAdmin`)
      .then((res) => {
        setProblems(res.data);
      });
  }, []);

  const logout = async (e) => {
    e.preventDefault();

    await axios.get(`http://localhost:8000/logout`).then((res) => {
      navigate("/login");
    });
  };

  const crViewSet = () => {
    setcrView(true);
    setAddUserView(false);
    setProblemsView(false);
    setrrView(false);
  };
  const addUserViewSet = () => {
    setcrView(false);
    setAddUserView(true);
    setProblemsView(false);
    setrrView(false);
  };
  const problemViewSet = () => {
    setcrView(false);
    setAddUserView(false);
    setProblemsView(true);
    setrrView(false);
  };

  const rrViewSet = () => {
    setcrView(false);
    setAddUserView(false);
    setProblemsView(false);
    setrrView(true);
  };

  if (crView) {
    return (
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
                <span className="trainee-view-text">Admin</span>
              </div>
            </div>
            <div className="trainee-view-group54">
              <span className="trainee-view-text03" onClick={addUserViewSet}>
                Add User
              </span>
              <div className="iconProfileTrainee">
                <PersonIcon />
              </div>
            </div>
            <div className="trainee-view-group53">
              <span
                className="trainee-view-text04"
                style={{ color: "red" }}
                onClick={crViewSet}
              >
                Access Requests
              </span>
              <div className="iconCoursesTrainee">
                <ViewCarouselIcon />
              </div>
            </div>
            <div className="trainee-view-group52">
              <span className="trainee-view-text05" onClick={problemViewSet}>
                Problems
              </span>
              <div className="iconProblemsTrainee">
                <ReportIcon />
              </div>
            </div>

            <div className="trainee-view-group55">
              <span className="trainee-view-text05" onClick={rrViewSet}>
                Refund Requests
              </span>
              <div className="iconCashTrainee">
                <CurrencyExchangeIcon />
              </div>
            </div>

            <div className="trainee-view-group58">
              <div className="trainee-view-group571">
                <span className="trainee-view-text061" onClick={logout}>
                  <span>Logout</span>
                </span>
              </div>
              <div className="iconLogoutTrainee1">
                <LogoutIcon />
              </div>
            </div>
          </div>

          <div className="trainee-view-container111">
            {courseReqs.map((coursereq) => {
              return <AdminCR cr={coursereq} id={coursereq._id} />;
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
                <span>Admin</span>
              </span>
              <span className="admin-view-text10">
                <Discount variant={handleClickVariant} />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (rrView) {
    return (
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
                <span className="trainee-view-text">Admin</span>
              </div>
            </div>
            <div className="trainee-view-group54">
              <span className="trainee-view-text03" onClick={addUserViewSet}>
                Add User
              </span>
              <div className="iconProfileTrainee">
                <PersonIcon />
              </div>
            </div>

            <div className="trainee-view-group53">
              <span className="trainee-view-text04" onClick={crViewSet}>
                Access Requests
              </span>
              <div className="iconCoursesTrainee">
                <ViewCarouselIcon />
              </div>
            </div>

            <div className="trainee-view-group52">
              <span className="trainee-view-text05" onClick={problemViewSet}>
                Problems
              </span>
              <div className="iconProblemsTrainee">
                <ReportIcon />
              </div>
            </div>

            <div className="trainee-view-group55">
              <span
                className="trainee-view-text04"
                style={{ color: "red" }}
                onClick={crViewSet}
              >
                Refund Requests
              </span>
              <div className="iconCashTrainee">
                <CurrencyExchangeIcon />
              </div>
            </div>

            <div className="trainee-view-group58">
              <div className="trainee-view-group571">
                <span className="trainee-view-text061" onClick={logout}>
                  <span>Logout</span>
                </span>
              </div>
              <div className="iconLogoutTrainee1">
                <LogoutIcon />
              </div>
            </div>
          </div>
          <div className="trainee-view-container111">
            {refundReqs.map((refundReq) => {
              return <ReqRefund rr={refundReq} id={refundReq._id} />;
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
                <span>Admin</span>
              </span>
              <span className="admin-view-text10">
                <Discount />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (addUserView) {
    return (
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
                <span className="trainee-view-text">Admin</span>
              </div>
            </div>
            <div className="trainee-view-group54">
              <span
                className="trainee-view-text03"
                style={{ color: "red" }}
                onClick={addUserViewSet}
              >
                Add User
              </span>
              <div className="iconProfileTrainee">
                <PersonIcon />
              </div>
            </div>
            <div className="trainee-view-group53">
              <span className="trainee-view-text04" onClick={crViewSet}>
                Access Requests
              </span>
              <div className="iconCoursesTrainee">
                <ViewCarouselIcon />
              </div>
            </div>
            <div className="trainee-view-group52">
              <span className="trainee-view-text05" onClick={problemViewSet}>
                Problems
              </span>
              <div className="iconProblemsTrainee">
                <ReportIcon />
              </div>
            </div>

            <div className="trainee-view-group55">
              <span className="trainee-view-text05" onClick={rrViewSet}>
                Refund Requests
              </span>
              <div className="iconCashTrainee">
                <CurrencyExchangeIcon />
              </div>
            </div>

            <div className="trainee-view-group58">
              <div className="trainee-view-group571">
                <span className="trainee-view-text061" onClick={logout}>
                  <span>Logout</span>
                </span>
              </div>
              <div className="iconLogoutTrainee1">
                <LogoutIcon />
              </div>
            </div>
          </div>
          <div className="traineeViewEditProfile">
            <AddUser variant={handleClickVariant} />
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
                <span>Admin</span>
              </span>
              <span className="admin-view-text10">
                <Discount />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (problemsView) {
    return (
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
                <span className="trainee-view-text">Admin</span>
              </div>
            </div>
            <div className="trainee-view-group54">
              <span className="trainee-view-text03" onClick={addUserViewSet}>
                Add User
              </span>
              <div className="iconProfileTrainee">
                <PersonIcon />
              </div>
            </div>
            <div className="trainee-view-group53">
              <span className="trainee-view-text04" onClick={crViewSet}>
                Access Requests
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
            <div className="trainee-view-group55">
              <span className="trainee-view-text05" onClick={rrViewSet}>
                Refund Requests
              </span>
              <div className="iconCashTrainee">
                <CurrencyExchangeIcon />
              </div>
            </div>

            <div className="trainee-view-group58">
              <div className="trainee-view-group571">
                <span className="trainee-view-text061" onClick={logout}>
                  <span>Logout</span>
                </span>
              </div>
              <div className="iconLogoutTrainee1">
                <LogoutIcon />
              </div>
            </div>
          </div>
          <div className="trainee-view-container111">
            {problems.map((problem) => {
              return <AdminProblem problem={problem} id={problem._id} />;
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
                <span>Admin</span>
              </span>
              <span className="admin-view-text10">
                <Discount />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AdminView;
