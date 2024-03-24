import React from "react";
import { BsEmojiFrown } from "react-icons/bs";

function HourlyWeatherItem() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "1rem",
				backgroundColor: "#0298E2",
				width: "fit-content",
				borderRadius: "0.5rem",
			}}
		>
			<span
				style={{
					background: "#0288D1",
					textAlign: "center",
					fontSize: "12px",
					fontWeight: "bold",
					padding: "0.25rem",
					borderRadius: "0.5rem 0.5rem 0 0",
				}}
			>
				22:00
			</span>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "1rem",
					alignItems: "center",
					padding: "0 1rem 1rem",
				}}
			>
				<BsEmojiFrown />
				<span
					style={{
						fontSize: "12px",
					}}
				>
					Clear Sky
				</span>
				<span
					style={{
						fontSize: "20px",
						fontWeight: "bold",
					}}
				>
					13° C
				</span>
			</div>
		</div>
	);
}

export default HourlyWeatherItem;
