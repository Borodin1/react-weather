import React from "react";
import styles from "./styles.module.css";
import { TopButtons } from "../../widgets/TopButtons";
import { SearchCity } from "../../widgets/SearchCity";
import { useWeather } from "../../entities/weather/hooks/useWeather";
import { TimeAndLocation } from "../../widgets/TimeAndLocation";
import { TempAndDetails } from "../../features/TempAndDetails";
import { ForecastWeather } from "../../features/Forecast";
import { Bars } from "react-loader-spinner";

export const Content: React.FC = () => {
  const { weather, units, forecastWeather, dailyForecast } = useWeather();
  return (
    <div className={styles["content"]}>
      <TopButtons />
      <SearchCity />
      {!weather ? (
        <Bars
          height="80"
          width="80"
          color="#FFF"
          ariaLabel="bars-loading"
          wrapperStyle={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <>
          <TimeAndLocation
            city={weather?.name}
            country={weather?.sys.country}
            time={weather?.dt}
          />
          {weather && <TempAndDetails data={weather} units={units} />}
          {forecastWeather && (
            <ForecastWeather
              title="3 Hour Step Forecast"
              data={forecastWeather}
            />
          )}
          {dailyForecast && (
            <ForecastWeather title="daily forecast" data={dailyForecast} />
          )}
        </>
      )}

      <p className={styles["content-footer"]}>
        Made with &hearts; by Alexander Borodin &copy; 2025
      </p>
    </div>
  );
};
