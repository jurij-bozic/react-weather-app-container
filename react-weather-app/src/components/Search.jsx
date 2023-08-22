import React, { useEffect, useState } from "react";
import { ErrorStatus } from "./backend-statuses/ErrorStatus";
import "./WeatherStyle.scss";

export const Search = ({ modifyLocation, location, data, history, visibleDropdown, setVisibleDropDown, isError, errorMsg}) => {
  // const { history, modifyHistory } = useHistory();
    const [inputValue, setInputValue] = useState('');
    const getDateInFormat = () => {
      const dateSelection = new Date(data.dt * 1000);
      let hour = dateSelection.toLocaleString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
      });
      let date = dateSelection.toLocaleString("en-GB", {
          day: "numeric",
          weekday: "long",
          month: "long",
        });
      let year = dateSelection.toLocaleString("en-GB", {
          year: "numeric",
      });

        return `${hour} ${date} ${year}`;
    };

    const handleDropdown = () => {
      if (true) {
        setVisibleDropDown(true);
      }
    };

    // useEffect(() => {
    //   console.log(history)
    // }, [history]);

    useEffect(() => {
      setVisibleDropDown(false);
      modifyLocation(inputValue);
    }, [inputValue]);


    return (
      <>
        <div className="location" style={{ textAlign: "center" }}>
          <label className="city">
          <img width="150" src={"https://openweathermap.org/img/wn/" + data.icon + "@2x.png"} alt="img" /></label>
          <br />
          <ErrorStatus isError={isError} errorMsg={errorMsg}>
            <em>{location}</em> 
          </ErrorStatus>
        </div>
        <div className="search">
          <input
            id="test_input_unique"
            className="input"
            placeholder="Enter your location"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.currentTarget.value);
            }}
            onClick={handleDropdown}
          ></input>
          {visibleDropdown ? 
            <ul onClick={(item) => {setInputValue(item.target.textContent)}} style={{ listStyleType: "none", border: "solid 0.5px"} }>
              {/* <li style={{ width: "100%", textAlign: "end"}} onClick={(e) => setVisibleDropDown(false)}>x</li> */}
              {history && history.length > 0 ? history.map(item => <li key={item}>{item}</li>) : <></>}
            </ul>
            : <></>
          }
        </div>        
      </>
    );

};