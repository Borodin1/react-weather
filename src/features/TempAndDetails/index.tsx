import React from "react";
import styles from "./styles.module.css";
import { getHorizontalDetails, getVerticalDetails } from "./helpers";
import { ITempAndDetailsProps } from './types';

export const TempAndDetails: React.FC<ITempAndDetailsProps> = ({
  data: { weather, main, wind, sys,timezone },
  units,
}) => {
  const vertical = getVerticalDetails({
    feels_like: main.feels_like,
    humidity: main.humidity,
    speed: wind.speed,
    units: units,
  });
  const horizontal = getHorizontalDetails({
    sunrise: sys.sunrise,
    sunset: sys.sunset,
    temp_max: main.temp_max,
    temp_min: main.temp_min,
    timezone:timezone
  });
  
  return (
    <div className={styles["temp-and-details"]}>
      <div className={styles['details']}>
        <p>{weather[0]?.main}</p>
      </div>

      <div className={styles['details-weather']}>
        <img
          src={`http://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`}
          alt="weather icon"
        />
        <p>{main.temp.toFixed()}</p>
      <div className={styles['vertical']}>
        {vertical.map(({ Icon, title, value }) => {
          return (
            <div key={title} className={styles['vertical-line']}>
              <Icon />
              {title}: <span>{value}</span>
            </div>
          );
        })}
      </div>
      </div>

      <div className={styles['horizontal']}>
        {horizontal.map(({ Icon, title, value }) => {
          return (
            <div key={title} className={styles['horizontal-line']}>
              <Icon />
              <p>
                {title}: <span>{value}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
