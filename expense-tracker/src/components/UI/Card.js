import "./Card.css";

const Card = (props) => {
  //takes in the styling of every other child className
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
