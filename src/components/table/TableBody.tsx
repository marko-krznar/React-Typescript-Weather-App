import TableRow from "./TableRow";
import { HourWeatherProps } from "./TableRow";

export interface ItemRowProps {
	date: string;
	data: Array<HourWeatherProps>;
}

export interface GroupedDataByDateProps {
	groupedDataByDate: Array<ItemRowProps>;
}

function TableBody({ groupedDataByDate }: GroupedDataByDateProps) {
	return (
		<div className="wa-table-body-wrapper">
			{groupedDataByDate.map((item: ItemRowProps, index: number) => {
				if (item.data.length < 8 && (index === 0 || index === 5)) {
					const placeholderNumber = 8 - item.data.length;

					const placeholderFrontPosition = index === 0 ? true : false;

					return (
						<TableRow
							key={index}
							item={item}
							placeholderNumber={placeholderNumber}
							placeholderFrontPosition={placeholderFrontPosition}
						/>
					);
				}

				return <TableRow key={index} item={item} />;
			})}
		</div>
	);
}

export default TableBody;
