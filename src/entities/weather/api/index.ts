import { createAsyncThunk } from '@reduxjs/toolkit';
import { IWeather } from '../model/types';
import axios, { isAxiosError } from 'axios';

interface IFetchWeather{
    city:string,
    units:'metric'| 'imperial'
}

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchWeather = createAsyncThunk<IWeather,IFetchWeather,{rejectValue:{message:string}}>(
    'weather/fetchWeather',
    async({city,units}:IFetchWeather,{rejectWithValue})=>{
        try {
            const response = await axios.get<IWeather>(`${API_URL}/weather?q=${city}&appid=${API_KEY}&units=${units}`)
    
            return response.data;
        } catch (error) {
            if (isAxiosError(error)) {
                return rejectWithValue({message: error.message});
            } else {
                return rejectWithValue({message: 'An unknown error occurred'});
            }
        }
    }
)