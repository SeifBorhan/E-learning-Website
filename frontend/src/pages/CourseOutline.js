import React, { useEffect, useState } from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import TestimonialCard31 from "../components/TestimonalCard31";
import axios from "axios";
import { useSnackbar } from "notistack";


import "../index.scss";
import {
  amber,
  blue,
  deepOrange,
  green,
  red,
  yellow,
} from "@mui/material/colors";
import Footer from "../components/ui/Footer";
import CC from "../components/CC";

const CourseOutline = (props) => {
  const [course, setCourse] = useState([0]);
  const [subtitles, setSubtitles] = useState([0]);
  const [instructor, setInstructor] = useState([0]);
  const [ratings, setRatings] = useState([0]);
  const [trainee, setTrainee] = useState([0]);
  const [creditCardFlag, setCreditCardFlag] = useState(false);
  const [isLoading, setLoading] = useState(true);
  let disc;
  let newPrice;
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (message, variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };
  

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get("courseId");

    const getCourse = async () => {
      await axios
        .get(`http://localhost:8000/course?courseId=${courseId}`)
        .then((res) => {
          setCourse(res.data.courses);
          setSubtitles(res.data.courses.subtitles);
          setInstructor(res.data.courses.instructorID);
          setRatings(res.data.ratings);
          setLoading(false);
        });
    };
    getCourse();
  }, []);

  const buyNowHandle = () => {
    setCreditCardFlag(true);
  };

  if (isLoading == true) return null;
  else
    return (
      <>
        <div className="course-outline-container">
          {creditCardFlag && <CC course={course} />}
          <div className="course-outline-container01">
            <div className="course-outline-frame1">
              <span className="course-outline-text">
                <span>{course.summary}</span>
                <br></br>
              </span>

              <iframe
                width="928"
                height="522"
                src={course.previewVideo}
                title="Build and Deploy a Fully Responsive Website with Modern UI/UX in React JS with Tailwind"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="course-outline-video"
              ></iframe>
              <span className="course-outline-text004" onClick={buyNowHandle}>
                <span className="course-outline-text005">
                  Buy Now for {newPrice}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
              </span>
              <iframe
                width="928"
                height="522"
                src={course.previewVideo}
                title="Build and Deploy a Fully Responsive Website with Modern UI/UX in React JS with Tailwind"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="course-outline-video"
              ></iframe>
              <span className="course-outline-text004">
                <span className="course-outline-text005">
                  Buy Now for {newPrice}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <span>{disc}</span>
              </span>
              <div className="iconVideo">
                <YouTubeIcon sx={{ color: deepOrange[500], fontSize: 17 }} />
              </div>
              <span className="course-outline-text007">
                <span>
                  Get {subtitles.length} lessons in {course.totalHours} hours
                </span>
              </span>
              <span className="course-outline-text009">
                <span>Daily guided exercises</span>
              </span>
              <span className="course-outline-text011">
                <span>Access to 50k+ community</span>
              </span>
              <span className="course-outline-text013">
                <span>Regular expert feedback</span>
              </span>
              <span className="course-outline-text015">
                {instructor.firstName + " " + instructor.lastName}
              </span>
              <div className="iconQuestion">
                <QuestionAnswerIcon sx={{ color: blue[700] }} />
              </div>
              <div className="iconCommunity">
                <Diversity3Icon sx={{ color: yellow[700] }} />
              </div>
              <div className="iconFeedback">
                <ThumbUpAltIcon sx={{ color: green[700] }} />
              </div>
              <div className="course-outline-group1"></div>
              <div className="course-outline-box2"></div>
              <div className="course-outline-box4"></div>
              <div className="course-outline-circle"></div>
              <div className="course-outline-box5"></div>
              <div className="course-outline-box3"></div>
              <img
                alt="image"
                src={instructor.photo}
                className="course-outline-image"
              />
              <div className="course-outline-box1"></div>
              <span className="course-outline-text016">By</span>
              <div className="course-outline-text017">{instructor.bio}</div>
              <h1 className="course-outline-text025">{course.courseName}</h1>
              <div className="course-outline-buy-now-small">
                <span className="course-outline-text026">
                  <span className="course-outline-text027">
                    Buy Now for{" "}
                    {parseInt(course.price) -
                      parseInt(course.price) *
                        (course.discount != 1 ? course.discount : 0)}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: " ",
                      }}
                    />
                  </span>
                  {/* <span>{disc}</span> */}
                </span>
              </div>
            </div>
          </div>
          <div className="course-outline-container02">
            <div className="course-outline-frame2">
              <div className="course-outline-group16">
                <div>
                  <iframe
                    width="928"
                    height="522"
                    src={course.previewVideo}
                    title="Build and Deploy a Fully Responsive Website with Modern UI/UX in React JS with Tailwind"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    className="firstVideo"
                  ></iframe>
                </div>
                <span className="course-outline-text029">
                  <span>What is WebFlow?</span>
                </span>
              </div>
              <div className="course-outline-group18">
                <div>
                  <iframe
                    width="928"
                    height="522"
                    src={course.previewVideo}
                    title="Build and Deploy a Fully Responsive Website with Modern UI/UX in React JS with Tailwind"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    className="firstVideo"
                  ></iframe>
                </div>
                <span className="course-outline-text031">
                  <span>High Paying Clients</span>
                </span>
              </div>
              <div className="course-outline-group17">
                <div>
                  <iframe
                    width="928"
                    height="522"
                    src={course.previewVideo}
                    title="Build and Deploy a Fully Responsive Website with Modern UI/UX in React JS with Tailwind"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    className="firstVideo"
                  ></iframe>
                </div>
                <span className="course-outline-text033">
                  <span>Consistency</span>
                </span>
              </div>
            </div>
            <h1 className="course-outline-text035">Course Highlights</h1>
          </div>
          <div className="course-outline-container03">
            <div className="course-outline-frame3">
              <div className="course-outline-container04">
                <span className="course-outline-text036">
                  <span>Secrets of Good Design</span>
                </span>
                <span className="course-outline-text038">
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                  </span>
                </span>
                <span className="course-outline-text040">1</span>
              </div>
              <div className="course-outline-container05">
                <span className="course-outline-text041">
                  <span>Practice Design Like a Pro</span>
                </span>
                <span className="course-outline-text043">
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                  </span>
                </span>
                <span className="course-outline-text045">2</span>
              </div>
              <div className="course-outline-container06">
                <span className="course-outline-text046">5</span>
                <span className="course-outline-text047">
                  <span>Freelancing</span>
                </span>
                <span className="course-outline-text049">
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                  </span>
                </span>
              </div>
              <div className="course-outline-container07">
                <span className="course-outline-text051">6</span>
                <span className="course-outline-text052">
                  <span>Advanced</span>
                </span>
                <span className="course-outline-text054">
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                  </span>
                </span>
              </div>
              <div className="course-outline-container08">
                <span className="course-outline-text056">7</span>
                <span className="course-outline-text057">
                  <span>Figma to Webflow</span>
                </span>
                <span className="course-outline-text059">
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                  </span>
                </span>
              </div>
              <div className="course-outline-container09">
                <span className="course-outline-text061">3</span>
                <span className="course-outline-text062">
                  <span>Webflow Development</span>
                </span>
                <span className="course-outline-text064">
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                  </span>
                </span>
              </div>
              <div className="course-outline-container10">
                <span className="course-outline-text066">4</span>
                <span className="course-outline-text067">
                  <span>
                    Client Project
                    <span
                      dangerouslySetInnerHTML={{
                        __html: " ",
                      }}
                    />
                  </span>
                </span>
                <span className="course-outline-text069">
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                  </span>
                </span>
              </div>
            </div>
            <div className="course-outline-group1"></div>
            <div className="course-outline-box2"></div>
            <div className="course-outline-box4"></div>
            <div className="course-outline-circle"></div>
            <div className="course-outline-box5"></div>
            <div className="course-outline-box3"></div>
            <img
              alt="image"
              src={instructor.photo}
              className="course-outline-image"
            />
            <div className="course-outline-box1"></div>
            <span className="course-outline-text016">By</span>
            <div className="course-outline-text017">{instructor.bio}</div>
            <h1 className="course-outline-text025">{course.courseName}</h1>
            <div className="course-outline-buy-now-small">
              <span className="course-outline-text026" onClick={buyNowHandle}>
                <span className="course-outline-text027">
                  Buy Now for{" "}
                  {parseInt(course.price) -
                    parseInt(course.price) *
                      (course.discount != 1 ? course.discount : 0)}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <span></span>
              </span>
            </div>
          </div>
          <div className="course-outline-container11">
            <div className="course-outline-group14">
              <div className="course-outline-group5">
                <span className="course-outline-text075">
                  <span>Will Vako Shvili be teaching this course?</span>
                </span>
                <div className="course-outline-arrow"></div>
              </div>
              <div className="course-outline-group7">
                <span className="course-outline-text077">
                  <span>Who is this course for?</span>
                </span>
                <div className="course-outline-arrow1"></div>
              </div>
              <div className="course-outline-group6">
                <span className="course-outline-text079">
                  <span>Is the course theoretical?</span>
                </span>
                <div className="course-outline-arrow2"></div>
              </div>
              <div className="course-outline-group8">
                <span className="course-outline-text081">
                  <span>For how long will the course be accessible?</span>
                </span>
                <div className="course-outline-arrow3"></div>
              </div>
              <div className="course-outline-group10">
                <span className="course-outline-text083">
                  <span>Can I watch this course offline?</span>
                </span>
                <div className="course-outline-arrow4"></div>
              </div>
              <div className="course-outline-group11">
                <span className="course-outline-text085">
                  <span>Which language is the course in?</span>
                </span>
                <div className="course-outline-arrow5"></div>
              </div>
              <div className="course-outline-group12">
                <span className="course-outline-text087">
                  <span>Can I watch the course on my phone or my laptop?</span>
                </span>
                <div className="course-outline-arrow6"></div>
              </div>
              <div className="course-outline-group13">
                <span className="course-outline-text089">
                  <span>How long is the course?</span>
                </span>
                <div className="course-outline-arrow7"></div>
              </div>
              <div className="course-outline-group9">
                <span className="course-outline-text091">
                  <span>
                    Is there any recurring charge that I need to pay to access
                    the videos?
                  </span>
                </span>
                <div className="course-outline-arrow8"></div>
              </div>
            </div>
            <h1 className="course-outline-text093">COURSE OUTLINE</h1>
          </div>
          <h1 className="course-outline-text035">Course Highlights</h1>
        </div>
        <div className="course-outline-container03">
          <div className="course-outline-frame3">
            <div className="course-outline-container04">
              <span className="course-outline-text036">
                <span>Secrets of Good Design</span>
              </span>
              <span className="course-outline-text038">
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </span>
              </span>
              <span className="course-outline-text040">1</span>
            </div>
            <div className="course-outline-container05">
              <span className="course-outline-text041">
                <span>Practice Design Like a Pro</span>
              </span>
              <span className="course-outline-text043">
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </span>
              </span>
              <span className="course-outline-text045">2</span>
            </div>
            <div className="course-outline-container06">
              <span className="course-outline-text046">5</span>
              <span className="course-outline-text047">
                <span>Freelancing</span>
              </span>
              <span className="course-outline-text049">
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </span>
              </span>
            </div>
            <div className="course-outline-container07">
              <span className="course-outline-text051">6</span>
              <span className="course-outline-text052">
                <span>Advanced</span>
              </span>
              <span className="course-outline-text054">
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </span>
              </span>
            </div>
            <div className="course-outline-container08">
              <span className="course-outline-text056">7</span>
              <span className="course-outline-text057">
                <span>Figma to Webflow</span>
              </span>
              <span className="course-outline-text059">
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </span>
              </span>
            </div>
            <div className="course-outline-container09">
              <span className="course-outline-text061">3</span>
              <span className="course-outline-text062">
                <span>Webflow Development</span>
              </span>
              <span className="course-outline-text064">
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </span>
              </span>
            </div>
            <div className="course-outline-container10">
              <span className="course-outline-text066">4</span>
              <span className="course-outline-text067">
                <span>
                  Client Project
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
              </span>
              <span className="course-outline-text069">
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </span>
              </span>
            </div>
          </div>
          <h1 className="course-outline-text071">What You Will Learn</h1>
          <div className="course-outline-group19">
            <span className="course-outline-text072">
              <span className="course-outline-text073">
                Buy Now for{" "}
                {parseInt(course.price) -
                  parseInt(course.price) *
                    (course.discount != 1 ? course.discount : 0)}
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <span></span>
            </span>
          </div>
        </div>
        <div className="course-outline-container11">
          <div className="course-outline-group14">
            <div className="course-outline-group5">
              <span className="course-outline-text075">
                <span>Will Vako Shvili be teaching this course?</span>
              </span>
              <div className="course-outline-arrow"></div>
            </div>
            <div className="course-outline-group7">
              <span className="course-outline-text077">
                <span>Who is this course for?</span>
              </span>
              <div className="course-outline-arrow1"></div>
            </div>
            <div className="course-outline-group6">
              <span className="course-outline-text079">
                <span>Is the course theoretical?</span>
              </span>
              <div className="course-outline-arrow2"></div>
            </div>
            <div className="course-outline-group8">
              <span className="course-outline-text081">
                <span>For how long will the course be accessible?</span>
              </span>
              <div className="course-outline-arrow3"></div>
            </div>
            <div className="course-outline-group10">
              <span className="course-outline-text083">
                <span>Can I watch this course offline?</span>
              </span>
              <div className="course-outline-arrow4"></div>
            </div>
            <div className="course-outline-group11">
              <span className="course-outline-text085">
                <span>Which language is the course in?</span>
              </span>
              <div className="course-outline-arrow5"></div>
            </div>
            <div className="course-outline-group12">
              <span className="course-outline-text087">
                <span>Can I watch the course on my phone or my laptop?</span>
              </span>
              <div className="course-outline-arrow6"></div>
            </div>
            <div className="course-outline-group13">
              <span className="course-outline-text089">
                <span>How long is the course?</span>
              </span>
              <div className="course-outline-arrow7"></div>
            </div>
            <div className="course-outline-group9">
              <span className="course-outline-text091">
                <span>
                  Is there any recurring charge that I need to pay to access the
                  videos?
                </span>
              </span>
              <div className="course-outline-arrow8"></div>
            </div>
          </div>
          <h1 className="course-outline-text093">COURSE OUTLINE</h1>
        </div>
        <div className="course-outline-container12">
          <div className="course-outline-testimonial">
            <h1 className="course-outline-text094">Our Students Speak</h1>
            <div className="course-outline-container13">
              <div className="testimonal">
                <div className="testimonal">
                  <TestimonialCard31
                    picture_src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxtYW58ZW58MHx8fHwxNjI2NDUyMDM1&amp;ixlib=rb-1.2.1&amp;h=1200"
                    rootClassName="rootClassName"
                    rating={ratings[6]}
                  ></TestimonialCard31>
                </div>
                <div className="testimonal">
                  <TestimonialCard31
                    picture_src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxtYW58ZW58MHx8fHwxNjI2NDUyMDM1&amp;ixlib=rb-1.2.1&amp;h=1200"
                    rootClassName="rootClassName"
                    rating={ratings[9]}
                  ></TestimonialCard31>
                </div>
                <div className="testimonal">
                  <TestimonialCard31
                    picture_src="https://images.unsplash.com/photo-1546456073-ea246a7bd25f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fGJsYWNrJTIwbWFufGVufDB8fHx8MTYyNjQ1MjAwOA&amp;ixlib=rb-1.2.1&amp;h=1200"
                    rootClassName="rootClassName"
                    rating={ratings[10]}
                  ></TestimonialCard31>
                </div>
              </div>
            </div>
          </div>
          <div className="course-outline-container14">
            <Footer />
          </div>
        </div>
        <div className="course-outline-container14">
          <Footer />
        </div>
      </>
    );
};

export default CourseOutline;
