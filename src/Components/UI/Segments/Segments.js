import React from "react";
import classes from "./Segments.module.css";
import { useState } from "react";

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
          className={getActivedClasses(0)}
          onClick={() => setActivedIndex(0)}
        >
          All Products
        </button>
      </li>
      <li className={classes.SegmentItem}>
        <button
          className={getActivedClasses(1)}
          onClick={() => setActivedIndex(1)}
        >
          Favorite
        </button>
      </li>
    </ul>
  );
};

export default SegementsControl;
