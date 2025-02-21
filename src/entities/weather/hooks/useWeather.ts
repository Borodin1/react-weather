import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/store";
import { fetchForecastWeather, fetchWeather } from "../api";
import { getFormattedDateFromTimezone } from '../../../shared/lib/formattedDate';

export const useWeather = () => {
  const dispatch = useAppDispatch();
  const { city, units, weather,forecastWeather } = useAppSelector((state) => state.weather);

  const time = getFormattedDateFromTimezone(weather?.timezone)

  useEffect(() => {
    dispatch(fetchWeather({ city, units }));
    dispatch(fetchForecastWeather({ city, units }));
  }, [city, units,dispatch]);

  return {
    weather,
    time,
    dispatch,
    units,
    forecastWeather
  };
};
