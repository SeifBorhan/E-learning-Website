import Avatar from "@mui/material/Avatar";
import { blueGrey } from "@mui/material/colors";
import InstructorCourses from "../components/ui/InstructorCourses";

function Profile() {
  return (
    <>
      <Avatar sx={{ bgcolor: blueGrey[500] }}>SB</Avatar>
      <InstructorCourses />
    </>
  );
}

export default Profile;
