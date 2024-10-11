import { render, screen } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import FiveDayForecast from "../FiveDayForecast";
// import { fetchFiveDayForecastByCity } from "../../state/weather/fiveDayForecastSlice";

// Mock child components
jest.mock("../table/TableHeader", () => () => <div>TableHeader</div>);
jest.mock("../table/TableBody", () =>
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	({ groupedDataByDate }: any) => (
		<div>TableBody - {groupedDataByDate?.length} days</div>
	)
);

// Mock useDispatch and useSelector
jest.mock("react-redux", () => ({
	useDispatch: jest.fn(),
	useSelector: jest.fn(),
}));

describe("FiveDayForecast Component", () => {
	let mockDispatch: jest.Mock;

	beforeEach(() => {
		mockDispatch = jest.fn();
		(useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);

		// Mocking the data in useSelector
		(useSelector as unknown as jest.Mock).mockReturnValue({
			data: {
				list: [
					{ dt_txt: "2024-10-11 12:00:00" },
					{ dt_txt: "2024-10-11 15:00:00" },
					{ dt_txt: "2024-10-12 12:00:00" },
				],
			},
		});
	});

	it("should render without crashing", () => {
		render(<FiveDayForecast />);
		expect(screen.getByText("Five day forecast")).toBeInTheDocument();
		expect(screen.getByText("TableHeader")).toBeInTheDocument();
		expect(screen.getByText("TableBody - 2 days")).toBeInTheDocument(); // Expect 2 unique dates
	});

	// it("should dispatch fetchFiveDayForecastByCity on mount", () => {
	// 	render(<FiveDayForecast />);
	// 	expect(mockDispatch).toHaveBeenCalledWith(
	// 		fetchFiveDayForecastByCity("Zagreb")
	// 	);
	// });
});
