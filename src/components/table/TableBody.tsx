/* eslint-disable @typescript-eslint/no-explicit-any */
import TableRow from "./TableRow";

function TableBody({ groupedDataByDate }: any) {
	return (
		<div className="wa-table-body-wrapper">
			{groupedDataByDate.map((item: any, index: number) => {
				if (item.data.length < 8 && index === 0) {
					const placeholderNumber: number = 8 - item.data.length;

					return (
						<TableRow
							key={index}
							item={item}
							placeholderNumber={placeholderNumber}
						/>
					);
				}

				if (item.data.length < 8 && index === 5) {
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
