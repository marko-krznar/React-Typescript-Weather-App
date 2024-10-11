import { render, screen } from "@testing-library/react";
import TableBody, { GroupedDataByDateProps } from "../../table/TableBody";
// import TableRow from "../../table/TableRow";

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

	// it("renders placeholder rows when data has fewer than 8 items", () => {
	// 	const groupedDataByDate: GroupedDataByDateProps["groupedDataByDate"] = [
	// 		{
	// 			date: "2024-10-10",
	// 			data: [
	// 				{
	// 					dt_txt: "2024-10-10 00:00:00",
	// 					dt: 1600000000,
	// 					weather: [{ icon: "01d", description: "clear sky" }],
	// 				},
	// 			],
	// 		},
	// 		{
	// 			date: "2024-10-11",
	// 			data: [
	// 				{
	// 					dt_txt: "2024-10-11 00:00:00",
	// 					dt: 1600080000,
	// 					weather: [{ icon: "02d", description: "few clouds" }],
	// 				},
	// 			],
	// 		},
	// 	];
	// 	render(<TableBody groupedDataByDate={groupedDataByDate} />);
	// 	const tableRows = screen.getAllByTestId("table-row");
	// 	expect(tableRows.length).toBe(4);
	// });

	// it("correctly calculates the placeholderFrontPosition", () => {
	// 	const groupedDataByDate: GroupedDataByDateProps["groupedDataByDate"] = [
	// 		{
	// 			date: "2024-10-10",
	// 			data: [
	// 				{
	// 					dt_txt: "2024-10-10 00:00:00",
	// 					dt: 1600000000,
	// 					weather: [{ icon: "01d", description: "clear sky" }],
	// 				},
	// 			],
	// 		},
	// 		{
	// 			date: "2024-10-11",
	// 			data: [
	// 				{
	// 					dt_txt: "2024-10-11 00:00:00",
	// 					dt: 1600080000,
	// 					weather: [{ icon: "02d", description: "few clouds" }],
	// 				},
	// 			],
	// 		},
	// 	];
	// 	render(<TableBody groupedDataByDate={groupedDataByDate} />);
	// 	const tableRows = screen.getAllByTestId("table-row");
	// 	expect(tableRows[0]).toHaveAttribute(
	// 		"placeholderFrontPosition",
	// 		"true"
	// 	);
	// 	expect(tableRows[1]).toHaveAttribute(
	// 		"placeholderFrontPosition",
	// 		"false"
	// 	);
	// });

	// it("passes correct props to TableRow", () => {
	// 	const groupedDataByDate: GroupedDataByDateProps["groupedDataByDate"] = [
	// 		{
	// 			date: "2024-10-10",
	// 			data: [
	// 				{
	// 					dt_txt: "2024-10-10 00:00:00",
	// 					dt: 1600000000,
	// 					weather: [{ icon: "01d", description: "clear sky" }],
	// 				},
	// 			],
	// 		},
	// 	];
	// 	render(<TableBody groupedDataByDate={groupedDataByDate} />);
	// 	const tableRowProps = TableRow.mock.calls[0][0];
	// 	expect(tableRowProps.item).toEqual(groupedDataByDate[0]);
	// 	expect(tableRowProps.placeholderNumber).toBe(7);
	// 	expect(tableRowProps.placeholderFrontPosition).toBe(true);
	// });
});
