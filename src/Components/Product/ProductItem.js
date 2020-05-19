import React from "react";
import PropTypes from "prop-types";
import Card from "../UI/Card/Card";
import classes from "./ProductItem.module.css";
import Button from "../UI/Button/Button";

const ProductItem = (props) => {
  const { product, setFavorite } = props;

  console.log("PRODUCT ITEM RENDER");

  return (
    <div className={classes.ProductItem}>
      <Card>
        <h3 className={classes.Title}>{product.name}</h3>
        <p className={classes.description}>{product.description}</p>
        <Button isActive={product.isFavorited} changeStatus={setFavorite} />
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
  setFavorite: PropTypes.func,
};

export default ProductItem;
