import React from "react";
import axios from "axios";
import styles from "../components/accept-contract.module.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { ariaHidden } from "@mui/material";

const AcceptContract = (props) => {
  const params = new URLSearchParams(window.location.search);
  const instId = params.get("id");
  console.log(instId);
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (message, variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };
  const noEntry = () => {
    handleClickVariant("Access Denied", "error");
  };
  const postData = async () => {
    await axios
      .post(`http://localhost:8000/acceptContract?id=${instId}`, {})
      .then((res) => {
        navigate("/welcome");
      });
  };

  return (
    <div className={styles["contract-container"]}>
      <div className={styles["contract-frame03privacy-t-o-s-screen"]}>
        <div className={styles["contract-container1"]}>
          <div className={styles["contract-navigation-default-icons"]}>
            <div className={styles["contract-center"]}>
              <span className={styles["contract-text"]}>
                <span>Terms &amp; Conditions</span>
              </span>
            </div>
          </div>
        </div>
        <div className={styles["contract-container2"]}>
          <div className={styles["contract-group3"]}>
            <span className={styles["contract-text02"]}>
              <span>
                Your privacy is important to us. It is ACLademy&apos;s policy to
                respect your privacy regarding any information we may collect
                from you across our
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <a href="https://cancham.org.eg">website</a>
              <span>, and other sites we own and operate.</span>
              <br></br>
              <br></br>
              <span>
                Our policy is that we take 10% from the course price, and the
                rest which is 90% is given to you as a monthly salary based on
                the number of subscribers per course. If a course is refunded by
                a subscriber, the money debited to your salary will be deducted
                from you.
              </span>
              <br></br>
              <br></br>
              <span>
                We only retain collected information for as long as necessary to
                provide you with your requested service.
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </span>
            <span className={styles["contract-text12"]}>
              <span>Carefully Review Our Policy </span>
            </span>
          </div>
        </div>
        <div className={styles["contract-container3"]}>
          <div className={styles["contract-normal-primary"]} onClick={postData}>
            <span className={styles["contract-text14"]}>I agree with this</span>
          </div>
        </div>
        <div className={styles["contract-container4"]} onClick={noEntry}>
          <div
            className={styles["contract-ghost-pressed"]}
            onClick={handleClickVariant(
              "You cannot access the website unless you accept",
              "warning"
            )}
          >
            <span className={styles["contract-text15"]}>
              <span>Decline</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceptContract;
