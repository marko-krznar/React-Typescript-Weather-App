import { render, screen } from "@testing-library/react";
import WeatherInfo from "../WeatherInfo";
import { useDispatch, useSelector } from "react-redux";
// import { fetchWeatherByCity } from "../../state/weather/weatherSlice";
// import { fetchFiveDayForecastByCity } from "../../state/weather/fiveDayForecastSlice";

// Mocking FontAwesomeIcon to avoid rendering complexity
jest.mock("@fortawesome/react-fontawesome", () => ({
	FontAwesomeIcon: () => <span>Icon</span>,
}));

// Mock useDispatch and useSelector hooks from react-redux
jest.mock("react-redux", () => ({
	useDispatch: jest.fn(),
	useSelector: jest.fn(),
}));

jest.mock("../../state/weather/weatherSlice", () => ({
	fetchWeatherByCity: jest.fn(),
	fetchFiveDayForecastByCity: jest.fn(),
}));

describe("WeatherInfo Component", () => {
	const dispatchMock = jest.fn();

	beforeEach(() => {
		(useDispatch as unknown as jest.Mock).mockReturnValue(dispatchMock);
	});

	it("displays loading state", () => {
		(useSelector as unknown as jest.Mock).mockReturnValue({
			status: "loading",
			data: null,
		});

		render(<WeatherInfo />);
		expect(screen.getByText("Loading...")).toBeInTheDocument();
	});

	it("displays error message on failed state", () => {
		(useSelector as unknown as jest.Mock).mockReturnValue({
			status: "failed",
			error: "Failed to fetch weather data",
		});

		render(<WeatherInfo />);
		expect(
			screen.getByText("Error: Failed to fetch weather data")
		).toBeInTheDocument();
	});

	it("displays no data message when no weather data is available", () => {
		(useSelector as unknown as jest.Mock).mockReturnValue({
			status: "succeeded",
			data: null,
		});

		render(<WeatherInfo />);
		expect(
			screen.getByText("No weather data available.")
		).toBeInTheDocument();
	});

	it("renders weather information correctly when data is available", () => {
		(useSelector as unknown as jest.Mock).mockReturnValue({
			status: "succeeded",
			data: {
				name: "Donji grad",
				sys: { country: "HR" },
				main: { temp: 22, temp_max: 24, temp_min: 18 },
				weather: [
					{ main: "Clear", icon: "01d", description: "clear sky" },
				],
				rain: { "1h": 2 },
			},
		});
		render(<WeatherInfo />);
		expect(screen.getByText("Zagreb, HR")).toBeInTheDocument();
		expect(screen.getByText("22")).toBeInTheDocument();
		expect(screen.getByText("°C")).toBeInTheDocument();
		expect(screen.getByText("Clear")).toBeInTheDocument();
		expect(screen.getByText("2 mm/h")).toBeInTheDocument();
	});

	// it("dispatches fetchWeatherByCity and fetchFiveDayForecastByCity on mount", () => {
	// 	(useSelector as unknown as jest.Mock).mockReturnValue({
	// 		status: "succeeded",
	// 		data: null,
	// 	});
	// 	render(<WeatherInfo />);
	// 	expect(dispatchMock).toHaveBeenCalledWith(fetchWeatherByCity("Zagreb"));
	// 	expect(dispatchMock).toHaveBeenCalledWith(
	// 		fetchFiveDayForecastByCity("Zagreb")
	// 	);
	// });
});
