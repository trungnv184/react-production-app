import React from "react";
import classes from "./Button.module.css";
import * as Constants from "../../../Share/Constants/Constant";
import PropTypes from "prop-types";

const Button = (props) => {
  const { isActive, changeStatus } = props;
  const buttonClasses = [classes.Button];

  if (isActive) {
    buttonClasses.push(classes.Active);
  }

  const title = isActive ? Constants.FAVORITE_TEXT : Constants.UNFAVORITE_TEXT;

  const onClickHandler = () => {
    console.log("click on", changeStatus);
    changeStatus();
  };
  return (
    <button className={buttonClasses.join(" ")} onClick={onClickHandler}>
      {title}
    </button>
  );
};

Button.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Button;
