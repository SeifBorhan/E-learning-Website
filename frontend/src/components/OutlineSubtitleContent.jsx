import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export default function OutlineSubtitleContent(props) {
  return (
    <Card sx={{ maxWidth: 1320 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.video.name} (<PlayCircleIcon fontSize="xsmall" />{" "}
          {props.video.duration} min)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.video.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
