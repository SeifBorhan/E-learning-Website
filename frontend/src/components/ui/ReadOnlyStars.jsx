import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

function ReadOnlyStars(props) {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <div onClick={props.onClick}>
        {" "}
        <Rating
          name="half-rating-read"
          defaultValue={props.rate}
          precision={0.5}
          readOnly
        />
      </div>
    </Box>
  );
}

export default ReadOnlyStars;
