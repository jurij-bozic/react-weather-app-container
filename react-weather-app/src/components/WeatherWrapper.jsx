import React, { useEffect, useState } from "react";
import { SearchComponent } from "./SearchComponent"; 
import { CurrentWeather } from "./CurrentWeather";
import { useHistory } from "../hooks/useHistory";
import "../WeatherStyle.css";
import useDebounce from "../hooks/useDebounce";
import { useWeather } from "../hooks/useWeatherApi";

export const WeatherWrapper = () => {
    const { history, modifyHistory } = useHistory();
    const [currentLocation, setCurrentLocation] = useState('');
    const [visibleDropdown, setVisibleDropDown] = useState(false);
    const debouncedCurrentLocation = useDebounce(currentLocation, 1500);
    const { isLoading, currentWeather, isError, errorMsg } = useWeather(debouncedCurrentLocation);

    const handleModifyLocation = (location) => {
        setCurrentLocation(location);
    }

      useEffect(() => {
        if (currentLocation) {
            // save into localStorage for search suggestions
            modifyHistory(currentLocation);
        }
      }, [debouncedCurrentLocation]);

      useEffect(() => {
        // implementing simple 'outside click' logic
        window.addEventListener('click', (event) => {
            if (event.target.id !== 'test_input_unique') {
                setVisibleDropDown(false);
            }
        });
      }, [])


    return (
        <div className="container">
                <div className="grid-container">
                    <SearchComponent
                        modifyLocation={handleModifyLocation}
                        location={currentWeather.location}
                        data={currentWeather}
                        history={history}
                        visibleDropdown={visibleDropdown}
                        setVisibleDropDown={setVisibleDropDown}
                        isError={isError}
                        errorMsg={errorMsg}
                        isLoading={isLoading}
                    ></SearchComponent>
                    <CurrentWeather
                        data={currentWeather}
                    ></CurrentWeather>
                </div>
        </div>
    );
};