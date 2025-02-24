import { createSlice } from "@reduxjs/toolkit";
import { IWeatherState } from "./types";
import {  fetchWeatherData } from "../api";

const initialState: IWeatherState = {
  city: "Odessa,UA",
  units: "metric",
  weather: null,
  forecastWeather: null,
  isLoading: false,
  isError: false,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCity: (state, { payload }) => {
      state.city = payload;
    },
    setUnits: (state, { payload }) => {
      state.units = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchWeatherData.fulfilled, (state, { payload }) => {
      if('list' in payload){
        state.forecastWeather = payload.list
      }else{
        state.weather = payload;
      }
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(fetchWeatherData.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { setCity, setUnits } = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
