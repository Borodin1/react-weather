import React from "react";
import styles from "./styles.module.css";
import { getFormattedDateFromDt } from "../../shared/lib/formattedDate";
import { IForecastWeather } from "../../entities/weather/model/types";

interface IForecast {
  title: string;
  data: IForecastWeather[];
}

export const ForecastWeather: React.FC<IForecast> = ({ title, data }) => {
  return (
    <div className={styles["forecast"]}>
      <div className={styles["forecast-title"]}>
        <p>{title}</p>
      </div>
      <hr />
      <div className={styles["forecast-details"]}>
        {data.map((d, index) => (
          <div key={index} className={styles["forecast-item"]}>
            <p>{d?.dayOfWeek || getFormattedDateFromDt(d?.dt,'short')}</p>
            <img
              src={`http://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`}
              alt="forecast weather"
            />
            <p className={styles["forecast-temp"]}>{d?.dayOfWeek ? d.main.temp_max : d.main.temp}°</p>
          </div>
        ))}
      </div>
    </div>
  );
};
