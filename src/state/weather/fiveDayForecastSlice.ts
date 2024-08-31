import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: null || { list: [] },
	status: "idle",
	error: null,
};

export const fetchFiveDayForecastByCity = createAsyncThunk(
	"weather/fetchFiveDayForecastByCity",
	async (city: string, { rejectWithValue }) => {
		const API_KEY = "bfd14f25f12b27477818a553e86af0d4";
		const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

		try {
			const response = await fetch(API_URL);

			if (!response.ok) {
				throw new Error("City not found");
			}

			const data = await response.json();
			return data;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			return rejectWithValue(
				err.message || "Failed to fetch weather data"
			);
		}
	}
);

const fetchFiveDayForecast = createSlice({
	name: "fiveDayForecast",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchFiveDayForecastByCity.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(fetchFiveDayForecastByCity.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.data = action.payload;
			})
			.addCase(fetchFiveDayForecastByCity.rejected, (state, action) => {
				state.status = "failed";
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				state.error = action.payload as any;
			});
	},
});

export default fetchFiveDayForecast.reducer;
