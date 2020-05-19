import React from "react";
import PropTypes from "prop-types";
import Card from "../UI/Card/Card";
import classes from "./ProductCard.module.css";
import Button from "../UI/Button/Button";
import ProductItem from "../ProductItem/ProductItem";

const ProductCard = (props) => {
  const { product, setFavorite } = props;

  console.log("PRODUCT ITEM RENDER");

  return (
    <div className={classes.ProductItem}>
      <Card>
        <ProductItem name={product.name} description={product.description} />
        <Button isActive={product.isFavorited} changeStatus={setFavorite} />
      </Card>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isFavorited: PropTypes.bool,
  }),
  setFavorite: PropTypes.func,
};

export default ProductCard;
