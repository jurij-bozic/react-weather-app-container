import React, { useEffect, useState } from "react";
import { ErrorStatus } from "./backend-statuses/ErrorStatus";
import { LoadingStatus } from "./backend-statuses/LoadingStatus"
import "../WeatherStyle.css";

export const SearchComponent = ({ 
  modifyLocation, 
  location, 
  data, 
  history, 
  visibleDropdown, 
  setVisibleDropDown, 
  isError, 
  errorMsg, 
  isLoading}) => {
    const [inputValue, setInputValue] = useState('');
    const handleDropdown = () => {
      if (true) {
        setVisibleDropDown(true);
      }
    };

    useEffect(() => {
      setVisibleDropDown(false);
      modifyLocation(inputValue);
    }, [inputValue]);


    return (
      <div className="search-component">
        <LoadingStatus isLoading={isLoading}>
          <div className="location">
            <label className="city">
            <img width="150" src={"https://openweathermap.org/img/wn/" + data.icon + "@2x.png"} alt="img" /></label>
            <br />
            <ErrorStatus isError={isError} errorMsg={errorMsg}>
              <em>{location}</em> 
            </ErrorStatus>
          </div>
        </LoadingStatus>
        <div className="search-bar">
          <div>
            <input
              id="test_input_unique"
              className="input"
              placeholder="Enter your location"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.currentTarget.value);
              }}
              onClick={handleDropdown}
              autoComplete="off"
            ></input>
            {visibleDropdown ? 
             <div className="dropdown-container">
                 <ul onClick={(item) => {setInputValue(item.target.textContent)}} className="drop-down">
                {history && history.length > 0 ? history.map(item => <li className="drop-down-item" key={item}>{item}</li>) : <></>}
              </ul>
             </div>
              : <></>
            }
          </div>
        </div>        
      </div>
    );

};