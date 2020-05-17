import React from "react";
import classes from "./Button.module.css";
import * as Constants from "../../../Share/Constants/Constant";
import PropTypes from "prop-types";

const Button = (props) => {
  const { isFavorite } = props;
  const buttonClasses = [classes.Button];

  if (isFavorite) {
    buttonClasses.push(classes.Active);
  }

  const title = isFavorite
    ? Constants.FAVORITE_TEXT
    : Constants.UNFAVORITE_TEXT;

  return <button className={buttonClasses.join(" ")}>{title}</button>;
};

Button.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
};

export default Button;
