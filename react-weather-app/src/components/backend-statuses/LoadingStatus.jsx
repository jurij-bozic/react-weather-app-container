import React, { ReactElement } from "react";
import { Circles } from "react-loader-spinner";

export const LoadingStatus = ({ children, isLoading }) => {
  return (
    <div>
        {isLoading ? 
        <div className="loader">
          <Circles
            height="50"
            width="50"
            color="#ec6e4c"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            /> 
          </div>
          : children}
    </div>
  );
};

export default LoadingStatus;