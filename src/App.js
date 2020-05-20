import React, { Suspense } from "react";
import classes from "./App.module.css";
import Layout from "./Hocs/Layout/Layout";
import { Switch, Route } from "react-router-dom";
import Spinner from "./Components/UI/Spinner/Spinner";
const Products = React.lazy(() => import("./Containers/Products/Product"));
const FavoriteComp = React.lazy(() =>
  import("./Containers/Fav/FavoriteProduct")
);
const App = () => {
  return (
    <div className={classes.App}>
      <Layout>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Suspense fallback={<Spinner />}>
                <Products />
              </Suspense>
            )}
          ></Route>
          <Route
            path="/favorite"
            exact
            render={() => (
              <Suspense fallback={<Spinner />}>
                <FavoriteComp />
              </Suspense>
            )}
          ></Route>
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
