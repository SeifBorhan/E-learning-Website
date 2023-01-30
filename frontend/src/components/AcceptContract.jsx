import React from "react";
import axios from "axios";
import styles from "./accept-contract.module.css";
import { useSnackbar } from "notistack";

const AcceptContract = (props) => {
  const params = new URLSearchParams(window.location.search);
  const instId = params.get("id");

  const postData = async () => {
    await axios
      .post(`http://localhost:8000/acceptContract?id=${instId}`, {})
      .then((res) => {
        // window.location.href = `/instructorcourseoutline?courseId=${courseId}`;
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
        <div className={styles["contract-container4"]}>
          <div className={styles["contract-ghost-pressed"]}>
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
