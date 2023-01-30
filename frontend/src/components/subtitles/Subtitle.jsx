import { useState } from "react";
import Card from "../ui/Card";
import axios from "axios";

function Subtitle(props) {
  const [videos, setVideos] = useState([]);
  const [exam, setExam] = useState([]);
  const [clicked, setClicked] = useState(false);
  const onClick = async () => {
    if (clicked) {
      setClicked(false);
    } else {
      await axios
        .get(`http://localhost:8000/subtitles?id=${props.id}`)
        .then((res) => {
          setClicked(true);
          setVideos(res.data.vids);
          setExam(res.data.exs);
        });
    }
  };

  const onClick2 = async () => {};
  const onClick3 = async () => {
    await axios.get(`http://localhost:8000/exam?id=${props.id}`).then((res) => {
      setClicked(true);
      setVideos(res.data.vids);
      setExam(res.data.exs);
    });
  };

  return (
    <>
      <Card>
        <div>Subtitles</div>
      </Card>
      <Card onClick={onClick}>
        <div>
          <p>{props.name}</p>
          <p>{props.duration}</p>
        </div>
      </Card>
      {clicked && (
        <p>
          {videos.map((video) => (
            <>
              <Card onClick={onClick2}>
                <div>
                  <p>{video.name}</p>
                </div>
              </Card>
            </>
          ))}{" "}
          <Card onClick={onClick3}>
            <div>
              <p>{exam._id}</p>
            </div>
          </Card>
        </p>
      )}
    </>
  );
}

export default Subtitle;
