import { createSlice } from "@reduxjs/toolkit";
import { IWeatherState } from "./types";
import { fetchForecastWeather, fetchWeather } from "../api";

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
    builder.addCase(fetchWeather.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchWeather.fulfilled, (state, { payload }) => {
      state.weather = payload;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(fetchWeather.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    //forecastWeather
    builder.addCase(fetchForecastWeather.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchForecastWeather.fulfilled, (state, { payload }) => {
      state.forecastWeather = payload;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(fetchForecastWeather.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export const { setCity, setUnits } = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
