import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface WeatherData {
	coord: {
		lon: number;
		lat: number;
	};
	weather: {
		id: number;
		main: string;
		description: string;
		icon: string;
	}[];
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
	rain?: {
		"1h"?: number;
		"3h"?: number;
	};
	clouds: {
		all: number;
	};
	dt: number;
	sys: {
		type: number;
		id: number;
		country: string;
		sunrise: number;
		sunset: number;
	};
	timezone: number;
	id: number;
	name: string;
	cod: number;
}

export interface WeatherState {
	data: WeatherData | null;
	status: "idle" | "loading" | "succeeded" | "failed";
	error: string | null;
}

const initialState: WeatherState = {
	data: null,
	status: "idle",
	error: null,
};

export const fetchWeatherByCity = createAsyncThunk(
	"weather/fetchWeatherByCity",
	async (city: string, { rejectWithValue }) => {
		const API_KEY = "bfd14f25f12b27477818a553e86af0d4";
		const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

		try {
			const response = await fetch(API_URL);

			if (!response.ok) {
				throw new Error("City not found");
			}

			const data: WeatherData = await response.json();
			return data;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			return rejectWithValue(
				err.message || "Failed to fetch weather data"
			);
		}
	}
);

const weatherSlice = createSlice({
	name: "weather",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchWeatherByCity.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(fetchWeatherByCity.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.data = action.payload;
			})
			.addCase(fetchWeatherByCity.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload as string;
			});
	},
});

export default weatherSlice.reducer;
