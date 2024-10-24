import { render, screen } from "@testing-library/react";
import TableBody, { GroupedDataByDateProps } from "../../table/TableBody";

// Mock TableRow component
jest.mock("../../table/TableRow", () => {
	return jest.fn(() => <div data-testid="table-row" />);
});

describe("TableBody", () => {
	it("renders the correct number of TableRow components", () => {
		const groupedDataByDate: GroupedDataByDateProps["groupedDataByDate"] = [
			{
				date: "2024-10-10",
				data: [
					{
						dt_txt: "2024-10-10 00:00:00",
						dt: 1600000000,
						weather: [{ icon: "01d", description: "clear sky" }],
					},
					{
						dt_txt: "2024-10-10 01:00:00",
						dt: 1600003600,
						weather: [{ icon: "01d", description: "clear sky" }],
					},
				],
			},
			{
				date: "2024-10-11",
				data: [
					{
						dt_txt: "2024-10-11 00:00:00",
						dt: 1600080000,
						weather: [{ icon: "02d", description: "few clouds" }],
					},
					{
						dt_txt: "2024-10-11 01:00:00",
						dt: 1600083600,
						weather: [{ icon: "02d", description: "few clouds" }],
					},
				],
			},
		];
		render(<TableBody groupedDataByDate={groupedDataByDate} />);
		const tableRows = screen.getAllByTestId("table-row");
		expect(tableRows.length).toBe(2);
	});

	it("renders the correct number of placeholder rows", () => {
		const groupedDataByDate: GroupedDataByDateProps["groupedDataByDate"] = [
			{
				date: "2024-10-10",
				data: [
					{
						dt_txt: "2024-10-10 00:00:00",
						dt: 1600000000,
						weather: [{ icon: "01d", description: "clear sky" }],
					},
				],
			},
			{
				date: "2024-10-11",
				data: [
					{
						dt_txt: "2024-10-11 00:00:00",
						dt: 1600080000,
						weather: [{ icon: "02d", description: "few clouds" }],
					},
				],
			},
		];
		render(<TableBody groupedDataByDate={groupedDataByDate} />);
		const tableRows = screen.getAllByTestId("table-row");
		expect(8 - tableRows.length).toBe(6);
	});
});
