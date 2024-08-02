function Cards() {
	return (
		<div className="wa-cards">
			<span>Today's Highlights</span>
			<div className="wa-cards-wrapper">
				<div className="wa-card-wrapper">
					<h3>Wind</h3>
					<span>Speed</span>
					<span>Deg</span>
				</div>
				<div className="wa-card-wrapper">
					<h3>Title</h3>
					<span>Value</span>
					<span>Description</span>
				</div>
				<div className="wa-card-wrapper">
					<h3>Title</h3>
					<span>Value</span>
					<span>Description</span>
				</div>
			</div>
		</div>
	);
}

export default Cards;
