/* eslint-disable no-mixed-spaces-and-tabs */
import { render, screen } from "@testing-library/react";

import TableBody from "../../table/TableBody";
import { TableRowProps } from "../../table/TableRow";

// Mocking the TableRow component with the described structure
jest.mock("../../table/TableRow", () => {
	return jest.fn(
		({
			item,
			placeholderNumber,
			placeholderFrontPosition,
		}: TableRowProps) => (
			<div className="wa-table-row-wrapper" data-testid="mock-table-row">
				<div className="wa-column">{`Today ${new Date(
					item.date
				).toLocaleDateString("en-GB", {
					day: "numeric",
					month: "short",
				})}.`}</div>
				<div className="wa-table-columns-wrapper">
					{placeholderFrontPosition && placeholderNumber
						? Array.from(
								{ length: placeholderNumber },
								(_, index) => (
									<div
										className="wa-column wa-column-placeholder"
										key={`placeholder-front-${index}`}
									>
										N/A
									</div>
								)
						  )
						: null}
					{item.data.map((hourWeather) => (
						<div
							key={hourWeather.dt}
							className="wa-column wa-img-wrapper"
						>
							<img
								src={`https://openweathermap.org/img/wn/${hourWeather.weather[0].icon}@4x.png`}
								alt={hourWeather.weather[0].description}
								title={hourWeather.weather[0].description}
							/>
							<p className="wa-text">
								{hourWeather.dt_txt.split(" ")[1].slice(0, 5)}
							</p>
						</div>
					))}
					{!placeholderFrontPosition && placeholderNumber
						? Array.from(
								{ length: placeholderNumber },
								(_, index) => (
									<div
										className="wa-column wa-column-placeholder"
										key={`placeholder-back-${index}`}
									>
										N/A
									</div>
								)
						  )
						: null}
				</div>
			</div>
		)
	);
});

describe("TableBody with mocked TableRow", () => {
	it("renders the mocked TableRow correctly", () => {
		// Sample data to pass into the mocked component
		const groupedDataByDate = [
			{
				date: "2024-10-24",
				data: [
					{
						dt: 1600000000,
						dt_txt: "2024-10-24 18:00:00",
						weather: [
							{ icon: "03n", description: "scattered clouds" },
						],
					},
					{
						dt: 1600003600,
						dt_txt: "2024-10-24 21:00:00",
						weather: [
							{ icon: "04n", description: "broken clouds" },
						],
					},
				],
			},
		];

		// Render the parent component with the mocked TableRow
		render(<TableBody groupedDataByDate={groupedDataByDate} />);

		// Assert that the TableRow renders with the expected structure
		const tableRow = screen.getByTestId("mock-table-row");
		expect(tableRow).toBeInTheDocument();

		// Check if the elements contain the correct text and image attributes
		expect(screen.getByText("Today 24 Oct.")).toBeInTheDocument();

		// Check for placeholder columns
		const placeholders = screen.getAllByText("N/A");
		expect(placeholders.length).toBe(6);

		// Check the weather images and text
		const images = screen.getAllByRole("img");
		expect(images.length).toBe(2);
		expect(images[0]).toHaveAttribute(
			"src",
			"https://openweathermap.org/img/wn/03n@4x.png"
		);
		expect(images[0]).toHaveAttribute("alt", "scattered clouds");
		expect(images[1]).toHaveAttribute(
			"src",
			"https://openweathermap.org/img/wn/04n@4x.png"
		);
		expect(images[1]).toHaveAttribute("alt", "broken clouds");

		// Check if the times are rendered correctly
		expect(screen.getByText("18:00")).toBeInTheDocument();
		expect(screen.getByText("21:00")).toBeInTheDocument();
	});
});
