import React, { useState, useCallback } from "react";
import * as Constant from "../Share/Constants/Constant";

export const ProductContext = React.createContext({
  products: [],
  toggleProduct: (id) => {},
  filterFavoriteProducts: () => {},
  fetchAllProducts: () => {},
});

export const ProductProvider = (props) => {
  const [productsList, setProductsList] = useState(Constant.PRODUCT_MOCK_DATA);
  const onToggleProduct = useCallback(
    (productId) => {
      const currentList = [...productsList];
      const productFoundIndex = currentList.findIndex(
        (product) => product.id === productId
      );
      const currentStatus = currentList[productFoundIndex].isFavorited;
      if (productFoundIndex >= 0) {
        currentList[productFoundIndex].isFavorited = !currentStatus;
      }
      setProductsList(currentList);
    },
    [productsList, setProductsList]
  );

  const onFilterFavoriteProducts = useCallback(() => {
    setProductsList((prevList) => prevList.filter((p) => p.isFavorited));
  }, [setProductsList]);

  console.log("ProductProvider Start");

  return (
    <ProductContext.Provider
      value={{
        products: productsList,
        toggleProduct: onToggleProduct,
        filterFavoriteProducts: onFilterFavoriteProducts,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
