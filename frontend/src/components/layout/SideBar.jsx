import classes from "./SideBar.module.css";

function SideBar(props) {
  return <div className={classes.sidebar}>{props.children}</div>;
}

export default SideBar;
