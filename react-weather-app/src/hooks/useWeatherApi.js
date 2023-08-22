import axios from "axios";
import { useEffect, useState } from "react";
// import { useErrorHandler } from "react-error-boundary";
// import { useLocation } from ".";
import { DefaultCurrentWeather } from "../data-models/WeatherModel";

export const useWeather = (location) => {
  const baseUrl = process.env.REACT_APP_OPENWEATHER_API_BASEURL;
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

  const [isLoading, setIsLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState(DefaultCurrentWeather);
  // const handleError = useErrorHandler();

  useEffect(() => {
    setIsLoading(true);
    if (location) {
      const url = `${baseUrl}${location}&appid=${apiKey}&units=metric`;
      axios
        .get(url)
        .then((response) => {
          debugger
          console.log(response)
          // setCurrent(response.data.current);
          // setHourly(response.data.hourly);
          // setDaily(response.data.daily);
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
          // handleError(error);
          console.log(error);
        })
        .finally(() => {
          setTimeout(() => setIsLoading(false), 100);
        });
    }
  }, [location, /*unit, useMockData,*/ baseUrl, apiKey, /*handleError*/]);

  // const setCurrent = (data) => {
  //   setCurrentWeather({
  //     dt: data.dt,
  //     weather: {
  //       icon: data.weather[0].icon,
  //       description: data.weather[0].description,
  //     },
  //     temp: data.temp,
  //     feels_like: data.feels_like,
  //     details: {
  //       rain: 0,
  //       visibility: data.visibility / 1000,
  //       humidity: data.humidity,
  //       pressure: data.pressure,
  //       wind_speed: data.wind_speed,
  //     },
  //   });
  // };

  // const setHourly = (data: any) => {
  //   let hourly: CurrentWeatherModel[] = [];
  //   data.slice(0, 24).forEach((item: any) => {
  //     hourly.push({
  //       dt: item.dt,
  //       weather: {
  //         icon: item.weather[0].icon,
  //         description: item.weather[0].description,
  //       },
  //       temp: item.temp,
  //       feels_like: item.feels_like,
  //       details: {
  //         rain: item.pop * 100,
  //         visibility: item.visibility / 1000,
  //         humidity: item.humidity,
  //         pressure: item.pressure,
  //         wind_speed: item.wind_speed,
  //       },
  //     });
  //   });
  //   setHourlyWeather({ hourly: hourly });
  // };

  // const setDaily = (data: any) => {
  //   let daily: DailyWeatherDetailsModel[] = [];
  //   data.slice(1).forEach((item: any) => {
  //     daily.push({
  //       dt: item.dt,
  //       clouds: item.clouds,
  //       humidity: item.humidity,
  //       pressure: item.pressure,
  //       sunrise: item.sunrise,
  //       sunset: item.sunset,
  //       minTemp: item.temp.min,
  //       maxTemp: item.temp.max,
  //       uvi: item.uvi,
  //       weather: {
  //         icon: item.weather[0].icon,
  //         description: item.weather[0].description,
  //       },
  //       wind_speed: item.wind_speed,
  //       rain: item.pop * 100,
  //     });
  //   });
  //   setDailyWeather({ daily: daily });
  // };

  return {
    isLoading,
    location,
    currentWeather,
  };
};
