/* eslint-disable @typescript-eslint/no-explicit-any */
import TableRow from "./TableRow";

function TableBody({ groupedDataByDate }: any) {
	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		const today = new Date();

		// Check if the given date is today
		const isToday = date.toDateString() === today.toDateString();

		// Define options for formatting the day and month
		const options: any = { day: "numeric", month: "short" };

		// Get the formatted day and month (e.g., "30 Aug.")
		const dayMonth = date.toLocaleDateString("en-GB", options);

		if (isToday) {
			return `Today ${dayMonth}.`;
		} else {
			// Get the weekday (e.g., "Friday")
			const weekday = date.toLocaleDateString("en-GB", {
				weekday: "long",
			});
			return `${weekday} ${dayMonth}.`;
		}
	};

	return (
		<div className="wa-table-body-wrapper">
			{groupedDataByDate.map((item: any, index: number) => {
				if (item.data.length < 8 && index === 0) {
					const placeholderNumber: number = 8 - item.data.length;

					const renderPlaceholders = Array.from(
						{
							length: placeholderNumber,
						},
						() => (
							<div className="wa-column wa-column-placeholder" />
						)
					);

					return (
						<TableRow
							key={index}
							item={item}
							formatDate={formatDate}
							renderPlaceholders={renderPlaceholders}
						/>
					);
				}

				if (item.data.length < 8 && index === 5) {
					const placeholderNumber: number = 8 - item.data.length;

					const renderPlaceholders = Array.from(
						{
							length: placeholderNumber,
						},
						() => (
							<div className="wa-column wa-column-placeholder" />
						)
					);

					return (
						<TableRow
							key={index}
							item={item}
							formatDate={formatDate}
							renderPlaceholders={renderPlaceholders}
						/>
					);
				}

				return (
					<TableRow key={index} item={item} formatDate={formatDate} />
				);
			})}
		</div>
	);
}

export default TableBody;
