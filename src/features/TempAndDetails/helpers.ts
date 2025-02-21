import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

export const formatToLocalTime = (secs: number, zoneOffset: number, format = "hh:mm a") => {
  const date = new Date(secs * 1000);
  const localTime = new Date(date.getTime() + zoneOffset * 1000);
  return localTime.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
};


export const getVerticalDetails = (weatherData: {
  feels_like: number;
  humidity: number;
  speed: number;
  units: "metric" | "imperial";
}) => [
  {
    Icon: FaThermometerEmpty,
    title: "Real feel",
    value: `${weatherData.feels_like.toFixed()}°`,
  },
  {
    Icon: BiSolidDropletHalf,
    title: "Humidity",
    value: `${weatherData.humidity.toFixed()}%`,
  },
  {
    Icon: FiWind,
    title: "Wind",
    value: `${weatherData.speed.toFixed()} ${
      weatherData.units === "imperial" ? "mph" : "km/h"
    }`,
  },
  ];


export const getHorizontalDetails = (weatherData: {
  sunrise: number;
  sunset: number;
  temp_max: number;
  temp_min:number;
  timezone:number;
}) =>  
  [
  {
    Icon: GiSunrise,
    title: "Sunrise",
    value: formatToLocalTime(weatherData.sunrise, weatherData.timezone, "hh:mm a"),
  },
  {
    Icon: GiSunset,
    title: "Sunset",
    value: formatToLocalTime(weatherData.sunset, weatherData.timezone, "hh:mm a"),
  },
  {
    Icon: MdKeyboardArrowUp,
    title: "High",
    value: `${weatherData.temp_max.toFixed()}°`,
  },
  {
    Icon: MdKeyboardArrowDown,
    title: "Low",
    value: `${weatherData.temp_min.toFixed()}°`,
  },
];
