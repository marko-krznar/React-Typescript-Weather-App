import { render, screen } from "@testing-library/react";
import WeatherHighlightCard from "../WeatherHighlightCard";

describe("WeatherHighlightCard Component", () => {
	it("should render the icon, item, value, and measure correctly", () => {
		const mockIcon = <span>🌞</span>;
		const mockItem = "Temperature";
		const mockValue = 25;
		const mockMesure = "°C";

		render(
			<WeatherHighlightCard
				icon={mockIcon}
				item={mockItem}
				value={mockValue}
				mesure={mockMesure}
			/>
		);

		const iconElement = screen.getByText("🌞");
		expect(iconElement).toBeInTheDocument();

		const itemElement = screen.getByText(/Temperature/i);
		expect(itemElement).toBeInTheDocument();

		const valueElement = screen.getByText("25");
		expect(valueElement).toBeInTheDocument();

		const measureElement = screen.getByText("°C");
		expect(measureElement).toBeInTheDocument();
	});

	// it("should render 'undefined' for value if no value is passed", () => {
	// 	const mockIcon = <span>🌞</span>;
	// 	const mockItem = "Humidity";
	// 	const mockMesure = "%";

	// 	render(
	// 		<WeatherHighlightCard
	// 			icon={mockIcon}
	// 			item={mockItem}
	// 			value={undefined}
	// 			mesure={mockMesure}
	// 		/>
	// 	);

	// 	const valueElement = screen.getByText("undefined");
	// 	expect(valueElement).toBeInTheDocument();
	// });
});
