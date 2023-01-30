import classes from "./Card.module.css";

function Card(props) {
  return (
    <div
      className={classes.card}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}

export default Card;
