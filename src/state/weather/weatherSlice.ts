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

// const initialState: WeatherState = {
// 	coord: {
// 		lon: 15.9772,
// 		lat: 45.8132,
// 	},
// 	weather: [
// 		{
// 			id: 800,
// 			main: "Clear",
// 			description: "clear sky",
// 			icon: "01d",
// 		},
// 	],
// 	base: "stations",
// 	main: {
// 		temp: 27.82,
// 		feels_like: 28.6,
// 		temp_min: 27.12,
// 		temp_max: 27.82,
// 		pressure: 1007,
// 		humidity: 54,
// 		sea_level: 1007,
// 		grnd_level: 990,
// 	},
// 	visibility: 10000,
// 	wind: {
// 		speed: 2.57,
// 		deg: 110,
// 	},
// 	clouds: {
// 		all: 0,
// 	},
// 	dt: 1722622454,
// 	sys: {
// 		type: 1,
// 		id: 6389,
// 		country: "HR",
// 		sunrise: 1722570029,
// 		sunset: 1722623045,
// 	},
// 	timezone: 7200,
// 	id: 3337532,
// 	name: "City of Zagreb",
// 	cod: 200,
// };

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
