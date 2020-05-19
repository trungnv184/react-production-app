import React, { useState, useEffect } from "react";
import classess from "./Spinner.module.css";

const Spinner = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return <div className={loading ? classess.Loader : ""}>Loading data ...</div>;
};

export default Spinner;
