import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/store";
import { fetchWeatherData } from "../api";
import { getFormattedDateFromDt, getFormattedDateFromTimezone } from '../../../shared/lib/formattedDate';

export const useWeather = () => {
  const dispatch = useAppDispatch();
  const { city, units, weather,forecastWeather } = useAppSelector((state) => state.weather);

  const time = getFormattedDateFromDt(weather?.dt,'full')

  const dailyForecast = forecastWeather?.filter((f) => f.dt_txt?.slice(-8) === "00:00:00")
  ?.map((f)=>({
    ...f,
    dayOfWeek:new Date(f.dt_txt).toLocaleDateString('en-US',{weekday:'short'})
  }))
  console.log(weather)

  useEffect(() => {
    dispatch(fetchWeatherData({ city, units,type:'weather' }));
    dispatch(fetchWeatherData({ city, units,type:'forecast' }));
  }, [city, units,dispatch]);

  return {
    weather,
    time,
    dispatch,
    units,
    forecastWeather:forecastWeather?.slice(0,5),
    dailyForecast
  };
};
