import React from "react";
import "../index.scss";

const CoursePage = () => {
  return (
    <div className="video-page-container">
      <div className="video-page-container01">
        <div className="video-page-container02">
          <div className="video-page-container03"></div>
        </div>
        <div className="video-page-container04">
          <div className="video-page-container05">
            <h1 className="video-page-text">video Title</h1>
            <video
              src
              poster="https://play.teleporthq.io/static/svg/videoposter.svg"
              className="video-page-video"
            ></video>
            <div className="video-page-container06">
              <svg viewBox="0 0 1024 1024" className="video-page-icon">
                <path d="M512 128c0 0-263.936 227.84-411.435 351.232-8.661 7.851-15.232 19.285-15.232 32.768 0 23.595 19.072 42.667 42.667 42.667h85.333v298.667c0 23.595 19.072 42.667 42.667 42.667h128c23.595 0 42.667-19.115 42.667-42.667v-170.667h170.667v170.667c0 23.552 19.072 42.667 42.667 42.667h128c23.595 0 42.667-19.072 42.667-42.667v-298.667h85.333c23.595 0 42.667-19.072 42.667-42.667 0-13.483-6.571-24.917-16.341-32.768-146.475-123.392-410.325-351.232-410.325-351.232z"></path>
              </svg>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="video-page-link"
              >
                Home
              </a>
              <svg viewBox="0 0 1024 1024" className="video-page-icon2">
                <path d="M512 342v-172l342 342-342 342v-172h-342v-340h342z"></path>
              </svg>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="video-page-link1"
              >
                Subtitle
              </a>
              <svg viewBox="0 0 1024 1024" className="video-page-icon4">
                <path d="M512 342v-172l342 342-342 342v-172h-342v-340h342z"></path>
              </svg>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="video-page-link2"
              >
                Video Name
              </a>
            </div>
            <div className="video-page-container07">
              <div className="video-page-container08"></div>
            </div>
          </div>
          <div className="video-page-container09">
            <div className="video-page-container10">
              <span className="video-page-text1">
                Write something down for later?
              </span>
              <div className="video-page-container11">
                <input
                  type="text"
                  placeholder="Your notes here..."
                  className="input video-page-textinput"
                />
              </div>
              <button className="button video-page-button">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
