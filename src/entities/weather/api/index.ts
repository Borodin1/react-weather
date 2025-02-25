import { createAsyncThunk } from '@reduxjs/toolkit';
import { IForecastWeather, IWeather } from '../model/types';
import axios, { isAxiosError } from 'axios';

interface IFetchWeather{
    city?:string
    coord?:{
        lat:number
        lon:number
    }
    units:'metric'| 'imperial'
    type:'weather' | 'forecast'
}

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchWeatherData = createAsyncThunk<
    IWeather | { list: IForecastWeather[] },
    IFetchWeather,
    { rejectValue: { message: string } }
>(
    'weather/fetchWeatherData',
    async ({ city, units, type,coord }, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${API_URL}/${type}?${city ? `q=${city}` : `lat=${coord?.lat}&lon=${coord?.lon}`}&appid=${API_KEY}&units=${units}`);
            console.log(response.data)
            return type === 'forecast' ? { list: response.data.list } : response.data;
        } catch (error) {
            if (isAxiosError(error)) {
                return rejectWithValue({ message: error.message });
            } else {
                return rejectWithValue({ message: 'An unknown error occurred' });
            }
        }
    }
);
