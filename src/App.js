import React from "react";
import classes from "./App.module.css";
import Layout from "./Hocs/Layout/Layout";

const App = () => {
  return (
    <div className={classes.App}>
      <Layout>
        <p>Hello</p>
      </Layout>
    </div>
  );
};

export default App;
