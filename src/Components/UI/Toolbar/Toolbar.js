import React from "react";
import SegementsControl from "../Segments/Segments";
import classes from "./Toolbar.module.css";

const Toolbar = (prop) => {
  return (
    <header className={classes.Header}>
      <SegementsControl />
    </header>
  );
};

export default Toolbar;
