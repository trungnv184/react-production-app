import React from "react";
import classes from "./ProductItem.module.css";
import Aux from "../../Hocs/Aux/Aux";

const ProductItem = ({ name, description }) => {
  console.log("[ProductItem]", name);

  return (
    <Aux>
      <h3 className={classes.Title}>{name}</h3>
      <p className={classes.description}>{description}</p>
    </Aux>
  );
};

export default React.memo(ProductItem);
