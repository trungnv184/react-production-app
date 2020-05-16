import React from "react";
import Toolbar from "../../Components/UI/Toolbar/Toolbar";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Toolbar />
      <main style={{ margin: "0 auto" }}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
