/* FUTURE add columns
<div className="wa-column wa-column-temp">27°C / 32°C</div>
<div className="wa-column">3.9mm</div>
<div className="wa-column">1m/s</div>
*/

interface TableRowProps {
	item: {
		date: string;
		data: Array<HourWeatherProps>;
	};
	key: number;
	placeholderNumber?: number;
	placeholderFrontPosition?: boolean;
}

export interface HourWeatherProps {
	weather: Array<{
		icon: string;
		description: string;
	}>;
	dt: number;
	dt_txt: string;
}

function TableRow({
	item,
	placeholderNumber,
	placeholderFrontPosition,
}: TableRowProps) {
	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		const today = new Date();

		const isToday = date.toDateString() === today.toDateString();

		const dayMonth = date.toLocaleDateString("en-GB", {
			day: "numeric",
			month: "short",
		});

		if (isToday) {
			return `Today ${dayMonth}.`;
		} else {
			const weekday = date.toLocaleDateString("en-GB", {
				weekday: "long",
			});

			return `${weekday} ${dayMonth}.`;
		}
	};

	const renderPlaceholders =
		placeholderNumber &&
		Array.from({ length: placeholderNumber }, () => (
			<div className="wa-column wa-column-placeholder">N/A</div>
		));

	return (
		<div key={item.date} className="wa-table-row-wrapper">
			<div className="wa-column">{formatDate(item.date)}</div>
			<div className="wa-table-columns-wrapper">
				{placeholderFrontPosition && renderPlaceholders}
				{item.data.map((hourWeather: HourWeatherProps) => (
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
				{!placeholderFrontPosition && renderPlaceholders}
			</div>
		</div>
	);
}

export default TableRow;
