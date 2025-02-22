import React from "react";
import styles from "./styles.module.css";
import { TopButtons } from "../../widgets/TopButtons";
import { SearchCity } from "../../widgets/SearchCity";
import { useWeather } from "../../entities/weather/hooks/useWeather";
import { TimeAndLocation } from "../../widgets/TimeAndLocation";
import { TempAndDetails } from "../../features/TempAndDetails";
import { ForecastWeather } from "../../features/Forecast";

export const Content: React.FC = () => {
  const { weather, time, units, forecastWeather } = useWeather();
  return (
    <div className={styles["content"]}>
      <TopButtons />
      <SearchCity />
      <TimeAndLocation
        city={weather?.name}
        country={weather?.sys.country}
        time={time}
      />
      {weather && <TempAndDetails data={weather} units={units} />}
      {forecastWeather && (
        <ForecastWeather title="3 Hour Step Forecast" data={forecastWeather} />
      )}
      <p className={styles["content-footer"]}>
        Made with &hearts; by Alexander Borodin &copy; 2025
      </p>
    </div>
  );
};
