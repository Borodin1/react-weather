import { configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { weatherReducer } from '../entities/weather/model/weatherSlice';


export const store = configureStore({
    reducer:{
        weather:weatherReducer
    }
}); 

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

