import FiveDayForecast from "../components/FiveDayForecast";
import IntroSection from "../components/IntroSection";
import WeatherHighlights from "../components/WeatherHighlights";

function Cards() {
	return (
		<div className="wa-container wa-highlights-container">
			<IntroSection />
			<WeatherHighlights />
			<FiveDayForecast />
		</div>
	);
}

export default Cards;
