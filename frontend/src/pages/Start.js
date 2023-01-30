import CountryList from "../components/CountryList";
import { React, useEffect, useState } from "react";
import axios from "axios";
import CreateCourse from "../components/CreateCourse";

import CourseTest from "../components/CourseTest";
import Search from "../components/Search/Search";
import NestedModal from "../components/ui/NestedModal";
import Test from "../components/ui/Test";
import HorizontalCourseList from "../components/courses/HorizontalCourseList";
import SRCourse from "../components/SRCourse";
import CreateExam from "../components/CreateExam";
import SolveExam from "../components/SolveExam";
import Loading from "../components/ui/Loading";
import EditProfile from "../components/EditProfile";
import ReportProblem from "../components/ReportProblem";
import CC from "../components/CC";
import Ratings from "../components/Ratings";
import Accordion from "../components/Subtitle";
import SearchCourse from "../components/SearchCourse";
import CreateCourseModal from "../components/CreateCourseModal";
import SubtitlesAcc from "../components/SubtitlesAcc";
import SubtitleVideo from "../components/SubtitleVideo";
import ReviewCard from "../components/ReviewCard";
import CreateSubtitleModal from "../components/CreateSubtitleModal";
import CreateVideoModal from "../components/CreateVideoModal";
import CreateExamModal from "../components/CreateExamModal";
import Problem from "../components/Problems/Problem";
import ReviewsAndRatings from "../components/ReviewsAndRatings";
import PromotionModal from "../components/PromotionModal";
import CountriesComp from "../components/CountriesComp";
import Discount from "../components/Discount/Discount";
import AcceptContract from "../components/AcceptContract";

// import HeaderTest from "../components/Header/headerTest";
function Start() {
  const params = new URLSearchParams(window.location.search);
  const courseId = params.get("courseId");
  const [subs, setSubs] = useState([]);
  window.location.href = "/welcome";
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8000/course?courseId=${courseId}`)
  //     .then((res) => {
  //       console.log(res.data);
  //       setSubs(res.data.subtitles);
  //     });
  // }, []);
  return (
    <>
      {/* <AcceptContract /> */}
      {/* <Discount /> */}
      {/* <ReviewsAndRatings /> */}
      {/* <CountriesComp /> */}
      {/* <PromotionModal /> */}
      {/* <ReviewsAndRatings /> */}
      {/* <Problem /> */}
      {/* <Ratings /> */}
      {/* <CreateExamModal /> */}
      {/* <CreateVideoModal /> */}
      {/* <CreateSubtitleModal /> */}
      {/* <ReviewCard /> */}
      {/* <SubtitleVideo /> */}
      {/* <SubtitlesAcc /> */}
      {/* <SearchCourse /> */}
      {/* <CreateCourseModal /> */}
      {/* <Accordion subtitles={subs} /> */}
      {/* <Rating /> */}
      {/* <EditProfile /> */}
      {/* <ReportProblem /> */}
      {/* <CC  /> */}
      {/* <Loading /> */}
      {/* <SolveExam /> */}
      {/* <CreateExam /> */}
      {/* <Search />*/}
      {/* <NestedModal /> */}
      {/* <CourseTest /> */}
      {/* <HorizontalCourseList /> */}
      {/* <SRCourse /> */}
      {/* <section>
        <h1>Select Country</h1>
        {<CountryList />}
      </section> */}
    </>
  );
}

export default Start;
