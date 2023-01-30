import React from "react";
import "./WavingText.scss";

export const WavingText = (props) => {
  return (
    <div>
      {" "}
      <div class="container">
        <h2>{props.name}</h2>
        <h2>{props.name}</h2>
      </div>
    </div>
  );
};
