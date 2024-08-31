import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weather/weatherSlice";
import fiveDayForecastReducer from "./weather/fiveDayForecastSlice";

export const store = configureStore({
	reducer: {
		weather: weatherReducer,
		fiveDayForecast: fiveDayForecastReducer,
	},
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
