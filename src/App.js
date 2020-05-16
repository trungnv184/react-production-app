import React from "react";
import classes from "./App.module.css";
import Layout from "./Hocs/Layout/Layout";
import Products from "./Containers/Products/Product";

const App = () => {
  return (
    <div className={classes.App}>
      <Layout>
        <Products />
      </Layout>
    </div>
  );
};

export default App;
