import SideBar from "../layout/SideBar";
import Subtitle from "./Subtitle";

function SubtitleList(props) {
  return (
    <SideBar>
      {props.subtitles.map((subtitle) => (
        <Subtitle
          key={subtitle._id}
          id={subtitle._id}
          name={subtitle.name}
          duration={subtitle.duration}
        />
      ))}
    </SideBar>
  );
}

export default SubtitleList;
