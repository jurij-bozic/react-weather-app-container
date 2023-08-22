import axios from "axios";
import { useEffect, useState } from "react";
// import { useErrorHandler } from "react-error-boundary";
// import { useLocation } from ".";
import { DefaultCurrentWeather } from "../data-models/WeatherModel";

export const useWeather = (location) => {
  const baseUrl = process.env.REACT_APP_OPENWEATHER_API_BASEURL;
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

  const [isLoading, setIsLoading] = useState(false);
  const [currentWeather, setCurrentWeather] = useState(DefaultCurrentWeather);
  const [isError, setIsError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (location) {
      setIsLoading(true);
      setIsError(false);
      setErrorMsg('');
      const url = `${baseUrl}${location}&appid=${apiKey}&units=metric`;
      axios
        .get(url)
        .then((response) => {
          let requestedWeather = {
            temp: response.data.main.temp,
            feelsLike: response.data.main.feels_like,
            tempMin: response.data.main.temp_min,
            tempMax: response.data.main.temp_max,
            humidity: response.data.main.humidity,
            location: response.data.name,
            icon: response.data.weather[0].icon
          };
          setCurrentWeather(requestedWeather);
        })
        .catch((error) => {
          setIsError(true);
          
          if (error?.response?.data?.message) {
            setErrorMsg(error.response.data.message)
          }
          else {
            setErrorMsg('An unknown error has occurred.');
          }
        })
        .finally(() => {
          setTimeout(() => setIsLoading(false), 100);
        });
    }
  }, [location, baseUrl, apiKey]);

  return {
    isLoading,
    currentWeather,
    isError,
    errorMsg
  };
};
