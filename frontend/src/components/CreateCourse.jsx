import React from 'react'

import PropTypes from 'prop-types'

import './create-course.css'

const CreateCourse = (props) => {
  return (
    <div className="create-course-container">
      <div className="create-course-profile1">
        <div className="create-course-group23">
          <span className="create-course-text Title_PoppinsLarge">
            <span>{props.text}</span>
          </span>
        </div>
        <div className="create-course-bigoutline-default">
          <div className="create-course-container1">
            <div className="create-course-value">
              <span className="create-course-text02">
                <span>{props.text4}</span>
              </span>
            </div>
            <div className="create-course-label">
              <div className="create-course-frame89">
                <span className="create-course-text04">
                  <span>{props.text9}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="create-course-container2">
          <div className="create-course-bigoutline-default1"></div>
          <div className="create-course-label1">
            <div className="create-course-frame891">
              <span className="create-course-text06">{props.text3}</span>
            </div>
          </div>
          <div className="create-course-value1">
            <span className="create-course-text07">{props.text1}</span>
          </div>
        </div>
        <div className="create-course-bigoutline-default2">
          <div className="create-course-container3">
            <div className="create-course-value2">
              <span className="create-course-text08">
                <span>{props.text5}</span>
              </span>
            </div>
            <div className="create-course-label2">
              <div className="create-course-frame892">
                <span className="create-course-text10">
                  <span>{props.text10}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="create-course-bigoutline-select">
          <div className="create-course-container4">
            <div className="create-course-value3">
              <span className="create-course-text12">
                <span>{props.text6}</span>
              </span>
            </div>
            <div className="create-course-label3">
              <div className="create-course-frame893">
                <span className="create-course-text14">
                  <span>{props.text11}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="create-course-bigoutline-default3">
          <div className="create-course-container5">
            <div className="create-course-value4">
              <span className="create-course-text16">
                <span>{props.text7}</span>
              </span>
            </div>
            <div className="create-course-label4">
              <div className="create-course-frame894">
                <span className="create-course-text18">
                  <span>{props.text12}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="create-course-bigoutline-default4">
          <div className="create-course-container6">
            <div className="create-course-value5">
              <span className="create-course-text20">
                <span>{props.text8}</span>
              </span>
            </div>
            <div className="create-course-label5">
              <div className="create-course-frame895">
                <span className="create-course-text22">
                  <span>{props.text13}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <button className="create-course-button">
          <span className="create-course-text24">
            <span>{props.text2}</span>
          </span>
        </button>
        <div className="create-course-group71">
          <div className="create-course-bigoutline-default5">
            <div className="create-course-container7">
              <div className="create-course-value6">
                <span className="create-course-text26">
                  <span>{props.text14}</span>
                </span>
              </div>
              <div className="create-course-label6">
                <div className="create-course-frame896">
                  <span className="create-course-text28">
                    <span>{props.text15}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CreateCourse.defaultProps = {
  text: 'Create Course',
  text1: 'puerto_rico',
  text2: 'submit',
  text3: 'Subject',
  text4: 'Puerto Rico',
  text5: 'youremail@domain.com',
  text6: 'United States',
  text7: 'Female',
  text8: '45 New Avenue, New York',
  text9: 'Course Name',
  text10: 'Preview Video',
  text11: 'Price',
  text12: 'Year Of Upload',
  text13: 'Summary',
  text14: '              123-456-7890',
  text15: '                    Thumbnail',
}

CreateCourse.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
  text9: PropTypes.string,
  text10: PropTypes.string,
  text11: PropTypes.string,
  text12: PropTypes.string,
  text13: PropTypes.string,
  text14: PropTypes.string,
  text15: PropTypes.string,
}

export default CreateCourse
