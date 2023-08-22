import React, { useEffect, useState } from "react";
import { Search } from "./Search"; 
import { CurrentWeather } from "./CurrentWeather";
import { LoadingStatus } from "./backend-statuses/LoadingStatus";
import { DefaultCurrentWeather } from "../data-models/WeatherModel";
import { useHistory } from "../hooks/useHistory";
import "./WeatherStyle.scss";
import useDebounce from "../hooks/useDebounce";
import { useWeather } from "../hooks/useWeatherApi";

export const WeatherWrapper = () => {
    const { history, modifyHistory } = useHistory();
    const [currentLocation, setCurrentLocation] = useState('');
    const [visibleDropdown, setVisibleDropDown] = useState(false);
    const debouncedCurrentLocation = useDebounce(currentLocation, 2000);
    const { isLoading, location, currentWeather, isError, errorMsg } = useWeather(debouncedCurrentLocation);

    const handleModifyLocation = (location) => {
        setCurrentLocation(location);
    }

    // useEffect(() => {
    //     if (currentLocation) {
    //         // debounceWeather('whoaaaa');
    //         modifyHistory(currentLocation);
    //     }
    //   }, [currentLocation]);

      useEffect(() => {
        if (currentLocation) {
            modifyHistory(currentLocation);
        }
      }, [debouncedCurrentLocation]);

      useEffect(() => {
        window.addEventListener('click', (event) => {
            if (event.target.id !== 'test_input_unique') {
                setVisibleDropDown(false);
            }
        });
      }, [])

    

    return (
        <div className="container">
            <LoadingStatus isLoading={isLoading}>
                <div className="grid-container">
                    <Search
                        modifyLocation={handleModifyLocation}
                        location={currentWeather.location}
                        data={currentWeather}
                        history={history}
                        visibleDropdown={visibleDropdown}
                        setVisibleDropDown={setVisibleDropDown}
                        isError={isError}
                        errorMsg={errorMsg}
                    ></Search>
                    <CurrentWeather
                        data={currentWeather}
                    ></CurrentWeather>
                </div>
            </LoadingStatus>
        </div>
    );
};