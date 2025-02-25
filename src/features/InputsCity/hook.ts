import { useRef } from 'react';
import { useAppDispatch } from '../../app/store';
import { setCity } from '../../entities/weather/model/weatherSlice';
import { fetchWeatherData } from '../../entities/weather/api';

export const useInput = ()=>{
    const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchCity = () => {
    if (inputRef.current) {
      const newCity = inputRef.current.value.trim();
      if (newCity) {
        dispatch(setCity(newCity));
        inputRef.current.value = '';
      }
    }
  };

  const handleLocation = ()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        const {latitude,longitude} = position.coords;
        dispatch(fetchWeatherData({coord:{lat:latitude,lon:longitude},type:'weather',units:'metric'}))
      })
    }
  }

  return {
    inputRef,handleLocation,handleSearchCity
  }

}