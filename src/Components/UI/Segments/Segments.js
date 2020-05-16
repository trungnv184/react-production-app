import React from "react";
import classes from "./Segments.module.css";
import { useState } from "react";
import * as Constants from "../../../Share/Constants/Constant";

const SegementsControl = (props) => {
  const activedSegments = [classes.Button, classes.Active];
  const [activedIndex, setActivedIndex] = useState(0);

  const getActivedClasses = (segmentIndex) => {
    if (segmentIndex === activedIndex) {
      return activedSegments.join(" ");
    }

    return classes.Button;
  };

  return (
    <ul className={classes.Segments}>
      <li className={classes.SegmentItem}>
        <button
          className={getActivedClasses(Constants.SEGMENT_ALL_INDEX)}
          onClick={() => setActivedIndex(Constants.SEGMENT_ALL_INDEX)}
        >
          {Constants.SEGEMNT_ALL_TEXT}
        </button>
      </li>
      <li className={classes.SegmentItem}>
        <button
          className={getActivedClasses(Constants.SEGMENT_FAVORITE_TEXT)}
          onClick={() => setActivedIndex(Constants.SEGMENT_FAVORITE_TEXT)}
        >
          {Constants.SEGMENT_FAVORITE_TEXT}
        </button>
      </li>
    </ul>
  );
};

export default SegementsControl;
