import { render, screen, fireEvent } from "@testing-library/react";
import SearchForm from "../SearchForm";
import { useDispatch } from "react-redux";
import { fetchWeatherByCity } from "../../state/weather/weatherSlice";
import { fetchFiveDayForecastByCity } from "../../state/weather/fiveDayForecastSlice";

// Mock useDispatch from react-redux
jest.mock("react-redux", () => ({
	useDispatch: jest.fn(),
}));

// Mock action creators
jest.mock("../../state/weather/weatherSlice", () => ({
	fetchWeatherByCity: jest.fn(),
}));

jest.mock("../../state/weather/fiveDayForecastSlice", () => ({
	fetchFiveDayForecastByCity: jest.fn(),
}));

describe("SearchForm Component", () => {
	let mockDispatch: jest.Mock;

	beforeEach(() => {
		mockDispatch = jest.fn();
		(useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("should update search input when typing", () => {
		render(<SearchForm />);
		const inputElement = screen.getByPlaceholderText("Search for place...");
		fireEvent.change(inputElement, { target: { value: "Zagreb" } });
		expect(inputElement).toHaveValue("Zagreb");
	});

	// it("should clear search input when the clear button is clicked", () => {
	// 	render(<SearchForm />);
	// 	const inputElement = screen.getByPlaceholderText("Search for place...");
	// 	const clearButton = screen.getByRole("button", { name: /xmark/i });
	// 	fireEvent.change(inputElement, { target: { value: "Zagreb" } });
	// 	expect(inputElement).toHaveValue("Zagreb");
	// 	fireEvent.click(clearButton);
	// 	expect(inputElement).toHaveValue("");
	// });

	it("should dispatch actions when the search button is clicked", () => {
		render(<SearchForm />);
		const inputElement = screen.getByPlaceholderText("Search for place...");
		const searchButton = screen.getByRole("button", { name: /find/i });
		fireEvent.change(inputElement, { target: { value: "Zagreb" } });
		fireEvent.click(searchButton);
		expect(mockDispatch).toHaveBeenCalledWith(fetchWeatherByCity("Zagreb"));
		expect(mockDispatch).toHaveBeenCalledWith(
			fetchFiveDayForecastByCity("Zagreb")
		);
	});
});
