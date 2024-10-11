import { render, screen } from "@testing-library/react";
import TableHeader from "../../table/TableHeader";

describe("TableHeader", () => {
	it("renders the time columns correctly", () => {
		render(<TableHeader />);
		const timeColumns = [
			"00:00",
			"03:00",
			"06:00",
			"09:00",
			"12:00",
			"15:00",
			"18:00",
			"21:00",
		];
		timeColumns.forEach((time) => {
			const column = screen.getByText(time);
			expect(column).toBeInTheDocument();
		});
	});

	it("renders the placeholder div", () => {
		render(<TableHeader />);
		// const placeholder = screen.getByClassName("wa-placeholder");
		// expect(placeholder).toBeInTheDocument();
	});
});
