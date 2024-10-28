import { useSelector } from "react-redux";
import { RootStore } from "../state/store";

import FiveDayForecast from "../components/FiveDayForecast";
import IntroSection from "../components/IntroSection";
import WeatherHighlights from "../components/WeatherHighlights";

function Cards() {
	const fiveDayForecastState = useSelector(
		(state: RootStore) => state.fiveDayForecast
	);

	return (
		<div className="wa-container wa-highlights-container">
			<IntroSection />
			{fiveDayForecastState.status === "succeeded" && (
				<>
					<WeatherHighlights />
					<FiveDayForecast />
				</>
			)}
		</div>
	);
}

export default Cards;
