export interface IWeatherState {
  city: string;
  units: "metric" | "imperial";
  weather: IWeather | null;
  forecastWeather: IForecastWeather[] | null;
  isLoading: boolean;
  isError: boolean;
}
export interface IWeather {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface IForecastWeather {
  dayOfWeek?: string;
  dt: number;
  main: {
    temp: number;
    temp_max:number;
  };
  weather: [
    {
      icon: string;
    }
  ];
  dt_txt: string;
}
