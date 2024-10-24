import { render, screen } from "@testing-library/react";
import WeatherTimeline from "../WeatherTimeline";
import { useSelector } from "react-redux";
import { RootStore } from "../../state/store";

// Mocking FontAwesomeIcon to avoid rendering complexity
jest.mock("@fortawesome/react-fontawesome", () => ({
	FontAwesomeIcon: () => <span>Icon</span>,
}));

// Mocking the Redux hooks
jest.mock("react-redux", () => ({
	useSelector: jest.fn(),
}));

// Mocking the dateUtils function
jest.mock("../../utils/dateUtils", () => ({
	formatTimestampToHours: jest.fn(
		(timestamp: number) => `Formatted time for ${timestamp}`
	),
}));

describe("WeatherTimeline Component", () => {
	beforeEach(() => {
		(useSelector as unknown as jest.Mock).mockReturnValue({
			data: {
				dt: 1633024800,
				main: {
					feels_like: 25.67,
				},
				sys: {
					sunrise: 1632988800,
					sunset: 1633032000,
				},
			},
		} as RootStore["weather"]);
	});

	it("displays the date correctly based on the Unix timestamp", () => {
		render(<WeatherTimeline />);
		const dateText = (
			content: string,
			element: Element | null
		): boolean => {
			const waTextElement = element?.querySelector(
				".wa-text"
			) as HTMLElement | null;

			return (
				content.includes("Thursday") &&
				waTextElement?.textContent === "30.09."
			);
		};
		expect(screen.getByText(dateText)).toBeInTheDocument();
	});

	it("displays the 'feels like' temperature", () => {
		render(<WeatherTimeline />);
		expect(screen.getByText("Feels like")).toBeInTheDocument();
		expect(screen.getByText("26")).toBeInTheDocument(); // Rounded to 26
		expect(screen.getByText("°C")).toBeInTheDocument();
	});

	it("displays the sunrise time", () => {
		render(<WeatherTimeline />);
		expect(screen.getByText("Sunrise")).toBeInTheDocument();
		expect(
			screen.getByText("Formatted time for 1632988800")
		).toBeInTheDocument();
	});

	it("displays the sunset time", () => {
		render(<WeatherTimeline />);
		expect(screen.getByText("Sunset")).toBeInTheDocument();
		expect(
			screen.getByText("Formatted time for 1633032000")
		).toBeInTheDocument();
	});
});
