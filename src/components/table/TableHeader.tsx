function TableHeader() {
	return (
		<div className="wa-table-header-wrapper">
			<div className="wa-placeholder" />
			<div className="wa-table-columns-wrapper">
				<div className="wa-column">00:00</div>
				<div className="wa-column">03:00</div>
				<div className="wa-column">06:00</div>
				<div className="wa-column">09:00</div>
				<div className="wa-column">12:00</div>
				<div className="wa-column">15:00</div>
				<div className="wa-column">18:00</div>
				<div className="wa-column">21:00</div>
				{/* <div className="wa-column wa-column-temp">Temperature (low/high)</div>
						<div className="wa-column">Rain</div>
						<div className="wa-column">Wind</div> */}
			</div>
		</div>
	);
}

export default TableHeader;
