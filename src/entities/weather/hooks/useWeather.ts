import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/store";
import { fetchWeather } from "../api";
import { getFormattedDateFromTimezone } from '../../../shared/lib/formattedDate';

export const useWeather = () => {
  const dispatch = useAppDispatch();
  const { city, units, weather } = useAppSelector((state) => state.weather);

  const time = getFormattedDateFromTimezone(weather?.timezone)

  useEffect(() => {
    dispatch(fetchWeather({ city, units }));
  }, [city, units,dispatch]);

  return {
    weather,
    time
  };
};
