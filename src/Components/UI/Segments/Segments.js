import React from "react";
import classes from "./Segments.module.css";
import * as Constants from "../../../Share/Constants/Constant";
import { NavLink } from "react-router-dom";

const SegementsControl = (props) => {
  return (
    <ul className={classes.Segments}>
      <li className={classes.SegmentItem}>
        <NavLink to="/" activeClassName={classes.active} exact>
          {Constants.SEGEMNT_ALL_TEXT}
        </NavLink>
      </li>
      <li className={classes.SegmentItem}>
        <NavLink to="/favorite" activeClassName={classes.active}>
          {Constants.SEGMENT_FAVORITE_TEXT}
        </NavLink>
      </li>
    </ul>
  );
};

export default SegementsControl;
