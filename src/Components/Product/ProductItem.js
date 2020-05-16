import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Card from "../UI/Card/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const { product } = props;

  useEffect(() => {
    console.log("PRODUCT ITEM  MOUNTED", product);
  }, [product]);

  return (
    <div className={classes.ProductItem}>
      <Card>
        <h3 className={classes.Title}>{product.name}</h3>
        <p className={classes.description}>{product.description}</p>
        <button className={classes.FavoriteButton}>Favorite</button>
      </Card>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isFavorited: PropTypes.bool,
  }),
};

export default ProductItem;
