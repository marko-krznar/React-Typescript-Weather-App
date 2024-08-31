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
					const placeholderNumber: number = 8 - item.data.length;

					return (
						<TableRow
							key={index}
							item={item}
							placeholderNumber={placeholderNumber}
						/>
					);
				}

				return <TableRow key={index} item={item} />;
			})}
		</div>
	);
}

export default TableBody;
