import React, { useEffect, useState } from "react";
import "./WeatherStyle.css";

export const CurrentWeather = ({ data }) => {

  return (
    <div className="current-weather-details">
      <div className="current-weather-details-grid">
        <div className="current-weather-details-grid-item">
          <label>Temperature:</label>
          <label>{data?.temp}&#8451;</label>
        </div>
        <div className="current-weather-details-grid-item">
          <label>Feels like:</label>
          <label>{data?.feelsLike}&#8451;</label>
        </div>
        <div className="current-weather-details-grid-item">
          <label>Minimum temperature:</label>
          <label>{data?.tempMin}&#8451;</label>
        </div>
        <div className="current-weather-details-grid-item">
          <label>Maximum temperature:</label>
          <label>{data?.tempMax}&#8451;</label>
        </div>
        <div className="current-weather-details-grid-item">
          <label>Humidity:</label>
          <label>{data?.humidity}%</label>
        </div>
      </div>
    </div>
  );
};
