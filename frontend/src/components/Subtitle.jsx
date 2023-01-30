import classes from "./SubtitleAccordion.module.css";
import { React, useState } from "react";
import axios from "axios";
import { Card } from "@mui/material";
import Box from "@kiwicom/orbit-components/lib/Box";
import AddIcon from "@mui/icons-material/Add";
import CreateVideoModal from "./CreateVideoModal";
import CreateExam from "./CreateExam";
import { useSnackbar } from "notistack";

function Accordion(props) {
  const { enqueueSnackbar } = useSnackbar();
  const arr = [1, 2, 3, 4];
  const [accordion, setActiveAccordion] = useState(-1);
  const [requiredVideos, setRequiredVideos] = useState(arr);
  const [requiredExams, setRequiredExams] = useState(arr);
  const [videoModal, setVideoModal] = useState(false);
  const [examModal, setExamModal] = useState(false);
  const [subtitleId, setSubtitleId] = useState("");

  const onClickSetVideoModal = (s) => {
    setSubtitleId(s);
    setVideoModal(true);
  };

  const handleClickVariant = (message, variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };
  const handleCallback3 = (childData) => {
    setExamModal(childData);
  };
  const handleCallback4 = (childData) => {
    setVideoModal(childData);
  };

  const onClickSetExamModal = (s) => {
    setSubtitleId(s);
    setExamModal(true);
  };

  const toggleAccordion = async (index, subtitle) => {
    if (index === accordion) {
      setActiveAccordion(-1);
    } else {
      setActiveAccordion(index);

      axios
        .get(`http://localhost:8000/subtitles?id=${subtitle}`)
        .then((res) => {
          setRequiredVideos(res.data.vids);
          setRequiredExams(res.data.exs);
          console.log(requiredExams);
        });
    }
  };
  // subid={props.subtitle._id}
  return (
    <>
      {examModal && (
        <CreateExam
          subid={subtitleId}
          onClick={handleCallback3}
          onClickExam={handleClickVariant}
        />
      )}
      {videoModal && (
        <CreateVideoModal subid={subtitleId} onClick={handleCallback4} variant={handleClickVariant} />
      )}
      <div className={classes.body}>
        <div className={classes.container}>
          <div>
            <span
              className={classes.accordion__title}
              style={{ position: "relative", left: "15px" }}
            >
              {" "}
            </span>
          </div>
          <div className={classes.accordion__sub}>
            <Card style={{ maxWidth: "625px" }}>
              {props.subtitles.map((subtitle, index) => (
                <div
                  key={index}
                  onClick={() => toggleAccordion(index, subtitle._id)}
                >
                  <div className={classes.accordion__sub_heading}>
                    <h3 className={accordion === index ? "active" : ""}>
                      {subtitle.name}
                    </h3>
                  </div>
                  <div>
                    {accordion === index ? (
                      <>
                        {" "}
                        <span
                          style={{
                            position: "relative",
                            left: "585px",
                            bottom: "35px",
                          }}
                        >
                          {" "}
                          -{" "}
                        </span>
                      </>
                    ) : (
                      <>
                        <span
                          style={{
                            position: "relative",
                            left: "585px",
                            bottom: "35px",
                          }}
                        >
                          {" "}
                          +{" "}
                        </span>{" "}
                      </>
                    )}
                  </div>

                  <div hidden={accordion === index ? "" : "hidden"}>
                    {requiredVideos.map((videos) => (
                      <Box
                        background="redDark"
                        textAlign="center"
                        color="cloudLight"
                        padding="small"
                        maxWidth="600px"
                        spacing="large"
                        borderRadius="large"
                        margin-bottom="10px"
                      >
                        <Box margin-bottom="-20px" textAlign="left">
                          {videos.name}
                        </Box>

                        <a
                          href={videos.link}
                          style={{
                            color: "#fff",
                            position: "relative",
                            top: "-5px",
                            right: "-225px",
                          }}
                        >
                          {" "}
                          <br />{" "}
                        </a>
                      </Box>
                    ))}
                  </div>

                  {requiredExams && (
                    <div hidden={accordion === index ? "" : "hidden"}>
                      <Box
                        background="redDark"
                        textAlign="center"
                        color="cloudLight"
                        padding="small"
                        maxWidth="600px"
                        spacing="large"
                        borderRadius="large"
                        margin-bottom="10px"
                      >
                        <Box margin-bottom="-20px" textAlign="left">
                          Exam
                        </Box>
                        <Box textAlign="right">
                          <br />
                        </Box>
                      </Box>
                    </div>
                  )}
                  <div
                    hidden={accordion === index ? "" : "hidden"}
                    onClick={() => {
                      onClickSetVideoModal(subtitle._id);
                    }}
                  >
                    <Box
                      background="redLightHover"
                      textAlign="center"
                      color="black"
                      padding="small"
                      maxWidth="600px"
                      spacing="large"
                      borderRadius="large"
                      margin-bottom="10px"
                    >
                      <Box margin-bottom="-20px" textAlign="left">
                        <AddIcon sx={{ color: "black" }}></AddIcon>Add New Video
                      </Box>
                      <Box textAlign="right">
                        <br />
                      </Box>
                    </Box>
                  </div>
                  {!requiredExams && (
                    <div
                      hidden={accordion === index ? "" : "hidden"}
                      onClick={() => {
                        onClickSetExamModal(subtitle._id);
                      }}
                    >
                      <Box
                        background="redLightHover"
                        textAlign="center"
                        color="black"
                        padding="small"
                        maxWidth="600px"
                        spacing="large"
                        borderRadius="large"
                        margin-bottom="10px"
                      >
                        <Box margin-bottom="-20px" textAlign="left">
                          <AddIcon sx={{ color: "black" }}></AddIcon>Add New
                          Exam
                        </Box>
                        <Box textAlign="right">
                          <br />
                        </Box>
                      </Box>
                    </div>
                  )}
                </div>
              ))}
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accordion;
