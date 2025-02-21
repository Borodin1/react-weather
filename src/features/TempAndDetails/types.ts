export interface ITempAndDetailsProps {
    data: {
      weather: [
        {
          main: string | undefined;
          icon: string;
        }
      ];
      main: {
        temp: number;
        feels_like: number;
        humidity: number;
        temp_max: number;
        temp_min: number;
      };
      wind: {
        speed: number;
      };
      sys: {
        sunrise: number;
        sunset: number;
      };
      timezone:number;
    };
    units: "metric" | "imperial";
  }