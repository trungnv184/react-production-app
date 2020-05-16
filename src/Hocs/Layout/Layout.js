import React from "react";
import Toolbar from "../../Components/UI/Toolbar/Toolbar";
import Aux from "../Aux/Aux";

const Layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      <main style={{ margin: "0 auto" }}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
