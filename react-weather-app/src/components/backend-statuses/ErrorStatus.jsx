import React, { ReactElement } from "react";

export const ErrorStatus = ({ children, isError, errorMsg }) => {
  return (
    <div>
        {isError ? <div className="error-container">{errorMsg}</div>
          : children}
    </div>
  );
};

export default ErrorStatus;