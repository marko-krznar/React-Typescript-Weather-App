import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Divider from "./Divider";

describe("Divider component", () => {
	test("renders the divider with the correct class", () => {
		render(<Divider />);
		const dividerElement = screen.getByRole("separator");
		expect(dividerElement).toBeInTheDocument();
		expect(dividerElement).toHaveClass("wa-divider");
	});
});
