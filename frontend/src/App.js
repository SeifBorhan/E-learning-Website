import { Route, Routes } from "react-router-dom";
import InstructorPage from "./pages/InstructorPage";
import NewExamForm from "./components/forms/NewExamForm";
import TraineePage from "./pages/TraineeView";
import NewPromotionForm from "./components/forms/PromotionForm";
import KarimTraineeRateInstructor from "./components/forms/KarimTraineeRateInstructor";
import Home from "./pages/Home";
import CreateCourse from "./components/CreateCourse";
import Start from "./pages/Start";
import InstructorView from "./pages/InstructorView";
import Admin from "./pages/Admin";
//import CreateCourse from "./pages/CreateCourse";
import Course from "./pages/Course";
import TraineeView from "./pages/TraineeView";
import Ratings from "./pages/Ratings";
import EditCourse from "./pages/EditCourse";
import PassForgotten from "./pages/PassForgotten";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ChangePass from "./pages/ChangePass";
import InstructorChangePassword from "./pages/instructorchangepassword";
import TraineeViewGrade from "./pages/TraineeViewGrade";
import TraineeChangePassword from "./pages/TraineeChangePassword";
import InstructorViewRating from "./pages/InstructorViewRating";
import TraineeViewExamAnswers from "./pages/TraineeViewExamAnswers";
import Welcome from "./pages/Welcome";
import Profile from "./pages/Profile";
import CourseOutline from "./pages/CourseOutline";
import SearchResults from "./pages/SearchResult";
import StudentView from "./pages/StudentView";
import SignUp from "./pages/SignUp";
import TeacherView from "./pages/TeacherView";
import CoursePage from "./pages/CoursePage";
import VideoPage from "./pages/VideoPage";
import SubtitleView from "./pages/SubtitleView";
import AdminView from "./pages/AdminView";
import InstructorCourseOutline from "./pages/InstructorCourseOutline";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import Certificate from "./pages/certificate";
import Outline from "./pages/Outline";
import AcceptContract from "./pages/AcceptContract";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="outline" element={<Outline />}></Route>
        <Route path="/" element={<Start />}></Route>
        <Route
          path="/instructorcourseoutline"
          element={<InstructorCourseOutline />}
        ></Route>
        <Route path="/adminview" element={<AdminView />}></Route>
        <Route path="/subtitleview" element={<VideoPage />}></Route>
        <Route path="/videopage" element={<VideoPage />}></Route>
        <Route path="/teacherview" element={<TeacherView />}></Route>
        <Route path="/coursepage" element={<CoursePage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/StudentView" element={<StudentView />}></Route>
        <Route path="/searchresults" element={<SearchResults />}></Route>
        <Route path="/courseoutline" element={<CourseOutline />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/Welcome" element={<Welcome />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/instructorView" element={<InstructorView />}></Route>
        <Route path="/traineeView" element={<TraineeView />}></Route>
        <Route path="/adminstrator" element={<Admin />}></Route>
        <Route path="/course" element={<Course />}></Route>
        <Route path="/courseRatings" element={<Ratings />}></Route>
        <Route path="/instructor-view" element={<InstructorPage />}></Route>
        <Route path="/new-exam" element={<NewExamForm />}></Route>
        <Route path="/trainee-view" element={<TraineePage />}></Route>
        <Route path="/new-promotion" element={<NewPromotionForm />}></Route>
        <Route
          path="/karim-trainee-view"
          element={<KarimTraineeRateInstructor />}
        ></Route>
        <Route path="/courseEdit" element={<EditCourse />}></Route>
        <Route path="/passForgotten" element={<PassForgotten />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/changePass" element={<ChangePass />}></Route>
        <Route
          path="/t/viewGradetrainee"
          element={<TraineeViewGrade />}
        ></Route>
        <Route
          path="/intructorViewPeronalData"
          element={<InstructorChangePassword />}
        ></Route>
        <Route path="/certificate" element={<Certificate />} />
        <Route
          path="/t/viewTraineePassword"
          element={<TraineeChangePassword />}
        ></Route>
        <Route
          path="/instructorViewRate"
          element={<InstructorViewRating />}
        ></Route>
        <Route
          path="/t/viewAnswerstrainee"
          element={<TraineeViewExamAnswers />}
        ></Route>
        <Route path="/success" element={<Success />}></Route>
        <Route path="/cancel" element={<Cancel />}></Route>
        <Route path="/AcceptContract" element={<AcceptContract />} />
      </Routes>
    </div>
  );
}

export default App;
