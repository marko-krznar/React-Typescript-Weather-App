interface CardProps {
	icon: React.ReactNode;
	item: string;
	value: string | number;
	mesure: string;
}

function CardItem({ icon, item, value, mesure }: CardProps) {
	return (
		<div className="wa-card-wrapper">
			<h2 className="heading">
				{icon} {item}
			</h2>
			<p className="wa-value">
				{value}
				<span className="wa-mesure-sign">{mesure}</span>
			</p>
		</div>
	);
}

export default CardItem;
