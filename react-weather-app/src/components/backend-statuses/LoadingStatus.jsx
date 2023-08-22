import React, { ReactElement } from "react";
import { Circles } from "react-loader-spinner";
import "./StatusesStyle.css";

export const LoadingStatus = ({ children, isLoading }) => {
  return (
    <div>
        {isLoading ? <Circles
            height="50"
            width="50"
            color="#ec6e4c"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            /> 
          : children}
    </div>
  );
};

export default LoadingStatus;