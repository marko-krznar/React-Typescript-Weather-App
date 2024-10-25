import { render, screen } from "@testing-library/react";
import IntroSection from "../IntroSection";

describe("IntroSection", () => {
	it("should render the title and paragraphs correctly", () => {
		render(<IntroSection />);

		const titleElement = screen.getByText(/Weather App test project!/i);
		expect(titleElement).toBeInTheDocument();

		const paragraphs = [
			"This application utilizes the OpenWeather API to fetch and display real-time weather data for any city.",
			"Simply enter a city name to see the current temperature, humidity, and weather conditions.",
			"The app is built with React and TypeScript, ensuring a robust and responsive user experience.",
		];

		paragraphs.forEach((text) => {
			expect(screen.getByText(text)).toBeInTheDocument();
		});
	});
});
