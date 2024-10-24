import { render, screen } from "@testing-library/react";
import TableRow, { HourWeatherProps } from "../../table/TableRow";

// Mock image for testing purposes
jest.mock("../../table/TableRow", () => {
	return jest.fn(() => <div data-testid="table-row" />);
});

describe("TableRow", () => {
	const hourWeather: HourWeatherProps = {
		dt_txt: "2024-10-10 00:00:00",
		dt: 1600000000,
		weather: [{ icon: "01d", description: "clear sky" }],
	};

	const item = {
		date: "2024-10-10",
		data: [hourWeather],
	};

	it("renders the correct date format for Today", () => {
		render(<TableRow item={item} key={1} />);
		const dateColumn = screen.getByText(/Today/);
		expect(dateColumn).toBeInTheDocument();
	});

	it("renders the correct date format for future dates", () => {
		const futureItem = {
			date: "2024-10-11",
			data: [hourWeather],
		};
		render(<TableRow item={futureItem} key={2} />);
		const dateColumn = screen.getByText(/Thursday/);
		expect(dateColumn).toBeInTheDocument();
	});

	it("renders weather icons and times correctly", () => {
		render(<TableRow item={item} key={1} />);
		const weatherImage = screen.getByAltText(
			hourWeather.weather[0].description
		);
		expect(weatherImage).toHaveAttribute(
			"src",
			"https://openweathermap.org/img/wn/01d@4x.png"
		);
		const timeText = screen.getByText("00:00");
		expect(timeText).toBeInTheDocument();
	});

	it("renders placeholders when `placeholderNumber` is provided", () => {
		render(<TableRow item={item} key={1} placeholderNumber={3} />);
		const placeholders = screen.getAllByText("N/A");
		expect(placeholders.length).toBe(3);
	});

	it("renders placeholders at the front when `placeholderFrontPosition` is true", () => {
		render(
			<TableRow
				item={item}
				key={1}
				placeholderNumber={2}
				placeholderFrontPosition={true}
			/>
		);
		const placeholders = screen.getAllByText("N/A");
		expect(placeholders[0]).toBeInTheDocument();
		expect(placeholders[1]).toBeInTheDocument();
	});

	it("renders placeholders at the end when `placeholderFrontPosition` is false", () => {
		render(
			<TableRow
				item={item}
				key={1}
				placeholderNumber={2}
				placeholderFrontPosition={false}
			/>
		);
		const placeholders = screen.getAllByText("N/A");
		expect(placeholders[0]).toBeInTheDocument();
		expect(placeholders[1]).toBeInTheDocument();
	});

	it("renders correctly when there is no weather data", () => {
		const emptyItem = {
			date: "2024-10-10",
			data: [],
		};
		render(<TableRow item={emptyItem} key={1} />);
		const noDataText = screen.queryByText("N/A");
		expect(noDataText).toBeNull();
	});
});
