import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <React.Fragment className={classes.Card}>props.children</React.Fragment>
  );
};

export default Card;
