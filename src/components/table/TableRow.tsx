/* eslint-disable @typescript-eslint/no-explicit-any */
/* FUTURE add columns
<div className="wa-column wa-column-temp">27°C / 32°C</div>
<div className="wa-column">3.9mm</div>
<div className="wa-column">1m/s</div>
*/
function TableRow({ item, index, formatDate, renderPlaceholders }: any) {
	return (
		<div key={item.date + index} className="wa-table-row-wrapper">
			<div className="wa-column wa-column-today">
				{formatDate(item.date)}
			</div>
			<div className="wa-table-columns-wrapper">
				{renderPlaceholders}
				{item.data.map((hourWeather: any) => {
					return (
						<div className="wa-column wa-img-wrapper">
							<img
								src={`https://openweathermap.org/img/wn/${hourWeather.weather[0].icon}@4x.png`}
								alt={hourWeather.weather[0].description}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default TableRow;
