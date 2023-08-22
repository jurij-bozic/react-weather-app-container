import React, { ReactElement } from "react";
import "./StatusesStyle.css";

export const ErrorStatus = ({ children, isError, errorMsg }) => {
  return (
    <div>
        {isError ? <div>{errorMsg}</div>
          : children}
    </div>
  );
};

export default ErrorStatus;