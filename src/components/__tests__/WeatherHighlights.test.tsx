import { render, screen } from "@testing-library/react";
import WeatherHighlights from "../WeatherHighlights";
import { useSelector } from "react-redux";

// Mocking FontAwesomeIcon to avoid rendering complexity
jest.mock("@fortawesome/react-fontawesome", () => ({
	FontAwesomeIcon: () => <span>Icon</span>,
}));

// Mock the useSelector hook from react-redux
jest.mock("react-redux", () => ({
	useSelector: jest.fn(),
}));

describe("WeatherHighlights Component", () => {
	beforeEach(() => {
		// Mocking the redux state for weather
		(useSelector as unknown as jest.Mock).mockReturnValue({
			data: {
				wind: { speed: 5.5 },
				main: {
					temp_max: 28,
					temp_min: 18,
					humidity: 65,
					pressure: 1012,
				},
				visibility: 10,
			},
		});
	});

	it("renders the weather highlight cards correctly", () => {
		render(<WeatherHighlights />);
		expect(screen.getByText("Today's Highlights")).toBeInTheDocument();
		expect(screen.getByText("Wind")).toBeInTheDocument();
		expect(screen.getByText("5.5")).toBeInTheDocument();
		expect(screen.getByText("Max Temperature")).toBeInTheDocument();
		expect(screen.getByText("28")).toBeInTheDocument();
		expect(screen.getByText("Min Temperature")).toBeInTheDocument();
		expect(screen.getByText("18")).toBeInTheDocument();
		expect(screen.getByText("Humidity")).toBeInTheDocument();
		expect(screen.getByText("65")).toBeInTheDocument();
		expect(screen.getByText("Visibility")).toBeInTheDocument();
		expect(screen.getByText("10")).toBeInTheDocument();
		expect(screen.getByText("Pressure")).toBeInTheDocument();
		expect(screen.getByText("1012")).toBeInTheDocument();
	});
});
