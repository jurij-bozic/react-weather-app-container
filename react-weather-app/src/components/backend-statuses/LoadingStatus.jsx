import React, { ReactElement } from "react";
import "./StatusesStyle.css";

export const LoadingStatus = ({ children, isLoading }) => {
  return (
    <>
        {isLoading ? <div className="loader">Loading data . . .</div> : children}
    </>
  );
};

export default LoadingStatus;